import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Background from "@/components/Background";
import Films from "@/components/home/Films";
import Featured from "@/components/home/Featured";
import About from "@/components/home/About";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".layer").forEach(
      (layer, i) => {
        let depth = (i + 1) * 0.12;

        if (layer.classList.contains("layer-hero")) {
          depth = 0.15;
        }

        if (layer.classList.contains("layer-background")) {
          depth = 0.5;
        }

        if (layer.classList.contains("layer-films")) {
          depth = 3.8;
        }

        if (layer.classList.contains("layer-featured")) {
          depth = 3;
        }

        if (layer.classList.contains("layer-about")) {
          depth = 2.5;
        }

        if (layer.classList.contains("layer-footer")) {
          depth = 2.5;
        }

        gsap.to(layer, {
          scrollTrigger: {
            trigger: ".parallax-container",
            start: "top top",
            end: "bottom bottom",
            scrub: true
          },
          y: () => -(window.innerHeight * depth),
          ease: "none"
        })
      }
    )
  }, [])

  return (
    <main className="w-full h-[3000px] flex flex-col items-center page-container">
      <Navbar />

      <section className="layer layer-hero w-full">
        <Hero />
      </section>

      <section className="layer layer-background w-full">
        <Background />
      </section>

      <section className="layer layer-films">
        <Films />
      </section>

      <section className="layer layer-featured w-full">
        <Featured />
      </section>

      <section className="layer layer-about">
        <About />
      </section>

      <section className="layer layer-footer w-full">
        <Footer />
      </section>

    </main>
  );
};

export default Index;
