import { lazy, Suspense } from "react";
import { ThemeProvider } from "./ThemeContext";

// lazy load major sections to split bundles
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const Pricing = lazy(() => import("./components/Pricing"));
const Testinomials = lazy(() => import("./components/Testinomials"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-100 text-slate-900 overflow-x-hidden glow-bg dark:bg-slate-900 dark:text-white">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Navbar />
          <Hero />
          <Features />
          <Pricing />
          <Testinomials />
          <FAQ />
          <Contact />
          <Footer />
          <ScrollToTop />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App
