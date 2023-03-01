import React from 'react';
import GithubEventsComponent from "./GithubEvents/GithubEventsComponent";

const Github = () => {
  return (
    <div className="flex flex-wrap w-full md:justify-end md:items-start mt-20">
      <h3 className="text-2xl mr-2 github-link mb-6">
      <a href="https://github.com/qvarnstr0m" target="_blank" rel="noopener noreferrer" title="Visit my Github">
      What am i up to?
      </a>
      <img src="github.png" className="github-icon" />
      </h3>
      <div className="w-full md:w-1/3">
        <GithubEventsComponent username="qvarnstr0m"/>
      </div>
    </div>
  )
}

export default Github