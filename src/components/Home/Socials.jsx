import React from "react";

const Socials = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/amitkumarashutosh"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/amit-kumar-ashutosh/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a href="#" className="home__social-icon">
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Socials;
