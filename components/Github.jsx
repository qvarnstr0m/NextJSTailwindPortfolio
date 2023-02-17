import React from 'react';
import GithubEventsComponent from "./GithubEvents/GithubEventsComponent";

const Github = () => {
  return (
    <div>
      <div className="flex items-center mb-3">

      </div>
      <div className="flex flex-wrap w-full md:justify-end md:items-start">
      <h3 class="text-2xl mr-2 github-link mb-6">
      <a href="https://github.com/qvarnstr0m" target="_blank" rel="noopener noreferrer" title="Visit my Github">
        What am i up to?
      </a>
      <img src="github.png" class="github-icon" />
    </h3>
        <GithubEventsComponent username="qvarnstr0m" />
      </div>
    </div>
  )
}

export default Github