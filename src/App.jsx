import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Lenis from "lenis";

import Navbar from "./routes/navbar";
import Home from "./pages/landing/main";
import About from "./pages/about/main";
import Works from "./pages/works/main";
import NotFound from "./pages/not-found";

export default function App() {
  const lenisRef = useRef();
  const lenis = new Lenis({
    duration: 0.8,   // Slippery at Higher value
    smooth: true,    
    lerp: 0.2,           // Smoother scrolling
    wheelMultiplier: 1.5, // Slower scroll speed
  });

  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // Cleanup function if needed (for unmounting)
    };
  }, []);

  return (
    <BrowserRouter>
      <main className="px-12 py-6">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
