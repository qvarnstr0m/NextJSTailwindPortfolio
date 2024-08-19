import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 mb-12">
      <footer>
        <ul className="footer-links">
          <li>
            <a
              href="https://www.github.com/qvarnstr0m/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Github profile!"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/martin-qvarnstrom-953275248/"
              target="_blank"
              rel="noopener noreferrer"
              title="I'm on Linkedin!"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
