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
            <div className="mt-gap-xl md:mt-0 md:gap-gap-xxl flex flex-col items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-gap-xxl items-start">
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
                      Moving between the Netherlands and Kenya, I have learned
                      that no story looks the same from every side. This
                      multicultural background has taught me to notice what is
                      often left unsaid, whose voice is centered, and whose
                      perspective is missing. It sharpens how I work: combining
                      different sensitivities, cultural nuances, and ways of
                      seeing through cinema’s immersive power.
                    </p>
                    <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                      I graduated as a documentary director from the Netherlands
                      Film Academy in 2015, where I first developed a visual
                      language rooted in rhythm, texture, and emotion. My
                      graduation film{" "}
                      <span className="font-serif italic font-bold">
                        <a
                          href="https://vimeo.com/jasmijnschrofer/tarikattrailer"
                          target="_blank"
                        >
                          Tarikat
                        </a>
                      </span>
                      , shot within a Turkish Sufi community, explored devotion,
                      ritual, and belonging through an intimate sensory
                      approach. It reached international audiences, receiving
                      the Sheffield DocFest Audience Award, the VPRO Documentary
                      Award, a Vimeo Staff Pick, and the Film Fund Wildcard
                      talent grant.
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
                      Festival, and received the Blue Planet Future Award in
                      Korea.
                    </p>
                    <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                      Working internationally has deepened my belief that strong
                      films need more than aesthetics alone. This extensive
                      global experience has deepened my belief that strong films
                      need more than aesthetics alone. They need substance,
                      urgency, and a form that serves the story. My practice has
                      evolved from prioritizing image and atmosphere toward
                      creating work where visual language and narrative purpose
                      strengthen one another. Often, a striking image,
                      encounter, or experience becomes the first spark. From
                      there, research reveals deeper layers, unexpected
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
                      Alongside my independent work, I direct an extensive body
                      of commissioned films bridging the worlds of art, culture,
                      and sustainability. These collaborations with global
                      brands and cultural institutions are rooted in meaningful
                      exchange and clear storytelling.
                    </p>
                    <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                      I’m open to new creative collaborations and artistic
                      exchange worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <svg
                  className="w-auto h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 191 66"
                >
                  <path
                    fill="#CD99E6"
                    d="M92.388 32.466c0-8.773-6.53-15.042-14.317-15.044-7.787 0-14.321 6.264-14.321 15.037 0 8.648 6.529 14.917 14.314 14.919 7.788 0 14.322-6.264 14.324-14.912Zm-47.607-.009C44.785 17.29 55.466-.004 78.076 0c22.607.005 33.281 17.305 33.279 32.47-.003 15.166-10.683 32.462-33.293 32.457-22.608-.004-33.281-17.305-33.279-32.47M164.987 32.482c0-8.773-6.529-15.042-14.317-15.044-7.787 0-14.321 6.264-14.323 15.037 0 8.648 6.529 14.917 14.317 14.92 7.787 0 14.321-6.265 14.323-14.913Zm-47.605-.009C117.385 17.308 128.065.012 150.675.017c22.608.004 33.281 17.305 33.279 32.47-.002 15.165-10.683 32.461-33.293 32.456-22.608-.004-33.281-17.305-33.279-32.47ZM0 10.215l7.026 16.812 8.126-2.928-.01 39.913 20.22.002.013-63.086L21.983.925 0 10.215Z"
                    opacity=".5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m169.875 23.295 18.601-9.312-27.196-.007c4 2.147 6.89 5.55 8.593 9.32m.146 8.946c0-8.947-6.295-19.154-19.633-19.157-13.337-.002-19.639 10.201-19.641 19.148 0 8.947 6.295 19.153 19.632 19.155 13.34.002 19.64-10.198 19.642-19.148m-54.394 18.034 15.859-7.909c-1.703-3.18-2.518-6.73-2.518-10.132 0-6.878 3.412-14.418 10.527-18.262h-7.41l-4.746 13.085c-1.481-1.034-3.259-1.626-5.039-1.628-3.705 0-6.671 2.587-6.671 6.876l-.005 17.967.003.003Zm-1.779.221.005-18.19c0-5.4 3.856-8.578 8.449-8.576 1.407 0 2.815.37 4.003 1.037l3.929-10.87c-1.629-.518-3.483-.813-5.483-.815-5.557 0-9.486 2.882-11.413 5.987h-.149v-5.103h-10.298l-.007 36.528h10.967l-.003.002ZM97.104 22.688l4.003-1.996v-6.73l-11.708-.002c3.407 1.998 6.076 5.03 7.705 8.728ZM68.418 62.685V46.417h.151c1.63 2.365 5.113 4.955 10.818 4.955 12.893.002 17.788-10.717 17.79-19.518 0-10.797-7.332-18.785-17.781-18.787-5.559 0-9.413 2.512-11.488 5.47h-.149V13.95h-10.3l-.012 48.73h10.969l.002.004ZM42.632 49.888l13.044-6.504.007-29.43h-.742l-12.31 35.934Zm-2.074.591L53.09 13.953H42.124L35.45 36.725h-.148L28.638 13.95H17.67l12.367 36.528h10.523l-.003.002ZM15.223 12.243h14.746l3.925 13.388c.444 1.626 1.11 4.067 1.48 6.433.372-2.366 1.04-4.807 1.484-6.433l3.931-13.384 33.126.007c1.63-.591 3.483-.886 5.483-.886 2.15 0 4.225.297 6.078.889l33.938.006c1.556-.591 3.337-.886 5.337-.886 2.149 0 4.225.297 6.076.889h12.893c2-.587 4.225-.884 6.669-.884 2.446 0 4.668.297 6.668.888l30.902.007c1.407 0 2.148.591 2.148 1.626 0 .74-.446 1.407-1.334 1.85l-18.305 9.09c.888 2.442 1.332 4.956 1.332 7.395-.003 9.76-6.898 20.851-21.42 20.847-8.669 0-14.672-3.997-18.006-9.247l-16.749 8.354H101.1l.007-29.582-3.337 1.7a24.31 24.31 0 0 1 1.183 7.542c0 9.687-5.563 21.221-19.569 21.219-4.002 0-7.112-1.11-9.188-2.96v14.273l-14.527-.005.005-19.077-13.86 6.874H28.774l-13.55-39.933Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M68.702 32.03c0-4.658 3.188-8.947 8.82-8.945 5.632 0 8.817 4.291 8.815 8.95 0 4.955-3.485 8.947-8.82 8.945-5.334 0-8.817-3.994-8.817-8.95"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M69.709 32.03c0 2.192.757 4.195 2.13 5.64 1.41 1.485 3.337 2.28 5.573 2.305h.105c4.527 0 7.81-3.339 7.813-7.943 0-5.457-4.058-7.94-7.81-7.944-3.763 0-7.811 2.484-7.813 7.94m7.689 9.954c-2.76-.03-5.248-1.069-7.017-2.93-1.73-1.822-2.682-4.316-2.682-7.024 0-2.629.911-5.077 2.561-6.894 1.815-2 4.328-3.056 7.268-3.056 2.939 0 5.454 1.057 7.266 3.058 1.648 1.82 2.556 4.268 2.556 6.896 0 5.769-4.135 9.952-9.826 9.95h-.124M142.287 32.046c0-5.177 3.857-8.872 8.449-8.872 4.596 0 8.447 3.7 8.445 8.877 0 5.101-3.854 8.798-8.449 8.798s-8.447-3.7-8.447-8.8"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M150.819 24.179h-.082a7.257 7.257 0 0 0-5.227 2.192c-1.428 1.46-2.216 3.476-2.218 5.675 0 4.343 3.225 7.75 7.358 7.796h.082c4.172 0 7.442-3.423 7.442-7.794 0-4.384-3.224-7.826-7.357-7.871m-.19 17.675c-5.25-.057-9.349-4.346-9.349-9.806 0-2.729.991-5.243 2.79-7.08a9.261 9.261 0 0 1 6.669-2.797h.105c5.25.058 9.348 4.376 9.348 9.88 0 5.496-4.156 9.803-9.458 9.803h-.105Z"
                  ></path>
                </svg>
                <svg
                  className="w-auto h-12"
                  width="100%"
                  height="100%"
                  viewBox="0 0 332 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M304.902 35.426v.008C318.304 38.48 332 43.754 332 59.806c0 15.044-11.705 24.387-30.554 24.387-11.132 0-21.102-3.3-26.68-8.84l-.038-.022c-.465-.372-2.797-2.332-3.347-4.997-.372-1.805.139-3.51 1.518-5.074 2.905-3.3 6.252-1.89 7.98-.752.255.163.495.341.72.52 5.291 4.864 12.286 7.53 19.723 7.53 10.691 0 16.819-4.331 16.819-11.885 0-8.467-8.924-10.543-19.251-12.945l-.294-.07c-12.388-2.85-25.612-7.281-25.612-23.883C272.984 9.777 285.039 0 302.306 0c10.521 0 19.786 3.083 24.783 8.25l.333.357c.201.217.379.426.542.627 1.03 1.402 2.324 4.2-.372 7.414-3.192 3.796-8.01 1.131-9.412.225-4.501-3.378-10.087-5.23-15.75-5.23-9.691 0-15.958 4.563-15.958 11.636 0 7.884 6.705 9.435 16.848 11.781z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m70.017 68.567 1.781 4.494.016-.008q.15.406.279.79c1.224 3.82-.047 6.701-3.595 8.103l-.643.256c-.968.38-1.898.573-2.78.573q-.27 0-.528-.023c-2.324-.21-4.16-1.82-5.298-4.648l-4.23-10.668h.023l-3.293-8.49H20.33l-5.036 13.069h-.062l-2.448 6.182c-.17.418-.357.821-.581 1.224-.907 1.65-2.115 2.696-3.595 3.114-1.247.356-2.626.232-4.106-.349l-.62-.24C.559 80.63-.688 77.95.366 74.401c.093-.325.201-.65.333-.984l1.936-4.88L27.091 5.369c.93-2.44 2.572-4.703 9.064-4.703s8.25 2.262 9.18 4.71zm-46.311-20.63h24.658L36.094 15.61z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M163.188 1.79c-4.067 0-6.306 2.022-6.306 5.694v.62c0 3.695 2.301 5.817 6.306 5.817h18.856v62.78c0 4.045 2.014 6.19 5.818 6.19h1.727c3.913 0 6.066-2.2 6.066-6.19v-62.78h19.096c3.99 0 6.182-2.068 6.182-5.818v-.62c0-3.671-2.2-5.693-6.182-5.693zm81.226.092h-1.727c-3.85 0-6.143 2.55-6.143 6.81v68.102c0 4.153 2.192 6.438 6.158 6.438h1.728c4.051 0 6.283-2.285 6.283-6.437V8.692c0-4.269-2.356-6.81-6.299-6.81"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M117.451 1.79H94.753c-4.292 0-7.174 3.029-7.174 7.545v66.623c0 .465.023.914.078 1.38.387 3.578 2.386 5.546 5.616 5.546h1.728c3.718 0 5.941-2.317 5.941-6.19v-25.48h13.728l20.405 28.897c1.348 1.905 2.874 2.866 4.532 2.866 1.085 0 2.231-.41 3.401-1.24l1.34-.945c1.526-1.077 2.409-2.324 2.634-3.71.225-1.395-.217-2.89-1.317-4.447l-16.617-23.528c10.396-2.308 16.71-8.59 18.267-18.197.248-1.534.372-3.145.372-4.788 0-15.911-10.458-24.325-30.244-24.325zm16.64 24.945c0 1.688-.232 3.284-.689 4.733-1.852 5.849-7.453 8.94-16.191 8.94h-16.393V13.054h16.021c11.45 0 17.252 4.601 17.252 13.68"
                    fill="currentColor"
                  ></path>
                </svg>
                <svg
                  className="w-16 max-h-16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 730 589"
                  width="730px"
                  height="589px"
                  aria-label="Logo Holland Festival"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    d="M0 589V0h72.436v589H0Zm117.507-331.967H321.94v66.072H114.29l3.217-66.072ZM370.232 589V0h72.436v589h-72.436ZM488.545 0H730v66.072H488.545V0Zm0 322.298v-66.071H698.61v66.071H488.545Z"
                  ></path>
                </svg>
                <img
                  className="h-16"
                  src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1783760279/copy_of_african_slum_journal_logo_retina_x2_qtzar5.png"
                />
                <img
                  className="h-16"
                  src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1783758170/Manchester_City_FC_badge.svg_udwk08.webp"
                />
                <img
                  className="h-16"
                  src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1783757813/El_Pa%C3%ADs_logo_eszajk.svg"
                />
                <svg
                  className="h-16"
                  width="46.248001"
                  height="91.083"
                  viewBox="0 0 46.248001 91.083"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs id="defs1">
                    <clipPath id="clip-path">
                      <path
                        id="Path_25"
                        data-name="Path 25"
                        d="M 0,0 H 46.248 V -91.083 H 0 Z"
                        fill="none"
                      ></path>
                    </clipPath>
                    <clipPath id="clip-path-2">
                      <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M 0,0 H 153.989 V -55.911 H 0 Z"
                        fill="none"
                      ></path>
                    </clipPath>
                  </defs>
                  <g
                    id="Group_30"
                    data-name="Group 30"
                    transform="translate(0,91.083)"
                  >
                    <g
                      id="Group_26"
                      data-name="Group 26"
                      transform="translate(0.915,-91.083)"
                    >
                      <path
                        id="Path_23"
                        data-name="Path 23"
                        d="M 0,0 V 8.357 H 44.418 V 0 Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <g
                      id="Group_28"
                      data-name="Group 28"
                      clip-path="url(#clip-path)"
                    >
                      <g
                        id="Group_27"
                        data-name="Group 27"
                        transform="translate(13.785,-35.172)"
                      >
                        <path
                          id="Path_24"
                          data-name="Path 24"
                          d="m 0,0 v -9.516 c -3.721,-3.232 -5.978,-7.075 -5.978,-12.077 0,-7.238 6.444,-14.531 15.317,-14.693 8.873,0.162 15.316,7.455 15.316,14.693 0,5 -2.256,8.845 -5.977,12.077 V 0 A 23.165,23.165 0 0 0 32.463,-21.288 23.507,23.507 0 0 0 9.339,-44.645 v 0 A 23.507,23.507 0 0 0 -13.785,-21.288 23.165,23.165 0 0 0 0,0"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                    <g
                      id="Group_29"
                      data-name="Group 29"
                      transform="translate(23.125,-32.39)"
                    >
                      <path
                        id="Path_26"
                        data-name="Path 26"
                        d="m 0,0 h -22.209 v 8.357 h 19.518 v 0.122 l -19.518,14.09 V 32.39 L -0.009,15.372 0,15.377 v 0 -0.005 L 22.2,32.39 V 22.569 L 2.69,8.479 V 8.357 H 22.208 V 0 Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </svg>
                <img
                  className="h-16"
                  src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1783760391/Kenya_Scouts_Association.svg_fkru41.webp"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-gap-xxl items-start">
                <div className="space-y-gap-md">
                  {/* My Process */}
                  <div
                    className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                  >
                    <h2 className="text-3xl md:text-4xl tracking-wide">
                      My Process
                    </h2>
                    <ol className="flex flex-col gap-gap-xs">
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">1. Collaborative</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          The best work is built together. I value open
                          communication, shared ideas, and creating a process
                          where everyone feels involved and heard.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">2. Creative</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          Every project deserves its own language. I look for
                          fresh angles, strong concepts, and visual approaches
                          that bring stories to life in a distinctive way.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">3. Respectful</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          Whether working with clients, communities, or
                          individuals on screen, I approach every collaboration
                          with care, sensitivity, and professionalism.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">4. Timely</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          Clear planning and reliable delivery matter. I aim to
                          keep the process smooth, focused, and on schedule
                          without compromising quality.
                        </p>
                      </li>
                    </ol>
                  </div>

                  {/* Expectations */}
                  <div
                    className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                  >
                    <h2 className="text-3xl md:text-4xl">
                      What you should expect from me
                    </h2>
                    <ol className="flex flex-col gap-gap-xs">
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">1. Intention</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          What story do you want to tell, and why now? We begin
                          with your goals, audience, and budget so every
                          decision has purpose.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">2. Concept</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          What is the essence we want to capture? Together we
                          shape the structure, visual style, rhythm, and tone
                          until it feels right.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">3. Production</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          Time to bring it to life. From solo shoots to full
                          crews, I scale each production to what the story truly
                          needs.
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide">4. Delivery</h3>
                        <p className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                          The final stage is refinement. You review, we adjust,
                          and together we shape a final film that feels complete
                          and effective.
                        </p>
                      </li>
                    </ol>
                  </div>

                  {/* Awards */}
                  <div
                    className={`prose prose-invert flex flex-col gap-gap-xs ${isOnScreen ? "off-screen-left -translate-x-0" : "on-screen"}`}
                  >
                    <h2 className="text-3xl md:text-4xl">
                      Highlights & Accolades
                    </h2>
                    <ul className="text-sm md:text-lg text-foreground-muted leading-relaxed">
                      <li>
                        <span className="font-bold">Featured on Aeon</span> –
                        Tarikat | Global Curated Philosophy & Culture Platform
                      </li>
                      <li>
                        <span className="font-bold">Vimeo Staff Pick</span> –
                        Tarikat
                      </li>
                      <li>
                        <span className="font-bold">
                          Blue Planet Grant Award
                        </span>{" "}
                        – Busan, South Korea (Birth of Light)
                      </li>
                      <li>
                        <span className="font-bold">
                          Golden Calf Competition & Forum of the Directors
                          Nominee
                        </span>{" "}
                        – Netherlands Film Festival (Birth of Light)
                      </li>
                      <li>
                        <span className="font-bold">Audience Award</span> –
                        Sheffield DocFest (Tarikat)
                      </li>
                      <li>
                        <span className="font-bold">Wildcard Talent Grant</span>{" "}
                        – Netherlands Film Fund (Tarikat)
                      </li>
                      <li>
                        <span className="font-bold">
                          Best Director & Best Editing Nominee
                        </span>{" "}
                        – Tel Aviv International Film Festivals (Tarikat)
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
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
