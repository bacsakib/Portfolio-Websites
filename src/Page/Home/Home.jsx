import DoSection from "./components/DoSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";


const Home = () => {
  return (
    <div>
      <div>

        <Navbar></Navbar>

        {/* HERO SECTION */}
        <Hero></Hero>

        {/* What I Do Section */}
        <DoSection></DoSection>

        {/* My Resume Section */}
        <Resume></Resume>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;