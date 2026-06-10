import { useState, useEffect } from 'react';

const Skills = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Trigger progression animations
        const timer = setTimeout(() => setAnimate(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const skillCategories = [
        {
            title: 'Languages',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: [
                { name: 'C++', level: 88 },
                { name: 'Python', level: 85 },
                { name: 'JavaScript', level: 90 },
                { name: 'SQL', level: 82 },
                { name: 'Java', level: 78 },
                { name: 'HTML/CSS', level: 90 }
            ],
            theme: 'from-cyan-500/20 to-blue-600/20 shadow-cyan-500/5',
            accent: 'bg-cyan-400'
        },
        {
            title: 'Frameworks & Libs',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            skills: [
                { name: 'React.js', level: 92 },
                { name: 'Node.js', level: 88 },
                { name: 'Express.js', level: 88 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'Scikit-learn', level: 80 },
                { name: 'NumPy / Pandas', level: 85 }
            ],
            theme: 'from-indigo-500/20 to-violet-600/20 shadow-indigo-500/5',
            accent: 'bg-indigo-400'
        },
        {
            title: 'Databases & Cloud',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: [
                { name: 'MongoDB', level: 90 },
                { name: 'MySQL', level: 82 },
                { name: 'Vercel / Render', level: 80 }
            ],
            theme: 'from-emerald-500/20 to-teal-600/20 shadow-emerald-500/5',
            accent: 'bg-emerald-400'
        },
        {
            title: 'Tools & Platforms',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'Postman', level: 85 },
                { name: 'RESTful APIs', level: 92 },
                { name: 'JWT Security', level: 88 },
                { name: 'VS Code', level: 95 }
            ],
            theme: 'from-fuchsia-500/20 to-pink-600/20 shadow-fuchsia-500/5',
            accent: 'bg-fuchsia-400'
        }
    ];

    const competencies = [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management System',
        'API Architecture & Security',
        'Version Control (Git Flow)',
        'Agile Software Lifecycle',
        'Machine Learning Pipelines',
        'Analytical Problem Solving'
    ];

    return (
        <section id="skills" className="py-24 bg-dark-950 relative overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[110px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono tracking-widest text-primary-400 uppercase mb-2">Capabilities</p>
                    <h2 className="section-title mb-0">Skills & Tech Stack</h2>
                </div>

                {/* Tech Radar Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`p-6 bg-dark-900/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl flex flex-col`}
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                                <div className="flex items-center gap-3">
                                    <span className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-primary-400 flex items-center justify-center">
                                        {category.icon}
                                    </span>
                                    <h3 className="text-xl font-bold tracking-tight text-dark-50">{category.title}</h3>
                                </div>
                                <span className="text-[10px] font-mono tracking-wider text-dark-500 uppercase bg-white/[0.02] px-2.5 py-1 rounded-md border border-white/[0.04]">
                                    Category 0{index + 1}
                                </span>
                            </div>

                            {/* Skills Progression Bars */}
                            <div className="space-y-5 flex-1">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center text-xs font-semibold">
                                            <span className="text-dark-200 font-mono">{skill.name}</span>
                                            <span className="text-dark-400 font-mono">{skill.level}%</span>
                                        </div>
                                        {/* Progress Track */}
                                        <div className="h-1.5 w-full bg-dark-950 rounded-full overflow-hidden border border-white/[0.04]">
                                            <div
                                                className={`h-full ${category.accent} rounded-full transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: animate ? `${skill.level}%` : '0%',
                                                    boxShadow: `0 0 8px ${category.accent.replace('bg-', '')}`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Competencies Matrix */}
                <div className="mt-20 p-8 bg-dark-900/10 backdrop-blur-2xl rounded-3xl border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-violet-500/5 to-fuchsia-500/5 opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 text-center">
                        <h3 className="text-2xl font-bold text-dark-100 tracking-tight mb-8">
                            Core Engineering Competencies
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {competencies.map((comp) => (
                                <div
                                    key={comp}
                                    className="p-4 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/[0.05] hover:border-primary-500/30 transition-all duration-300 group text-left flex flex-col justify-between h-24"
                                >
                                    <span className="flex h-1.5 w-1.5 relative mb-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
                                    </span>
                                    <span className="text-xs font-mono font-medium text-dark-300 group-hover:text-primary-300 transition-colors leading-relaxed">
                                        {comp}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
