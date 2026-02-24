import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testinomials from "./components/Testinomials";
import Footer from "./components/Footer";

function App() {
  return (
  <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden glow-bg">
    <Navbar/>
    <Hero />
    <Features />
    <Pricing />
    <Testinomials />
    <Footer />

  </div>
  );
}

export default App
