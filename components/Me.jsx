import React from "react";

const Me = () => {
  return (
    <div className="md:flex">
      <div className="sm:flex-col shrink-0 sm:ml-auto sm:order-1 md:pl-10">
        <img
          src="me.jpg"
          alt="Profile image"
          className="profile-image md:max-w-xs lg:max-w-sm"
        />
      </div>
      <div className="lg:max-w-xl mt-12 md:mt-0">
        <p className="text-start">
          A problem-solving coder with a passion for learning new technologies.
          Over the past few years, I have been focused on mastering the .NET
          stack, primarily C# and web development with Blazor. Along the way,
          I’ve also gained experience with React, databases, EF Core, Azure, and
          some CI/CD, either through work or personal projects.
        </p>

        <p className="text-start mt-6">
          In June of 2024 I finished my 2 years at{" "}
          <a
            href="https://campus.varberg.se/yrkeshogskola/systemutvecklare-net"
            target="_blank"
            rel="noopener noreferer"
          >
            Campus Varberg
          </a>{" "}
          System Developer program, today I am currently working at{" "}
          <a
            href="https://www.effectsoft.se"
            target="_blank"
            rel="noopener noreferer"
          >
            Effectsoft
          </a>{" "}
          in Halmstad as a Software Consultant, where I did my internship,
          mainly with .NET web applications, both front and backend.
        </p>

        <p className="text-start mt-6">
          In my spare time I run a few times a week, climb and spend time with
          my two daughters, preferably outdoors. When I get the time I try to
          broaden my horizon as a developer with new projects, going to meetups
          and just trying new stuff.
        </p>

        <p className="text-start mt-6">
          🚀 My latest side project is live at{" "}
          <a
            href="https://www.insynskollen.se"
            target="_blank"
            rel="noopener noreferer"
          >
            insynskollen.se
          </a>{" "}
          and is a fullstack web app / SMS service built with React, .NET Web
          Api, MySql and a webscraper written in C#. If you are interested in
          the code, version control or my planning, check out my github or get
          in touch! 🚀
        </p>
      </div>
    </div>
  );
};

export default Me;
