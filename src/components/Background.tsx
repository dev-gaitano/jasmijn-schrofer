const Background = () => {

  return (
    <section id="films" className="relative p-gap-md md:p-gap-xxl w-full h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-muted via-transparent via-45% to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-muted via-transparent via-55% to-transparent pointer-events-none"></div>
      {/*<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent-more-muted via-transparent via-50% to-transparent pointer-events-none"></div>*/}
    </section>
  );
};

export default Background;
