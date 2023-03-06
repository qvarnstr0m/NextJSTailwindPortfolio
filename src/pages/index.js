import Head from "next/head";
import Navbar from "../../components/Navbar";
import Me from "../../components/Me";
import Footer from "../../components/Footer";
import Github from "../../components/Github";
import Projects from "../../components/Projects";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export default function Home({ pinnedItems }) {
  return (
    <div>
      <Head>
        <title>qvarnstrom.dev</title>
        <meta name="description" content="Developer" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-50 2xl:px-80 py-10 min-h-screen">
        <div>
          <Navbar />
        </div>
        <div className="flex-grow mt-16">
          <Me />
        </div>
        <div className="flex-grow mt-16">
          <Projects pinnedItems={pinnedItems} />
        </div>
        <div className="flex-grow mt-16">
          <Github />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        viewer {
          login
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

  const pinnedItems = data.viewer.pinnedItems.edges;
  return {
    props: {
      pinnedItems,
    },
  };
}
