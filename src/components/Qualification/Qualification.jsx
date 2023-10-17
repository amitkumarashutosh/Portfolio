import React from "react";
import "./Qualification.css";

export default function Qualification() {
  return (
    <section className="qualification section">
      <h2 className="section__sub">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button-flex qualification__active">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button-flex">
            <i className="uil uil-file-alt qualification__icon"></i> Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.tech (CSE)</h3>
                <span className="qualification__subtitle">
                  Lovely Professional University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019-2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">React Project</h3>
                <span className="qualification__subtitle">
                  Meme Generator, TextConverter
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>9/2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Jagat Mission</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2018-2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Javascript Project</h3>
                <span className="qualification__subtitle">WeatherApp</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>8/2023
                </div>
              </div>
            </div>
          </div>
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">web design</h3>
                <span className="qualification__subtitle">Spain-Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-PResent
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art work design</h3>
                <span className="qualification__subtitle">Spain-Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-PResent
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">web design</h3>
                <span className="qualification__subtitle">Spain-Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-PResent
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art work design</h3>
                <span className="qualification__subtitle">Spain-Institute</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-PResent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
