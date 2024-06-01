import Hero from "./Hero";
import "./home.css";
import About from "./About";
const Home = () => {
  return (
    <section className="home">
      <Hero />
      <About />
    </section>
  );
};
export default Home;
