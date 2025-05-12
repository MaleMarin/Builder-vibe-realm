import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "AI", href: "#ai" },
  { label: "Climate Tech", href: "#climate-tech" },
  { label: "Computing", href: "#computing" },
  { label: "Health Tech", href: "#health-tech" },
  { label: "Space", href: "#space" },
  { label: "Biotechnology", href: "#biotechnology" },
  { label: "Business", href: "#business" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/tech-review" className="flex items-center">
              <span className="text-red-600 font-extrabold text-2xl mr-1">
                MIT
              </span>
              <span className="font-bold text-xl">Technology Review</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 uppercase transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="hidden md:flex">Subscribe</Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white pt-16 px-4",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col space-y-4 pt-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-3 pt-4">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full">Subscribe</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
