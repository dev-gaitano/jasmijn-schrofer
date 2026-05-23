import {
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="p-gap-md md:px-gap-xl xl:p-gap-xxl w-full">
      <div className="pb-gap-lg space-y-gap-sm md:space-y-0 grid grid-cols-1 md:grid-cols-2 gap-gap-lg items-center">
        {/* Brand */}
        <div className="w-full md:w-3/4 space-y-4 flex flex-col items-start justify-center">
          <div className="text-2xl font-bold flex items-center">
            <img
              src="https://res.cloudinary.com/diwkfbsgv/image/upload/c_auto,f_auto,g_auto,h_40,q_auto/v1/schrofer/logo?_a=BAMAK+Go0"
              alt="JAS Logo"
              className="h-10"
            />
            <p className="w-28 ml-gap-xxs text-base text-primary">
              Jasmijn Schrofer
            </p>
          </div>

          <p className="max-w-md">Open to global collaborations.</p>
        </div>

        {/* Contact Info */}
        <div className="h-60 border-[0.5px] border-foreground-more-muted p-gap-sm md:p-gap-md rounded-xl space-y-gap-xxs md:space-y-gap-xs flex flex-col items-start justify-center grow">
          <h3 className="text-3xl md:text-4xl">Contact</h3>

          <div className="space-y-gap-xxs md:space-y-gap-xs text-foreground-muted">
            <div className="flex items-center md:items-start gap-gap-xxs md:gap-gap-xs">
              <Mail className="w-5 h-5 mt-0.5" />
              <span>mail@jasmijnschrofer.com</span>
            </div>

            <div className="flex items-start gap-gap-xxs md:gap-gap-xs">
              <MapPin className="w-5 h-5 mt-0.5" />
              <span>Amsterdam | Nairobi</span>
            </div>
          </div>

          <div className="flex items-center space-x-gap-xs text-foreground-more-muted">
            <a
              href="https://www.instagram.com/jasmijnschrofer/"
              className="text-foreground-more-muted hover:text-primary transition-colors duration-500"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/jasmijn.schrofer/"
              className="text-foreground-more-muted hover:text-primary transition-colors duration-500"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-foreground-more-muted hover:text-primary transition-colors duration-500"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/user/jasmijn12"
              className="text-foreground-more-muted hover:text-primary transition-colors duration-500"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jasmijn-schrofer-2b186a78/?originalSubdomain=nl"
              className="text-foreground-more-muted hover:text-primary transition-colors duration-500"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-gap-md border-t-[0.5px] border-foreground-more-muted text-center text-foreground-more-muted text-sm">
        <p>
          &copy; {new Date().getFullYear()} Jasmijn Schrofer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
