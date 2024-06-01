import Hero from "./Hero";
import "./home.css";
import About from "./About";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
      <Testimonial />
    </section>
  );
};
export default Home;
