import { useEffect, useState } from 'react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const metrics = [
        { label: 'Academic Path', value: 'B.Tech CSE', detail: 'VIT Chennai', icon: '🎓' },
        { label: 'Problem Solving', value: '400+ Solved', detail: 'LeetCode & CF', icon: '⚡' },
        { label: 'IEEE Papers', value: '1 Published', detail: 'Best Paper Award', icon: '📄' },
        { label: 'MERN Apps', value: '5+ Built', detail: 'End-to-End Stack', icon: '🚀' },
    ];

    return (
        <section id="about" className="py-24 bg-dark-900/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono tracking-widest text-primary-400 uppercase mb-2">Discovery</p>
                    <h2 className="section-title mb-0">About Me</h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left Column - Cyber Portrait Frame */}
                    <div className="lg:col-span-5 relative group animate-slide-in-left">
                        {/* Interactive multi-layered frames */}
                        <div className="absolute -inset-2 bg-gradient-to-tr from-primary-500 via-indigo-600 to-fuchsia-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-700"></div>
                        
                        {/* Decorative HUD corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-400 rounded-tl-3xl z-20"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-400 rounded-tr-3xl z-20"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-400 rounded-bl-3xl z-20"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-400 rounded-br-3xl z-20"></div>

                        {/* Image Wrapper */}
                        <div className="relative bg-dark-950/80 rounded-3xl p-3 border border-white/10 overflow-hidden">
                            <div className="aspect-square rounded-2xl overflow-hidden relative group">
                                <img
                                    src="/profile.png"
                                    alt="Shubham Kumar Sinha"
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Overlay scanlines or shading */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                                    <span className="px-3 py-1 bg-primary-500/10 backdrop-blur-md border border-primary-500/30 text-primary-300 text-xs font-semibold rounded-lg">
                                        Developer
                                    </span>
                                    <span className="px-3 py-1 bg-fuchsia-500/10 backdrop-blur-md border border-fuchsia-500/30 text-fuchsia-300 text-xs font-semibold rounded-lg">
                                        ML Explorer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Bio and HUD Metrics */}
                    <div className="lg:col-span-7 space-y-8 text-left animate-slide-in-right">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-extrabold text-dark-50 tracking-tight">
                                Crafting clean web systems & smart ML applications.
                            </h3>
                            <p className="text-lg text-dark-300 leading-relaxed font-light">
                                I am a <span className="text-primary-400 font-semibold font-mono">Full-Stack MERN Developer</span> with a strong love for backend stability and frontend aesthetics. My work is focused on building high-performance architectures using Node.js, Express, React, and MongoDB that satisfy client demands.
                            </p>
                            <p className="text-lg text-dark-300 leading-relaxed font-light">
                                Beyond the web stack, I dive into <span className="text-fuchsia-400 font-semibold font-mono">Machine Learning</span> pipelines. I've designed and validated models for complex datasets, including classification systems for nanoplastic particles and prediction algorithms for aviation delays.
                            </p>
                            <p className="text-lg text-dark-300 leading-relaxed font-light">
                                Currently pursuing a <span className="text-primary-400 font-semibold">B.Tech in Computer Science and Engineering</span> at Vellore Institute of Technology (VIT), Chennai. I love taking part in hackathons, publishing research papers, and improving my algorithms daily.
                            </p>
                        </div>

                        {/* Location / Meta chips */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] rounded-xl border border-white/5 text-dark-300 text-sm font-medium hover:border-primary-500/30 transition-colors">
                                <span className="text-primary-400">🏫</span>
                                <span>VIT Chennai Campus</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] rounded-xl border border-white/5 text-dark-300 text-sm font-medium hover:border-primary-500/30 transition-colors">
                                <span className="text-primary-400">📍</span>
                                <span>Chennai, India</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] rounded-xl border border-white/5 text-dark-300 text-sm font-medium hover:border-primary-500/30 transition-colors">
                                <span className="text-primary-400">📧</span>
                                <a href="mailto:shubhamkrsinha11111@gmail.com" className="hover:text-primary-400 transition-colors">shubhamkrsinha11111@gmail.com</a>
                            </div>
                        </div>

                        {/* Interactive HUD Grid Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                            {metrics.map((m, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.06] hover:border-primary-500/30 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-2xl mb-2">{m.icon}</div>
                                    <div className="text-dark-100 font-bold text-lg font-mono">{m.value}</div>
                                    <div className="text-dark-400 text-xs font-medium uppercase tracking-wider mb-0.5">{m.label}</div>
                                    <div className="text-dark-500 text-[10px]">{m.detail}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
