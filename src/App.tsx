import Navbar from "./components/navbar/navbar";
import Showcase from "./components/showcase/showcase";
import Section from "./components/section/section";
import Potential from "./components/potential/potential";
import Product from "./components/products/products";
import Section2 from "./components/section-2/section2";
import Section3 from "./components/section-3/section3";
import { gsap } from "gsap";
import Section4 from "./components/section-4/section4";
import { useEffect, useRef } from "react";
import Footer from "./components/footer/footer";
function App() {




  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const smoothScroll = () => {
        const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

        let currentScroll = 0;
        let targetScroll = 0;
        let ease = 0.03;

        const setBodyHeight = () => {
          document.body.style.height = `${scrollContainer.scrollHeight}px`;
        };

        const smoothScrolling = () => {
          targetScroll = window.scrollY;
          currentScroll = lerp(currentScroll, targetScroll, ease);
          scrollContainer.style.transform = `translate3d(0, -${currentScroll}px, 0)`;
          requestAnimationFrame(smoothScrolling);
        };

        setBodyHeight();
        window.addEventListener("resize", setBodyHeight);
        smoothScrolling();
      };

      smoothScroll();
    }
  }, []);

 

  return (
    <>
      <Navbar/>
      <main ref={scrollContainerRef} style={{ position: "fixed", width: "100%", top: 0, left: 0 }}>
        <Showcase/>
        <Section/>
        <Potential/>
        <Product/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
      </main>
    </>
  )
}

export default App
