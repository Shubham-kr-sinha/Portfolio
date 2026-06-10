import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link
        const mailtoLink = `mailto:shubhamkrsinha11111@gmail.com?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;

        setStatus('[LOG] Launching default email client...');
        setTimeout(() => {
            setStatus('');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const contactMethods = [
        {
            label: 'Email',
            value: 'shubhamkrsinha11111@gmail.com',
            href: 'mailto:shubhamkrsinha11111@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: 'GitHub',
            value: '@Shubham-kr-sinha',
            href: 'https://github.com/Shubham-kr-sinha',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        },
        {
            label: 'LinkedIn',
            value: 'Shubham Kumar Sinha',
            href: 'https://www.linkedin.com/in/shubham-kumar-sinha-a7235b226/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="py-24 bg-dark-900/50 relative overflow-hidden">
            {/* Background grids */}
            <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono tracking-widest text-primary-400 uppercase mb-2">Connect</p>
                    <h2 className="section-title mb-0">Get In Touch</h2>
                </div>

                <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
                    {/* Left Column - Details */}
                    <div className="md:col-span-5 flex flex-col justify-between space-y-8 animate-slide-in-left">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-dark-50 tracking-tight">Let's talk code.</h3>
                            <p className="text-dark-300 leading-relaxed font-light text-sm">
                                Have an interesting project, an opportunity, or a research problem to discuss? Send me a message and let's build something impactful together.
                            </p>
                        </div>

                        {/* Contact details dashboard cards */}
                        <div className="space-y-4 flex-grow md:justify-center flex flex-col">
                            {contactMethods.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-dark-950/40 backdrop-blur-md rounded-2xl border border-white/[0.04] hover:border-primary-500/30 hover:bg-dark-900/50 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                                >
                                    <div className="p-3 bg-white/[0.02] rounded-xl border border-white/[0.06] text-primary-400 group-hover:scale-105 transition-all duration-300">
                                        {c.icon}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-mono tracking-widest text-dark-500 uppercase">{c.label}</p>
                                        <p className="text-dark-100 font-medium text-sm group-hover:text-primary-400 transition-colors">{c.value}</p>
                                    </div>
                                    <svg className="w-4 h-4 text-dark-500 ml-auto group-hover:text-primary-400 transition-colors transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Glassmorphic Form */}
                    <div className="md:col-span-7 animate-slide-in-right">
                        <div className="p-8 bg-dark-900/20 backdrop-blur-2xl rounded-3xl border border-white/[0.06] shadow-xl relative overflow-hidden">
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-dark-300 text-xs font-mono tracking-widest uppercase mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input-field text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-dark-300 text-xs font-mono tracking-widest uppercase mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input-field text-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-dark-300 text-xs font-mono tracking-widest uppercase mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="input-field text-sm"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-dark-300 text-xs font-mono tracking-widest uppercase mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="input-field resize-none text-sm"
                                        placeholder="Hello Shubham, I wanted to discuss..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 group text-sm font-bold tracking-wider uppercase">
                                    Send Connection Request
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                {status && (
                                    <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl font-mono text-[10px] text-primary-400 text-center animate-fade-in">
                                        {status}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
