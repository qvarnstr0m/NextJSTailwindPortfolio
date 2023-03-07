import React from "react";

const Projects = ({ pinnedItems }) => {
  return (
    <div className="flex flex-wrap w-full md:justify-between md:items-start">
      <h3 className="text-2xl mr-2 github-link mb-6 justify-start md:sticky md:top-12">
        <a
          href="https://github.com/qvarnstr0m"
          target="_blank"
          rel="noopener noreferrer"
          title="These are my pinned projects on Github. Visit my profile if you are interested
          in my other personal / school projects and contributions to open source."
        >
          Featured projects
        </a>
        <img src="star.png" className="github-icon" />
      </h3>

      <div className="sm:hidden mb-5">
        <p>
          These are my pinned projects on Github. Click to get to their
          repository for detailed information. Or visit{" "}
          <a
            href="https://github.com/qvarnstr0m"
            target="_blank"
            rel="noopener noreferrer"
          >
            my profile
          </a>{" "}
          if you are interested in my other personal / school projects and
          contributions to open source.
        </p>
      </div>
      <div className="w-full md:w-3/5">
        <ul>
          {pinnedItems.map((item) => (
            <li key={item.node.id} className="li-pinned">
              <a href={item.node.url} target="_blank" rel="noopener noreferer">
                {item.node.name}
              </a>
              <p>{item.node.description}</p>
              <div
                key={item.node.key + item.node.key}
                className="text-xs text-gray-500"
              >
                Topics:
                {item.node.repositoryTopics.edges.map((topic, index) => (
                  <span key={index}>&#32;{topic.node.topic.name}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
