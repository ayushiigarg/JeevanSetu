import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Contact />
    </div>
  );
};

export default Home;
