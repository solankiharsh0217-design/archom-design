import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import Journals from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Process />
      <Gallery />
      <Journals />
      <Contact />
      <Footer />
    </SmoothScroll>
  );
}

export default App;