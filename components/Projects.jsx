import React from 'react';


const Projects = ({ pinnedItems }) => {
  return (
    <div className="flex flex-wrap w-full md:justify-end md:items-start mt-20">
    <h3 className="text-2xl mr-2 github-link mb-6">
    <a href="https://github.com/qvarnstr0m" target="_blank" rel="noopener noreferrer" title="Visit my Github">
    Featured projects
    </a>
    <img src="star.png" class="github-icon" />
    </h3>
    <div className="w-full md:w-1/3">
      <ul>
        {pinnedItems.map((item) =>(
          <li key="{item.node.id}">
            <a href={item.node.url} target="_blank" rel="noopener noreferer">
              {item.node.name}
            </a>
            <p>
              {item.node.description}
            </p>
            <div className="text-xs text-gray-500">
              Topics:
              {item.node.repositoryTopics.edges.map((topic) => (
              <span key={topic.node.id} className="text-xs text-gray-500">&#32;{topic.node.topic.name}</span>
              ))}
            </div>
          </li>
        ))

        }
      </ul>
    </div>
  </div>
  )
}

export default Projects