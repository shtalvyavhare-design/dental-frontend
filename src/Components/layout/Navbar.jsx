import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Pricing", href: "#pricing" },
  { label: "Doctors", href: "#doctors" },
  { label: "Results", href: "#before-after" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-base font-extrabold text-slate-900 md:text-lg"
        >
          Permanent Smile Care
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Get Consultation
        </a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-slate-700"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="block mt-3 text-center bg-blue-600 text-white py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Consultation
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;  