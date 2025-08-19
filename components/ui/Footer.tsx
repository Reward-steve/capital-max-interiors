import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export function Footer() {
  const routes = [
    { href: "#hero", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#contact", text: "Contact" },
  ];
  return (
    <footer className="bg-primary text-background-light px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Capital Max Interiors</h2>
          <p className="text-sm leading-relaxed">
            Elevating spaces with premium home décor and luxury furnishings. We
            bring timeless elegance into every room.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {routes.map((route) => (
              <li>
                <a
                  key={route.href}
                  href={route.href}
                  className="hover:underline"
                >
                  {route.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-lg" />
              <span>Lagos, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+234 912 186 5839</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span>capitalmaxinterior@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-background-light/20 mt-10 pt-4 text-sm text-center">
        © {new Date().getFullYear()} Capital Max Interiors — All Rights
        Reserved.
      </div>
    </footer>
  );
}
