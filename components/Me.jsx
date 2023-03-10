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
          For the last couple of years I have been working on learning to
          develop different kinds of applications, mainly using the .NET
          platform but also recently looking at front-end and JavaScript.
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
          / administration to name a few.
        </p>

        <p className="text-start mt-6">
          In my spare time I try to run a few times a week and spend time with
          my family, preferably outdoors. Cooking is also a little hobby of
          mine.
        </p>

        <p className="text-start mt-6">
          💥 Looking for an internship for the fall / winter of 2023, I like
          working with C#, JS, SQL, React and .NET to name a few, but I also
          love to learn new tech, front or back-end. Feel free to contact me at{" "}
          <a href="mailto:mqvarnstrom80@gmail.com?subject=Hello!">
            mqvarnstrom80@gmail.com
          </a>{" "}
          if this sounds interesting to you or anyone you may know! 💥
        </p>
      </div>
    </div>
  );
};

export default Me;
