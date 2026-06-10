import { useState } from 'react';

const Achievements = () => {
    const achievements = [
        {
            year: '2025',
            title: 'IEEE Best Paper Award',
            description: 'Honored with the Best Research Paper award at the IEEE RECON 2025 conference for the development and validation of "Emergent ROV: Underwater Solar Panel Cleaning Robot".',
            icon: '🏆',
            link: 'https://drive.google.com/file/d/1namXQc2wUR-LPPSf4_Be_UJkw9OgJEux/view?usp=sharing',
            linkText: 'View Certificate',
        },
        {
            year: '2025',
            title: 'IEEE Xplore Publication',
            description: 'Co-authored and published research paper on underwater robotic solar maintenance in the official IEEE Xplore digital library index.',
            icon: '📄',
            link: 'https://ieeexplore.ieee.org/document/11085386',
            linkText: 'View Publication',
        },
        {
            year: 'LeetCode',
            title: 'LeetCode Rating: 1700+',
            description: 'Achieved an algorithmic competitive rating of 1700+, ranking in the top tier globally with advanced proficiency in data structures and graph algorithms.',
            icon: '💻',
            link: 'https://leetcode.com/u/Shubh_iam/',
            linkText: 'Verify Profile',
        },
        {
            year: 'Codeforces',
            title: 'Codeforces Rating: 1200+ (Pupil)',
            description: 'Reached a rating of 1200+ (Pupil classification) on Codeforces, competing in regular algorithmic challenges against global developers.',
            icon: '⚡',
            link: 'https://codeforces.com/profile/Sammyhero',
            linkText: 'Verify Profile',
        },
    ];

    return (
        <section id="achievements" className="py-24 bg-dark-950 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[130px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-xs font-mono tracking-widest text-primary-400 uppercase mb-2">Milestones</p>
                    <h2 className="section-title mb-0">Achievements & Publications</h2>
                </div>

                {/* Alternating Vertical Timeline */}
                <div className="relative border-l-2 border-white/10 md:border-l-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:h-full md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-primary-500 md:before:via-violet-600 md:before:to-fuchsia-500 md:before:opacity-30 space-y-12">
                    {achievements.map((item, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className="relative flex flex-col md:flex-row items-stretch md:justify-between w-full md:even:flex-row-reverse pl-8 md:pl-0">
                                {/* Timeline Dot Connector */}
                                <div className="absolute left-0 md:left-1/2 top-4 md:-translate-x-1/2 flex items-center justify-center z-20">
                                    <span className="flex h-5 w-5 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-30"></span>
                                        <span className="relative inline-flex rounded-full h-5 w-5 bg-dark-950 border-2 border-primary-400 flex items-center justify-center text-[10px] text-primary-400 font-bold font-mono">
                                            {idx + 1}
                                        </span>
                                    </span>
                                </div>

                                {/* Content block */}
                                <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="card group hover:scale-[1.01] transition-transform duration-300 relative">
                                        {/* Year Badge */}
                                        <div className={`text-xs font-mono font-extrabold text-primary-400 mb-2 flex items-center gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <span>{item.icon}</span>
                                            <span className="bg-primary-500/10 px-2 py-0.5 rounded border border-primary-500/20">{item.year}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-dark-300 text-sm leading-relaxed mb-4 font-light">
                                            {item.description}
                                        </p>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-1.5 text-xs font-bold text-primary-400 hover:text-primary-300 tracking-wider uppercase transition-colors duration-300 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                        >
                                            {item.linkText}
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Spacer for layout balance */}
                                <div className="hidden md:block w-[45%]"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Coding Profiles Tactical HUD Dashboard */}
                <div className="mt-24">
                    <h3 className="text-2xl font-bold text-dark-100 mb-12 text-center tracking-tight">
                        Competitive Credentials
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* LeetCode HUD */}
                        <a
                            href="https://leetcode.com/u/Shubh_iam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 bg-dark-900/20 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(245,158,11,0.1)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl">💻</span>
                                <span className="text-[10px] font-mono text-amber-500 tracking-widest uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">LeetCode</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-dark-400 text-xs font-mono">Profile Rating</p>
                                <h4 className="text-2xl font-black text-dark-50 tracking-tight">1700+ Rating</h4>
                                <p className="text-dark-500 text-[10px] font-light">Top Tier Problem Solver (Graph, Dynamic Prog)</p>
                            </div>
                        </a>

                        {/* Codeforces HUD */}
                        <a
                            href="https://codeforces.com/profile/Sammyhero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 bg-dark-900/20 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl">⚡</span>
                                <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Codeforces</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-dark-400 text-xs font-mono">Global Rank</p>
                                <h4 className="text-2xl font-black text-dark-50 tracking-tight">1200+ Rating</h4>
                                <p className="text-dark-500 text-[10px] font-light">Division 3-4 Competitor (Pupil rank)</p>
                            </div>
                        </a>

                        {/* Creative Art gateway card */}
                        <a
                            href="https://my-artwork-gallary.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 bg-dark-900/20 backdrop-blur-xl border border-white/5 rounded-2xl hover:border-fuchsia-500/30 hover:shadow-[0_0_25px_rgba(217,70,239,0.1)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-3xl">🎨</span>
                                <span className="text-[10px] font-mono text-fuchsia-400 tracking-widest uppercase bg-fuchsia-500/10 px-2 py-0.5 rounded border border-fuchsia-500/20">Hobbies</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-dark-400 text-xs font-mono">Creative Outlet</p>
                                <h4 className="text-2xl font-black text-dark-50 tracking-tight group-hover:text-fuchsia-400 transition-colors flex items-center gap-1.5">
                                    Artwork Gallery
                                    <svg className="w-4 h-4 ml-auto text-fuchsia-400 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </h4>
                                <p className="text-dark-500 text-[10px] font-light">Drawings, digital sketches, and concept arts</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
