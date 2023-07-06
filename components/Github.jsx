import React from "react";
import GithubEventsComponent from "./GithubEvents/GithubEventsComponent";

const Github = () => {
  return (
    <div className="flex flex-wrap w-full md:justify-between md:items-start mt-20">
      <h3 className="text-2xl mr-2 github-link mb-6 md:sticky md:top-0">
        <a
          href="https://github.com/qvarnstr0m"
          target="_blank"
          rel="noopener noreferrer"
          title="These are my latest events on Github. Visit my profile for more information 
          about my developy activities."
        >
          What am i up to?
        </a>
      </h3>
      <div className="sm:hidden mb-5">
        <p>
          These are my latest events on Github. Visit{" "}
          <a
            href="https://github.com/qvarnstr0m"
            target="_blank"
            rel="noopener noreferrer"
          >
            my profile
          </a>{" "}
          for more information about my development related activities.
        </p>
      </div>
      <div className="w-full md:w-3/5">
        <GithubEventsComponent username="qvarnstr0m" />
      </div>
    </div>
  );
};

export default Github;
