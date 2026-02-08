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
      {/* <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-blue-100"
            >
              <Phone size={16} />
              <span>+91 797-796-8760</span>
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
      </div> */}
      <div className="relative bg-[#163a59] text-white h-12 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* LEFT : CONTACT INFO */}
          <div className="flex items-center gap-4 mb-3 sm:mb-0">
            <span>
              <b>Call Us : </b>+91 702-702-0196 , 797-796-8760
            </span>

            <span>
              <b>Email Us :</b> info@metaphaselabs.com
            </span>
          </div>

          {/* RIGHT : TIMING */}
          <div className="text-center sm:text-right">
            Mon - Sat: 7:00 AM - 5:00 PM | Sun: 7:00 AM - 5:00 PM
          </div>
        </div>

        {/* RIGHT ARROWS */}
        <div className="absolute top-0 right-0 h-full flex">
          <span className="w-12 h-full bg-[#0080AA] clip-arrow" />
          <span className="w-12 h-full bg-[#5D9A3B] clip-arrow -ml-4" />
          <span className="w-12 h-full bg-[#A2BD3C] clip-arrow -ml-4" />
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* <div className="flex items-center gap-2">
            <div className="h-10 flex items-center overflow-hidden">
              <img
                src="./images/logo.png"
                alt="Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
          </div> */}

          <div className="flex items-center">
            <div
              className="relative flex items-center"
              style={{ height: "42px" }}
            >
              {/* Height ko fix rakha hai taaki navbar na faile */}
              <img
                src="./images/logo.png"
                alt="Logo"
                className="max-w-none"
                style={{
                  height:
                    "100px" /* Logo ki asli height yahan se control hogi */,
                  width: "auto",
                  objectFit: "contain",
                  marginTop: "-2px" /* Isse upar ka gap cover ho jayega */,
                }}
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
