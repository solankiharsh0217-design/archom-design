import { Routes, Route } from 'react-router-dom';
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiziPage from "./pages/ServiziPage";
import LavoriPage from "./pages/LavoriPage";
import ChiSiamoPage from "./pages/ChiSiamoPage";
import ContattiPage from "./pages/ContattiPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servizi" element={<ServiziPage />} />
        <Route path="/lavori" element={<LavoriPage />} />
        <Route path="/chi-siamo" element={<ChiSiamoPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
      </Routes>
      <Footer />
    </SmoothScroll>
  );
}

export default App;