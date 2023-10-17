import React from "react";
import "./Project.css";
import Works from "./Works";

export default function Project() {
  return (
    <section className="work section" id="portfolio">
      <h className="section__title">Projects</h>
      <span className="section__subtitle">Most recent works</span>
      <Works />
    </section>
  );
}
