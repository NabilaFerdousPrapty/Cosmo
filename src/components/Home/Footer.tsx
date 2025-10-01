// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { Particles } from "../ui/particles";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Particles className="absolute inset-0 z-0" />
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 animate__animated animate__fadeIn"
            >
              <Image
                src="/logo.png"
                alt="Sunflare Logo"
                width={60}
                height={60}
                className="animate__animated animate__pulse animate__infinite animate__slower "
              />
              <span
                className={`text-2xl font-bold text-white ${merriweather.className}`}
              >
                Sunflare
              </span>
            </Link>
            <p className="text-gray-400 text-sm text-center lg:text-left max-w-xs">
              Exploring the Sun&apos;s mysteries through real-time data and
              interactive experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row gap-6 text-center">
            <div className="flex flex-col space-y-2">
              <h4 className="text-white font-semibold mb-2">Explore</h4>
              <Link
                href="/solar-dynamics"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Solar Dynamics
              </Link>
              <Link
                href="/games"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Space Games
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                About
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="text-white font-semibold mb-2">Learn</h4>
              <Link
                href="/games"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Play
              </Link>
              <Link
                href="/Stories"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Stories
              </Link>
              <Link
                href="/aurora-cast"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Weather
              </Link>
            </div>
          </nav>

          {/* Data Sources */}
          <div className="text-center lg:text-right">
            <h4 className="text-white font-semibold mb-3">Data Sources</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <a
                href="https://nasa.gov"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA
              </a>
              <a
                href="https://helioviewer.org"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Helioviewer
              </a>
              <a
                href="https://sdo.gsfc.nasa.gov"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Dynamics Observatory
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {currentYear} Sunflare. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
