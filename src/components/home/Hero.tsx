import { useIsOnScreen } from "@/hooks/useOnScreen";
import BlurText from "@/components/BlurText";

const Hero = () => {
  const { isOnScreen } = useIsOnScreen();

  return (
    <section
      id="hero"
      className="relative p-gap-md md:px-gap-xxl h-mscreen md:h-screen flex items-end md:items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="z-10 w-full flex flex-col items-center md:items-end">
        <div className="text-center md:text-right flex flex-col items-center md:items-end gap-gap-xxs md:gap-gap-xs">
          <h1>
            <BlurText
              text="Jasmijn Schrofer"
              delay={300}
              animateBy="words"
              direction="top"
              className="text-4xl md:text-7xl lg:text-7xl"
            />
          </h1>
          <p
            className={`font-serif italic text-xl md:text-2xl text-foreground-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-300`}
          >
            Film Director
          </p>
          <p
            className={`hidden md:block max-w-2xl max-md:text-sm md:text-lg text-foreground-more-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-500`}
          >
            A Dutch/Chinese American film director based in Amsterdam, renowned
            for visually poetic storytelling and exploration of profound themes.
            My work often intertwines themes of spirituality, culture, and human
            connection.
          </p>

          <p
            className={`md:hidden max-w-2xl max-md:text-sm md:text-lg text-foreground-more-muted observed ${isOnScreen ? "on-screen" : "off-screen-right"} delay-500`}
          >
            A Dutch/Chinese American film director, renowned for visually poetic
            storytelling and exploration of profound themes.
          </p>
        </div>

        <a
          href="/work"
          className="inline-block mt-gap-sm md:mt-gap-md button-primary hover-lift animate-fadeIn"
          style={{ animationDelay: "1.4s" }}
        >
          Explore My Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute w-full bottom-8 px-gap-xxl transform -translate-x-1/2 animate-bounce justify-center md:justify-end hidden md:flex">
        <svg
          className="w-6 h-6 text-foreground-more-muted"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
