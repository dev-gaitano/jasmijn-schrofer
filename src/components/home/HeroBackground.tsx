function HeroBackground() {
  return (
    <section
      id="hero"
      className="relative p-gap-md md:px-gap-xxl h-mscreen md:h-screen flex items-end md:items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,q_auto:eco/v1755774116/jasmijn-unmask-2025-crop-min_cekt3y.png"
          alt="hero-image"
          className="absolute top-0 left-0 h-full object-cover max-md:object-[-22rem]"
        />
        <div className="hidden md:block fixed top-0 right-0 h-screen w-[60vw] bg-gradient-to-l from-background via-transparent to-transparent"></div>
      </div>

      {/* Desktop Gradients */}
      <div className="hidden md:block fixed top-0 right-0 h-screen w-[60vw] bg-gradient-to-l from-background to-transparent"></div>
      <div className="hidden md:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent"></div>

      <div className="md:hidden absolute inset-y-0 w-full bg-gradient-to-t from-background via-transparent to-transparent"></div>

      {/* All Gradients */}
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-muted via-transparent to-transparent via-30% md:via-40% pointer-events-none"></div>
      <div className="absolute inset-0 md:bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-more-muted via-transparent to-transparent via-50% pointer-events-none"></div>
    </section>
  );
}

export default HeroBackground;
