import React from 'react';


const Projects = ({ pinnedItems }) => {
  return (
    <div className="flex flex-wrap w-full md:justify-between md:items-start mt-20">
    <h3 className="text-2xl mr-2 github-link mb-6 justify-start">
    <a href="https://github.com/qvarnstr0m" target="_blank" rel="noopener noreferrer"  title="These are my pinned projects on Github. Visit my profile for more information 
    about my projects,">
      Featured projects
    </a>
    <img src="star.png" className="github-icon" />
    </h3>
    <div className="w-full md:w-3/5">
      <ul>
        {pinnedItems.map((item) =>(
          <li key="{item.node.id}" className="li-pinned">
            <a href={item.node.url} target="_blank" rel="noopener noreferer">
              {item.node.name}
            </a>
            <p>
              {item.node.description}
            </p>
            <div className="text-xs text-gray-500">
              Topics:
              {item.node.repositoryTopics.edges.map((topic) => (
              <span key={topic.node.id}>&#32;{topic.node.topic.name}</span>
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