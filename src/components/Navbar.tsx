import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Leaf, Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("navHome") },
    { to: "/analyze", label: t("navAnalyze") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-gradient-leaf text-xl font-extrabold tracking-tight">VelanAI</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-leaf-light px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 space-y-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { toggleLang(); setOpen(false); }}
            className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-leaf-light px-3 py-1.5 text-xs font-semibold text-primary"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
