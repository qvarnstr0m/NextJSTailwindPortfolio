import React from "react";
import { gql } from "@apollo/client";
import { client } from "../lib/apolloClient";

const GithubEventsGraphQL = ({ login = "qvarnstr0m", commits = [] }) => {
  return (
    <div className="flex flex-wrap w-full md:justify-between md:items-start mt-20">
      <h3 className="text-2xl mr-2 github-link mb-6 md:sticky md:top-0">
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
          title="These are my latest events on Github. Visit my profile for more information \
          about my developy activities."
        >
          What am i up to?
        </a>
      </h3>
      <div className="sm:hidden mb-5">
        <p>
          These are my latest events on Github. Visit{" "}
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            my profile
          </a>{" "}
          for more information about my development related activities.
        </p>
      </div>
      <div className="w-full md:w-3/5">
        <ul>
          {commits.map((commit) => (
            <li key={commit.oid} className="text-left li-events">
              <a href={commit.url} target="_blank" rel="noopener noreferrer">
                {commit.repoName}
              </a>
              <p className="text-sm">"{commit.message}"</p>
              <div className="text-xs text-gray-500">
                by {commit.author?.user?.login || commit.author.name} at{" "}
                {new Date(commit.committedDate).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GithubEventsGraphQL;

export const GET_USER_COMMITS = gql`
  query GetUserCommits($login: String!) {
    user(login: $login) {
      repositories(
        first: 20
        orderBy: { field: UPDATED_AT, direction: DESC }
        privacy: PUBLIC
        ownerAffiliations: OWNER
      ) {
        nodes {
          name
          url
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 5) {
                  edges {
                    node {
                      message
                      committedDate
                      url
                      oid
                      author {
                        name
                        user {
                          login
                          url
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
    }
  }
`;

export async function fetchGithubCommits(login = "qvarnstr0m") {
  const { data } = await client.query({
    query: GET_USER_COMMITS,
    variables: { login },
  });

  const commits = data.user.repositories.nodes
    .flatMap((repo) => {
      const edges = repo.defaultBranchRef?.target?.history?.edges || [];
      return edges.map(({ node }) => ({
        ...node,
        repoName: repo.name,
        repoUrl: repo.url,
      }));
    })
    .filter((commit) => commit.author?.user?.login === login)
    .sort((a, b) => new Date(b.committedDate) - new Date(a.committedDate))
    .slice(0, 5);

  return commits;
}
