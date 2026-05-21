import { ArrowRight } from "lucide-react";
import { useIsOnScreen } from "@/hooks/useOnScreen";
import CountUp from "@/components/CountUp";

const About = () => {
  const { isOnScreen } = useIsOnScreen();
  const aboutImage =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1/schrofer/jasmijn-masterclass?_a=BAMAK+Go0";

  return (
    <section id="about" className="p-gap-md md:p-gap-xl xl:p-gap-xxl w-full">
      <div className="relative z-10 space-y-gap-lg">
        <h2 className="text-3xl md:text-4xl">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gap-lg items-start">
          {/* Image */}
          <div className="aspect-[3/4] rounded-xl overflow-hidden">
            <img
              src={aboutImage}
              alt="Jasmijn Schrofer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-gap-md">
            {/* Bio */}
            <div
              className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
            >
              <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                With over 15 years of experience, I’ve directed films across Europe,
                Africa, and Asia, combining striking imagery with conceptual depth.
                My work explores how people, behaviour, environment, and culture
                intertwine over time, revealing overlooked patterns in the world
                around us. My ritual-centred film
                <span className="font-serif italic font-bold">
                  Tarikat
                </span>{" "}
                received international recognition, including awards from Sheffield
                DocFest and VPRO, and a Vimeo Staff Pick.
              </p>
              <p className="text-lg text-foreground-muted leading-relaxed hidden xl:block">
                Through both independent and commissioned work, I create films that
                offer fresh perspectives, emotional resonance, and meaningful stories
                for audiences, brands, and cultural partners seeking depth and impact.
              </p>
            </div>

            <a
              href="/about"
              className="flex group button-secondary pl-0 font-serif italic max-md:text-sm"
            >
              <span>Read full bio</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:text-secondary transition-transform duration-500" />
            </a>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gap-sm">
              <div className="flex flex-col justify-center items-center gap-gap-xxs text-center glass-panel p-gap-sm hover-lift hover:shadow-lg rounded-xl transition-all ease-in-out duration-500">
                <div className="text-2xl font-bold">
                  <CountUp
                    from={0}
                    to={7}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-foreground-more-muted">
                  Films Directed
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-gap-xxs text-center glass-panel p-gap-sm hover-lift hover:shadow-lg rounded-xl transition-all ease-in-out duration-500">
                <div className="text-2xl font-bold">
                  <CountUp
                    from={0}
                    to={11}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-foreground-more-muted">
                  Awards Won
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-gap-xxs text-center glass-panel p-gap-sm hover-lift hover:shadow-lg rounded-xl transition-all ease-in-out duration-500">
                <div className="text-2xl font-bold flex items-center justify-center gap-1">
                  <CountUp
                    from={0}
                    to={60}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <p>+</p>
                </div>
                <div className="text-sm text-foreground-more-muted">
                  Screenings worldwide
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="space-y-gap-xs md:hidden xl:block">
              <h3 className="text-xl">Expertise</h3>
              <div className="flex flex-wrap gap-gap-xxs">
                {[
                  "Directing",
                  "Editing",
                  "Documentaries",
                  "Dance Films",
                  "Short Films",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-gap-xs py-gap-xxs rounded-full glass-panel, border border-secondary text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
