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

      <section className="layer layer-hero animated relative xxs:bottom-[852px] xs:bottom-[926px] md:bottom-[1024px] lg:bottom-[768px] xl:bottom-[900px] xxl:bottom-[1080px] h-0 w-full">
        <Hero />
      </section>

      <section className="layer layer-bg-gradients animated sticky top-0 w-full">
        <Background />
      </section>

      <section className="layer layer-films animated relative xxs:bottom-[852px] xs:bottom-[926px] md:bottom-[1024px] lg:bottom-[768px] xl:bottom-[900px] xxl:bottom-[1080px] h-0">
        <Films />
      </section>

      <section className="layer layer-featured relative xxs:top-[852px] xs:top-[926px] md:top-28 lg:-top-56 xl:-top-28 xxl:-top-14 w-full">
        <Featured />
      </section>

      <section className="layer layer-about relative xxs:top-[852px] xs:top-[926px] md:top-28 lg:-top-56 xl:-top-28 xxl:-top-14">
        <About />
      </section>

      <section className="layer layer-footer relative xxs:top-[852px] xs:top-[926px] md:top-28 lg:-top-56 xl:-top-28 xxl:-top-14 w-full">
        <Footer />
      </section>
    </main>
  );
};

export default Index;
