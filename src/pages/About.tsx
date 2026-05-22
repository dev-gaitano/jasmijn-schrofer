import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import { useIsOnScreen } from "@/hooks/useOnScreen";

const AboutPage = () => {
  const { isOnScreen } = useIsOnScreen();
  const image1 =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1754490920/jasmijn-on-set_jvtlj2.jpg";
  const image2 =
    "https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1754555817/jasmijn-potrait_c00nhj.jpg";

  return (
    <main className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex-1">
        <section id="about" className="relative p-gap-md md:p-gap-xxl w-full">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right_30%,_var(--tw-gradient-stops))] from-primary-muted via-transparent via-45% to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_60%,_var(--tw-gradient-stops))] from-secondary-muted via-transparent via-40% to-transparent pointer-events-none"></div>

          <div className="relative z-10 space-y-gap-lg">
            <div className="mt-gap-xl md:mt-0 grid grid-cols-1 md:grid-cols-2 md:gap-gap-xxl items-start">
              {/* Image */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={image1}
                  alt="Jasmijn Schrofer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="xxs:mt-8 xxs:mb-8 md:mt-0 md:mb-0">
                {/* Bio */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Bio</h2>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    Living between Europe and Africa, and shaped by a
                    multicultural background, I have learned that no story looks
                    the same from every side. Moving between the Netherlands and
                    Kenya has taught me to notice what is often left unsaid,
                    whose voice is centered, and whose perspective is missing.
                    That way of living sharpens how I work: combining different
                    sensitivities, cultural nuances, and ways of seeing through
                    cinema’s immersive power.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    I graduated as a documentary director from the Netherlands
                    Film Academy in 2015, where I first developed a visual
                    language rooted in rhythm, texture, and emotion. My graduation
                    film{" "}
                    <span className="font-serif italic font-bold">
                      <a href="https://vimeo.com/jasmijnschrofer/tarikattrailer" target="_blank">
                        Tarikat
                      </a>
                    </span>
                    , shot within a Turkish Sufi community, explored devotion,
                    ritual, and belonging through an intimate sensory approach.
                    It reached international audiences, receiving the Sheffield
                    DocFest Audience Award, the VPRO Documentary Award, a Vimeo
                    Staff Pick, and the Film Fund Wildcard talent grant.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    More recently, my short film{" "}
                    <span className="font-serif italic font-bold">
                      <a href="https://vimeo.com/999832165" target="_blank">
                        Birth of Light
                      </a>
                    </span>
                    , filmed with the Samburu community in Northern Kenya,
                    reflects on our growing dependence on electricity and
                    questions what progress can mean when traditional rhythms
                    begin to fade. The film was selected for the Golden Calf
                    Competition and Forum of Directors at the Netherlands Film
                    Festival, and received the Blue Planet Future Award in Korea.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    Alongside my independent work, I have directed more than 100
                    commissioned projects for organizations including{" "}
                    <span className="italic font-bold">
                      VPRO, El País, Manchester City FC, African Slum Journal,
                      Holland Festival, Artis Amsterdam, ICK Amsterdam, Kenya
                      Scouts, Xylem, and KIEP 250+.
                    </span>{" "}
                    These collaborations have ranged from sustainability to art
                    and culture, each one an opportunity for meaningful exchange
                    and clear storytelling.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    Working across Europe, Africa, and Asia has deepened my
                    belief that strong films need more than aesthetics alone.
                    They need substance, urgency, and a form that serves the
                    story. My practice has evolved from prioritizing image and
                    atmosphere toward creating work where visual language and
                    narrative purpose strengthen one another. Often, a striking
                    image, encounter, or experience becomes the first spark.
                    From there, research reveals deeper layers, unexpected
                    perspectives, and the narrative shape beneath what first
                    drew me in. These discoveries are then translated into
                    immersive cinematic experiences.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    This exploration continues in my current development: a
                    sequel to Birth of Light, set in the sleepless megacities
                    of East Asia, examining humanity’s changing relationship
                    with light, progress, and the rhythms we leave behind.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    We do not see things as they are, we see them as we are.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    I’m open to new creative collaborations and artistic
                    exchange worldwide.
                  </p>
                </div>
              </div>

              <div className="space-y-gap-md">
                {/* My Process */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">My Process</h2>
                  <ol className="flex flex-col gap-gap-xs">
                    <li>
                      <h3 className="tracking-wide">1. Collaborative</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        The best work is built together. I value open communication, shared ideas, and creating a process where everyone feels involved and heard.
                      </p>
                    </li>
                    <li>
                      <h3 className="tracking-wide">2. Creative</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        Every project deserves its own language. I look for fresh angles, strong concepts, and visual approaches that bring stories to life in a distinctive way.
                      </p>
                    </li>
                    <li>
                      <h3 className="tracking-wide">3. Respectful</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        Whether working with clients, communities, or individuals on screen, I approach every collaboration with care, sensitivity, and professionalism.
                      </p>
                    </li>
                    <li>
                      <h3 className="tracking-wide">4. Timely</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        Clear planning and reliable delivery matter. I aim to keep the process smooth, focused, and on schedule without compromising quality.
                      </p>
                    </li>
                  </ol>
                </div>

                {/* Expectations */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">What you should expect from me</h2>
                  <ol className="flex flex-col gap-gap-xs">
                    <li>
                      <h3 className="tracking-wide">1. Intention</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        What story do you want to tell, and why now? We begin with your goals, audience, and budget so every decision has purpose.
                      </p>
                    </li>
                    <li>
                      <h3 className="tracking-wide">2. Concept</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        What is the essence we want to capture? Together we shape the structure, visual style, rhythm, and tone until it feels right.
                      </p>
                    </li>
                    <li>
                      <h3 className="tracking-wide">3. Production</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        Time to bring it to life. From solo shoots to full crews, I scale each production to what the story truly needs.
                      </p>
                    </li>
                    <li>
                      <h3 className="tracking-wide">4. Delivery</h3>
                      <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                        The final stage is refinement. You review, we adjust, and together we shape a final film that feels complete and effective.
                      </p>
                    </li>
                  </ol>
                </div>

                {/* Awards */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Highlights & Accolades</h2>
                  <ul className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    <li>
                      <span className="font-bold">
                        Featured on Aeon
                      </span>{" "}
                      – Tarikat | Global Curated Philosophy & Culture Platform
                    </li>
                    <li>
                      <span className="font-bold">
                        Vimeo Staff Pick
                      </span>{" "}
                      – Tarikat
                    </li>
                    <li>
                      <span className="font-bold">
                        Blue Planet Grant Award
                      </span>{" "}
                      – Busan, South Korea (Birth of Light)
                    </li>
                    <li>
                      <span className="font-bold">
                        Golden Calf Competition & Forum of the Directors Nominee
                      </span>{" "}
                      – Netherlands Film Festival (Birth of Light)
                    </li>
                    <li>
                      <span className="font-bold">
                        Audience Award
                      </span>{" "}
                      – Sheffield DocFest (Tarikat)
                    </li>
                    <li>
                      <span className="font-bold">
                        Wildcard Talent Grant
                      </span>{" "}
                      – Netherlands Film Fund (Tarikat)
                    </li>
                    <li>
                      <span className="font-bold">
                        Best Director & Best Editing Nominee
                      </span>{" "}
                      – Tel Aviv
                      International Film Festivals (Tarikat)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={image2}
                  alt="Jasmijn Schrofer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
