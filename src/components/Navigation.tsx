import { Link, useLocation } from "react-router-dom";
import { Wrench } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Bemutatkozás" },
    { path: "/gallery", label: "Eladó gépeink" },
    { path: "/contact", label: "Elérhetőség" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-16 md:h-16 py-2">
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-sm md:text-xl">
            <Wrench className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
            <span className="leading-tight">
              <span className="block md:inline">Kocsis Fivérek</span>
              <span className="block md:inline md:ml-1">Mezőgazdasági Gépszervíz</span>
            </span>
          </Link>
          
          <div className="flex gap-3 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium text-xs md:text-base transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
