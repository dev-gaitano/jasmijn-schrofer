import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Films from "@/components/home/Films";
import Featured from "@/components/home/Featured";
import About from "@/components/home/About";
import Footer from "@/components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Index = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <Parallax pages={2.76}>
        <ParallaxLayer speed={0.5}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={1.5}>
          <div className="relative w-full">
            <div className="absolute inset-0 bg-background pointer-events-none"></div>
            <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-muted via-transparent via-20% to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-muted via-transparent via-45% to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-primary-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-accent-more-muted via-transparent via-30% to-transparent pointer-events-none"></div>

            <div className="relative flex flex-col items-center">
              <Films />
              <Featured />
              <About />
            </div>
          </div>
          <Footer />
        </ParallaxLayer>


      </Parallax>
    </main>
  );
};

export default Index;
