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
            I'm a recent B.Tech graduate in Computer Science from Lovely
            Professional University. Coding is not just my profession; it's a
            calling. I've utilized the MERN stack to build robust applications
            like a dynamic blog app and a real estate management system, each
            reflecting my focus on precision and innovation.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
