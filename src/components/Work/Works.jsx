import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData, projectsNav } from "./Data.js";
import WorkItems from "./WorkItems.jsx";

export default function Works() {
  let [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);

  function handleClick(e, index) {
    setItem({ name: e.target.textContent });
    setActive(index);
  }
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""}
              }  work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}
