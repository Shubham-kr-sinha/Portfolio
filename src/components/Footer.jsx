const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/Shubham-kr-sinha',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shubham-kumar-sinha-a7235b226/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/Shubh_iam/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.832-1.62-7.872.633l-2.687 2.935v.001c-.85.904-1.348 1.978-1.458 3.124-.103 1.074.136 2.136.687 3.065.089.15.19.295.301.435.185.233.387.453.603.66l4.276 4.193.001.002c3.248 3.125 8.45 3.043 11.599-.195l2.396-2.392a2.757 2.757 0 0 0 0-3.905 2.75 2.75 0 0 0-3.904 0l-2.396 2.392a.801.801 0 0 1-1.14.003l-.001-.002-4.276-4.193a.82.82 0 0 1-.165-.247.798.798 0 0 1 .165-.959l4.277-4.193a.798.798 0 0 1 1.14 0l3.5 2.831a2.75 2.75 0 0 0 3.904 0 2.757 2.757 0 0 0 0-3.905l-3.5-2.831c-2.365-1.89-5.832-1.62-7.872.633l-4.277 4.193a2.757 2.757 0 0 0 0 3.905c.54.54 1.414.54 1.955 0l4.276-4.193c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003z" />
                </svg>
            ),
        },
        {
            name: 'Codeforces',
            url: 'https://codeforces.com/profile/Sammyhero',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                </svg>
            ),
        },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-dark-950 border-t border-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-gradient mb-4">SKS</h3>
                        <p className="text-dark-400 leading-relaxed">
                            Full-Stack MERN Developer & Machine Learning Enthusiast crafting innovative solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-dark-200 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-dark-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-dark-200 mb-4">Connect With Me</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark-400 hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="mt-6">
                            <a
                                href="mailto:shubhamkrsinha11111@gmail.com"
                                className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                shubhamkrsinha11111@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-dark-400 text-sm">
                        © {currentYear} Shubham Kumar Sinha. All rights reserved.
                    </p>
                    <p className="text-dark-400 text-sm">
                        Built with <span className="text-primary-400">React</span> & <span className="text-primary-400">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
