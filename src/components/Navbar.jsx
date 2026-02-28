import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
                <img src="/logo.png" alt="CodeFlow" className="h-6 w-6 sm:w-8 sm:h-8" />

            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
            </span>
        </div>
        {/*Nav Links*/}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200 btn-transition">
                Features
                </a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200 btn-transition">
                Pricing
                </a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200 btn-transition">
                Testimonials
                </a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200 btn-transition">
                FAQ
                </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200 btn-transition">
                Contact
                </a>
            {/* theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200/20 dark:bg-white/10 hover:bg-gray-200/30 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            </div>

            <button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                {mobileMenuIsOpen ? (
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) :(
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
            </button>
            
        </div>

    </div>
    {mobileMenuIsOpen && (
    <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200/40 dark:border-slate-800 animate-in slide-in-from-top duration-300">
        <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="#features" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200">
                Features
                </a>
            <a href="#pricing"
            onClick={() => setMobileMenuIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200">
                Pricing
                </a>
            <a href="#testimonials" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200">
                Testimonials
                </a>
            <a href="#faq" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200">
                FAQ
                </a>
            <a href="#contact" 
            onClick={() => setMobileMenuIsOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm lg:text-base transition-colors duration-200">
                Contact
                </a>
            {/* mobile theme switch */}
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuIsOpen(false);
              }}
              className="mt-2 p-2 rounded-full bg-gray-200/20 dark:bg-white/10 hover:bg-gray-200/30 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            </div>
            </div>
            )}
</nav>
);
}
