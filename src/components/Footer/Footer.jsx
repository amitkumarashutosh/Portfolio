import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer_title">AmitK</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/amitkumarashutosh"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kumar-ashutosh/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="#" className="footer_social-link">
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Amitkr. All rights reserved</span>
      </div>
    </footer>
  );
}
