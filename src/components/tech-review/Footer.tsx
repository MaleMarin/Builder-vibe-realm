import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Rss,
} from "lucide-react";

const footerSections = [
  {
    title: "Content",
    links: [
      { label: "Artificial Intelligence", href: "#ai" },
      { label: "Climate Tech", href: "#climate-tech" },
      { label: "Computing", href: "#computing" },
      { label: "Biotechnology", href: "#biotechnology" },
      { label: "Space", href: "#space" },
      { label: "Business", href: "#business" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Masthead", href: "#masthead" },
      { label: "Ethics Statement", href: "#ethics" },
      { label: "Editorial Guidelines", href: "#guidelines" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "EmTech", href: "#emtech" },
      { label: "EmTech Digital", href: "#emtech-digital" },
      { label: "EmTech Next", href: "#emtech-next" },
      { label: "Future Compute", href: "#future-compute" },
      { label: "Events Calendar", href: "#events-calendar" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Magazine", href: "#magazine" },
      { label: "Newsletters", href: "#newsletters" },
      { label: "Podcasts", href: "#podcasts" },
      { label: "Videos", href: "#videos" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/tech-review" className="inline-block">
              <div className="flex items-center mb-4">
                <span className="text-red-500 font-extrabold text-2xl mr-1">
                  MIT
                </span>
                <span className="font-bold text-xl">Technology Review</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              MIT Technology Review is a world-renowned, independent media
              company whose insight, analysis, reviews, interviews, and live
              events explain the newest technologies and their commercial,
              social, and political impacts.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
              >
                <Rss className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Navigation */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-800 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MIT Technology Review. All Rights
            Reserved.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-gray-400">
            <a href="#terms" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="#licensing" className="hover:text-white">
              Licensing & Reprints
            </a>
            <a href="#advertise" className="hover:text-white">
              Advertise
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
