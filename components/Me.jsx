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
      <div className="lg:max-w-md mt-12 md:mt-0">
        <p className="text-start">
          A problem-solving coder at heart with a passion for learning new tech.
          For the last couple of years I have been busy learning the .NET stack,
          mainly C# and ASP.NET Core web development. I have also been working
          with React, Node.js, MySql,
        </p>

        <p className="text-start mt-6">
          I am currently studying at{" "}
          <a
            href="https://campus.varberg.se/yrkeshogskola/systemutvecklare-net"
            target="_blank"
            rel="noopener noreferer"
          >
            Campus Varberg
          </a>
          , a two year program with focus on the .NET platform including courses
          on C#, agile work methods, front-end development and database creation
          / administration to name a few. Right now doing my internship at{" "}
          <a
            href="https://www.effectsoft.se"
            target="_blank"
            rel="noopener noreferer"
          >
            Effectsoft
          </a>{" "}
          in Halmstad.
        </p>

        <p className="text-start mt-6">
          In my spare time I try to run a few times a week and spend time with
          my family, preferably outdoors. Cooking is also a little hobby of
          mine.
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
