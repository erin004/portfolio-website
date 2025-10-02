import { forwardRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer
      ref={ref}
      id="footer"
      className="flex flex-col items-center justify-center py-10 border-t border-gray-800 gap-6"
    >
      <p className="text-gray-400">© 2025 ERIN – All Rights Reserved.</p>
      <div className="flex gap-6">
        {/* Ganti "#" dengan mailto */}
        <a
          href="mailto:emailkamu@gmail.com"
          className="hover:text-pink-400 transition"
        >
          <Mail />
        </a>

        <a
          href="https://github.com/erin004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <Github />
        </a>

        <a
          href="https://linkedin.com/in/usernamekamu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Linkedin />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
