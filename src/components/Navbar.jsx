import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer to highlight active link
        const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
        const observers = [];

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle portion of viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Achievements', href: '#achievements', id: 'achievements' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                    ? 'py-4'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div
                className={`mx-auto px-6 transition-all duration-500 ease-in-out ${isScrolled
                        ? 'max-w-4xl bg-dark-900/60 backdrop-blur-xl rounded-full border border-white/[0.08] shadow-[0_8px_32px_0_rgba(3,0,10,0.3)] shadow-primary-500/5 py-3'
                        : 'max-w-7xl py-1'
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-2xl font-black tracking-wider text-gradient hover:scale-105 transition-transform duration-300 flex items-center gap-1.5"
                    >
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-500 to-fuchsia-500 flex items-center justify-center text-white text-base font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)]">S</span>
                        <span className="hidden sm:inline font-bold text-lg text-dark-50">SKS</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1.5">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${isActive
                                            ? 'text-primary-400 bg-white/[0.04]'
                                            : 'text-dark-300 hover:text-dark-100 hover:bg-white/[0.02]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_#6366f1] animate-pulse"></span>
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Action Button */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="px-5 py-2 bg-gradient-to-r from-primary-500/10 to-violet-500/10 border border-primary-500/30 text-primary-300 font-semibold rounded-full hover:from-primary-500 hover:to-violet-600 hover:text-white hover:border-transparent transition-all duration-300 text-sm shadow-[0_0_10px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] cursor-pointer"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-dark-300 hover:text-primary-400 focus:outline-none p-1.5 bg-white/[0.03] rounded-lg border border-white/[0.05]"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="w-5 h-5 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden mx-4 mt-2 bg-dark-900/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-4 shadow-[0_10px_30px_rgba(3,0,10,0.5)] animate-fade-in-down">
                    <div className="flex flex-col space-y-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-between ${isActive
                                            ? 'text-primary-400 bg-white/[0.05]'
                                            : 'text-dark-300 hover:text-primary-400 hover:bg-white/[0.02]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="w-2 h-2 rounded-full bg-primary-400 shadow-[0_0_8px_#6366f1]"></span>
                                    )}
                                </a>
                            );
                        })}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-2 w-full text-center py-2.5 bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold rounded-xl text-sm shadow-md"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
