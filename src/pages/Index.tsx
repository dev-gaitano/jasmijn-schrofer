import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/home/HeroBackground";
import Hero from "@/components/home/Hero";
import Background from "@/components/Background";
import Films from "@/components/home/Films";
import Featured from "@/components/home/Featured";
import About from "@/components/home/About";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    gsap.to(".animated", {
      scrollTrigger: {
        trigger: ".layer-bg-gradients",
        scrub: true,
      },
      y: -200,
    });
  });

  return (
    <main className="w-full h-[3000px] flex flex-col items-center page-container">
      <Navbar />

      <section className="layer layer-hero-bg w-full">
        <HeroBackground />
      </section>

      <section className="layer layer-hero animated w-full">
        <Hero />
      </section>

      <section className="layer layer-bg-gradients animated w-full">
        <Background />
      </section>

      <section className="layer layer-films animated">
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
