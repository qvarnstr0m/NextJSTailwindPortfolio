import Head from "next/head";
import Navbar from "../../components/Navbar";
import Me from "../../components/Me";
import Footer from "../../components/Footer";
import Projects from "../../components/Projects";
import GithubEventsGraphQL, { fetchGithubCommits } from "../../components/GithubEventsGraphQL";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function Home({ pinnedItems, commits }) {
  return (
    <div>
      <Head>
        <title>qvarnstrom.dev</title>
        <meta name="description" content="Developer" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-50 2xl:px-80 py-10 min-h-screen">
        <Navbar />
        <div className="flex-grow mt-16">
          <Me />
        </div>
        <div className="flex-grow mt-16">
          <Projects pinnedItems={pinnedItems} />
        </div>
        <div className="flex-grow mt-16">
          <GithubEventsGraphQL commits={commits} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

// ⬇️ BYT från SSG till SSR
export async function getServerSideProps(ctx) {
  const token = process.env.GITHUB_ACCESS_TOKEN;

  // Ingen token i runtime? Visa sidan utan data (men krascha inte)
  if (!token) {
    return { props: { pinnedItems: [], commits: [] } };
  }

  const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });
  const authLink = setContext((_, { headers }) => ({
    headers: { ...headers, authorization: `Bearer ${token}` },
  }));

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
        {
          viewer {
            pinnedItems(first: 6) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    description
                    url
                    repositoryTopics(first: 10) {
                      edges {
                        node {
                          topic {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    const pinnedItems = data?.viewer?.pinnedItems?.edges ?? [];
    const commits = await fetchGithubCommits("qvarnstr0m"); // behåll som du har

    return { props: { pinnedItems, commits } };
  } catch (e) {
    console.error("GitHub query failed", e);
    return { props: { pinnedItems: [], commits: [] } };
  }
}
