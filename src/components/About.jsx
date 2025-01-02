import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a B.Tech graduate in Computer Science from Lovely Professional
            University, deeply passionate about coding and software development.
            As a full-stack developer, I have successfully built robust
            applications, including a dynamic blog platform and a learning
            management system. These projects showcase my commitment to
            precision, innovation, and delivering impactful solutions.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
