import { useState } from "react";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      console.log("Newsletter signup:", email);
      setEmail("");
      setAgreed(false);
    }
  };

  const handleLinkClick = (href) => {
    // For hash links (internal page sections)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // For regular routes, navigate first then scroll
    navigate(href);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);
  };

  const handleLogoClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);
  };

  const footerLinks = {
    company: [
      //{ name: "About Us", href: "#about" },
      { name: "AI-driven IT Services", href: "/blog/3" },
      { name: "Smart City Solutions", href: "/blog/1" },
      { name: "Our Team", href: "/team" },
    ],
    services: [
      // { name: "Training & Skilling", href: "/services/training" },
      { name: "Solutions", href: "/services-page" },
      { name: "Blog", href: "/blog" },
      {
        name: "Connect",
        href: "https://www.linkedin.com/company/instrek-technologies/posts/",
      },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/instrek-technologies/posts/",
    },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800/80 text-white"
      style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Newsletter Section */}
          <div className="space-y-8">
            <div
              onClick={handleLogoClick}
              className="block bg-transparent w-fit px-4 py-2 rounded hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/optimized/Logo_White.webp"
                alt="Instrek Logo"
                className="h-20 w-auto"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Stay in the loop and sign up for the Instrek newsletter:
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-[#ea4820] mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors text-lg"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-300 hover:text-white transition-colors text-lg text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#ea4820] mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors text-lg"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-300 hover:text-white transition-colors text-lg text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400">© Instrek Technologies</div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400">All Rights Reserved 2025</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-[#ea4820] transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
