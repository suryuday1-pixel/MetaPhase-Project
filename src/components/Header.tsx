import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-blue-100"
            >
              <Phone size={16} />
              <span>+91 702-702-0196</span>
            </a>
            <a
              href="mailto:info@diagnosticlab.com"
              className="flex items-center gap-2 hover:text-blue-100"
            >
              <Mail size={16} />
              <span>info@metaphaselabs.com</span>
            </a>
          </div>
          <div className="text-center sm:text-right">
            <span>Mon - Sat: 7:00 AM - 5:00 PM | Sun: 7:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D+</span>
            </div> */}
            <div className="h-12 flex items-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("home-collection")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home Collection
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("home-collection")}
              className="text-gray-700 hover:text-blue-600 transition text-left"
            >
              Home Collection
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
