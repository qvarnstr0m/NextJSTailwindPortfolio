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
          programming around 2020. In June Of 2024 I finished my two years at{" "}
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
          I mainly work with fullstack web-development using tools from the .NET
          platform, but I aspire to be agnostic about the available tools and
          platforms. I try to play around with tools and languages with personal
          projects whenever possible.
        </p>
        <p className="text-start mt-6">
          However, there are a few principles that I try to stick to: writing
          readable and testable code, delivering value to users, applying clean
          code practices, continuous learning and just having an open mindset in
          general.
        </p>

        <p className="text-start mt-6">
          In my spare time I run a few times a week, climb and spend time with
          my two daughters, preferably outdoors. When I get the time I try to
          broaden my horizon as a developer with new projects and going to
          meetups.
        </p>
      </div>
    </div>
  );
};

export default Me;
