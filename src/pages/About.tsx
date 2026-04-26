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
              <div className="space-y-gap-md">
                {/* Bio */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Bio</h2>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    After graduating from the Netherlands Film Academy in 2015,
                    where I specialized in documentary directing, I’ve directed
                    projects across Europe, Africa, and Asia, while developing a
                    visual language that values rhythm, texture, and emotion as
                    much as narrative.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    My short film{" "}
                    <span className="font-serif italic font-bold">
                      Birth of Light
                    </span>
                    , shot in Northern Kenya, was selected for the Golden Calf
                    Competition and Forum of Directors at the Netherlands Film
                    Festival and received the Blue Planet Future Award in Korea.
                    My graduation film{" "}
                    <span className="font-serif italic font-bold">Tarikat</span>
                    , about a Turkish sufi community reached audiences
                    worldwide, earning multiple festival awards and over 50,000
                    views online
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    My commissioned work includes over 100 projects for
                    organizations such as{" "}
                    <span className="italic font-bold">
                      VPRO, El País, Kenya Scouts, African Development Bank,
                      Manchester City FC, Holland Festival, and Artis Amsterdam
                    </span>
                    , covering subjects from sustainability to art and culture
                    industry. Whether collaborating with communities, brands, or
                    creative institutions, I approach each project as an
                    opportunity to build bridges, connect cultures, and invite
                    reflection on unshared realities
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    I’m currently developing Death of Darkness, the sequel to
                    Birth of Light, set in the sleepless megacities of East Asia
                    - continuing my exploration into humanity’s evolving
                    relationship with light. Like other projects, my films often
                    begin from concepts that uncover overlooked or
                    non-mainstream perspectives, combined with creating
                    cinematic and immersive experiences. Living between
                    Amsterdam and Nairobi continues to shape how I see and want
                    to tell stories.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    I’m always open to new creative collaborations and artistic
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
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    Pre-production is archaeology: I dig for the emotional
                    fossils no one else noticed. On set, I treat the camera like
                    a dance partner—hand-held, breath-synced, always one step
                    ahead of the moment.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    In post, I swap lenses for timelines, sculpting sound design
                    and color until the footage begins to dream on its own.
                  </p>
                  <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    The goal is never a “look”; it’s a feeling that lingers like
                    perfume in an empty room.
                  </p>
                </div>

                {/* Awards */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Awards</h2>
                  <ul className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    <li>Blue Planet Grant – Busan, Korea (Birth of Light)</li>
                    <li>
                      Golden Calf Nominee – Netherlands Film Festival (Birth of
                      Light)
                    </li>
                    <li>
                      Forum van de Regisseurs Award – Netherlands Film Festival
                    </li>
                    <li>
                      Best Short Documentary – Hot Docs, Toronto (Tarikat)
                    </li>
                    <li>
                      Student Academy Award – Gold – Los Angeles (Tarikat)
                    </li>
                    <li>CICAE Art Cinema Award – Karlovy Vary IFF</li>
                    <li>Best Cinematography – Camerimage (Commercial Reel)</li>
                  </ul>
                </div>

                {/* Upcoming Screenings */}
                <div
                  className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                >
                  <h2 className="text-3xl md:text-4xl">Upcoming Screenings</h2>
                  <ul className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                    <li>
                      Cannes Directors’ Fortnight – Birth of Light (feature
                      sneak-peek) – 18 May 2026
                    </li>
                    <li>
                      Eye Filmmuseum, Amsterdam – Masterclass & retrospective –
                      2–3 June 2026
                    </li>
                    <li>
                      Tate Modern, London – “Light as Language” installation –
                      11 July → 4 Aug 2026
                    </li>
                    <li>
                      Sundance Summer Series – VR companion piece Echoes of
                      Tarikat – 9 Aug 2026
                    </li>
                    <li>
                      IDFA 2026 – Opening Night with live score – 18 Nov 2026
                    </li>
                    <li>
                      Streaming Premiere – MUBI global rollout – Winter 2026/27
                      (exact date TBA)
                    </li>
                  </ul>
                </div>
              </div>
              {/* Image */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
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
