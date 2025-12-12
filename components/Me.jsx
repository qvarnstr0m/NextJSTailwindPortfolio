import React from "react";

const Me = () => {
  return (
    <div className="md:flex">
      <div className="sm:flex-col shrink-0 sm:ml-auto sm:order-1">
        <img
          src="me.jpg"
          alt="Profile image"
          className="profile-image md:max-w-xs lg:max-w-sm"
        />
      </div>
      <div className="lg:max-w-xl mt-12 md:mt-0">
        <p className="text-start">
          I work as a consultant at{" "}
          <a
            href="https://www.effectsoft.se"
            target="_self"
            rel="noopener noreferer"
          >
            Effectsoft
          </a>
          , Halmstad, Sweden. I have a diverse professional background with
          experience from the transportation and hospitality sectors. After
          adopting internet early I started building websites around the turn of
          the millennium, lost interest, and later found my way back to
          programming around 2020. In June of 2024 I finished my two years at{" "}
          <a
            href="https://campus.varberg.se/yrkeshogskola/systemutvecklare-net"
            target="_self"
            rel="noopener noreferer"
          >
            Campus Varberg
          </a>{" "}
          system developer program.
        </p>

        <p className="text-start mt-6">
          I mainly work with fullstack web-development using the .NET platform,
          but I aspire to be agnostic about languages and tools. I try to use
          different tech and interesting languages while working on personal
          projects whenever possible. I manage a simple blog where I try to keep
          track what I learn in my software development endeavors,{" "}
          <a
            href="https://qvarnstr0m-blog.spwnr.io/"
            target="_self"
            rel="noopener noreferer"
          >
            give it a read.
          </a>
        </p>

        <p className="text-start mt-6">
          I also run my own independent web hosting service,{" "}
          <a href="https://spwnr.io/" target="_self" rel="noopener noreferer">
            spwnr.io,
          </a>{" "}
          where the aforementioned blog and this website is hosted, if you're
          interested in indie European hosting or want to collaborate in any way
          feel free to get in touch.
        </p>
        <p className="text-start mt-6">
          In my spare time I run a few times a week, climb and spend time with
          my two daughters, preferably outdoors. When I get the time I try to
          broaden my horizon as a developer with new projects and going to
          meetups.
        </p>
        <p className="text-start mt-6">
          Feel free to contact me about any coding related subjects I might be
          interested in.
        </p>
      </div>
    </div>
  );
};

export default Me;
