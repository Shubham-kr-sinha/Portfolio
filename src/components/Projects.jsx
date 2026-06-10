import { useState } from 'react';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            id: 0,
            title: 'MediBook',
            category: 'Web Development',
            description: 'A medical appointment management platform with JWT auth, role-based access control, and patient-doctor dashboards.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://medi-book-gamma.vercel.app/',
            icon: '🏥',
            port: 'PORT: 5000',
            logs: [
                'Initializing MediBook Server...',
                'Loading JWT Secret Key...',
                'Connecting to MongoDB Cluster...',
                'Status: SECURE [200 OK]'
            ]
        },
        {
            id: 1,
            title: 'FoodFlow',
            category: 'Web Development',
            description: 'A food order and tracking application using React Context API for global state, user session auth, and real-time carts.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://food-flow-five.vercel.app/',
            icon: '🍔',
            port: 'PORT: 3000',
            logs: [
                'Initializing FoodFlow client...',
                'Binding Context Providers...',
                'Fetching menu items...',
                'Status: ACTIVE [200 OK]'
            ]
        },
        {
            id: 2,
            title: 'Typing Speed Test',
            category: 'Web Development',
            description: 'An interactive browser typing tutor testing Words-Per-Minute, typing accuracy rates, and instant scoring statistics.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://shubham-kr-sinha.github.io/Typing-Speed-Test/',
            icon: '⌨️',
            port: 'PORT: 8080',
            logs: [
                'Booting typing engine...',
                'Injecting word database...',
                'Awaiting user keystrokes...',
                'Status: LISTENING [200]'
            ]
        },
        {
            id: 3,
            title: 'Bubble Game',
            category: 'Web Development',
            description: 'An arcade bubble-popping game using HTML5 Canvas & event delegation with scores, countdown timers, and level updates.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://shubham-kr-sinha.github.io/Bubble-Game/',
            icon: '🎮',
            port: 'PORT: 8080',
            logs: [
                'Loading assets & sprites...',
                'Initializing Canvas Context...',
                'Rendering main game loop...',
                'Status: RUNNING [200]'
            ]
        },
        {
            id: 4,
            title: 'Nanoplastic Classification',
            category: 'Machine Learning',
            description: 'A machine learning system for processing micro-spectroscopy images to identify and classify nanoplastic contaminants.',
            tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
            github: 'https://github.com/Shubham-kr-sinha/ML-Project',
            live: null,
            icon: '🔬',
            port: 'CUDA: GPU_0',
            logs: [
                'Loading ResNet weights...',
                'Initializing tensor graphs...',
                'Loading test spectrum data...',
                'Val Loss: 0.041 [96.8% Acc]'
            ]
        },
        {
            id: 5,
            title: 'Flight Delay Predictor',
            category: 'Machine Learning',
            description: 'A predictive modeling tool forecasting commercial aviation delays based on carrier patterns and weather telemetry.',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
            github: 'https://github.com/Shubham-kr-sinha/Flight-Delay-Prediction-System',
            live: null,
            icon: '✈️',
            port: 'CUDA: GPU_0',
            logs: [
                'Reading flight datasets...',
                'Fitting XGBoost model...',
                'Running telemetry reports...',
                'Val Acc: 89.4% [Finished]'
            ]
        },
    ];

    const filters = ['All', 'Web Development', 'Machine Learning'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-24 bg-dark-900/40 relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-xs font-mono tracking-widest text-primary-400 uppercase mb-2">Portfolio</p>
                    <h2 className="section-title mb-8">Featured Projects</h2>

                    {/* Filter Dock */}
                    <div className="inline-flex p-1.5 bg-dark-950/60 backdrop-blur-md rounded-2xl border border-white/[0.06] shadow-inner mb-6">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${activeFilter === filter
                                        ? 'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-lg shadow-primary-500/20'
                                        : 'text-dark-400 hover:text-dark-200'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => {
                        const isHovered = hoveredIndex === project.id;
                        return (
                            <div
                                key={project.title}
                                className="card group relative flex flex-col h-[420px] overflow-hidden transition-all duration-500 hover:-translate-y-1"
                                onMouseEnter={() => setHoveredIndex(project.id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Top Metadata bar */}
                                <div className="flex items-center justify-between mb-4 text-[10px] font-mono text-dark-500 border-b border-white/[0.04] pb-3">
                                    <span className="px-2 py-0.5 bg-white/[0.03] rounded border border-white/[0.05] text-primary-400">
                                        {project.category}
                                    </span>
                                    <span>{project.port}</span>
                                </div>

                                {/* Main Title & Description */}
                                <div className="flex items-start gap-3.5 mb-3">
                                    <span className="text-4xl">{project.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-dark-300 text-sm leading-relaxed mb-5 flex-grow font-light">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.05] text-dark-400 hover:text-dark-200 transition-colors text-[10px] font-mono rounded-lg"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link badging */}
                                <div className="flex gap-3 mt-auto pt-4 border-t border-white/[0.04]">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2.5 bg-white/[0.02] hover:bg-white/[0.05] text-dark-200 rounded-xl border border-white/10 hover:border-primary-500/40 hover:text-primary-400 transition-all duration-300 text-center text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {project.live ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-2.5 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-xl hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 text-center text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="flex-1 py-2.5 bg-white/[0.01] text-dark-500 rounded-xl border border-white/[0.03] text-center text-xs font-mono flex items-center justify-center">
                                            [ML Model Only]
                                        </span>
                                    )}
                                </div>

                                {/* Tactical Mock Boot Overlay (Visible on Hover) */}
                                <div
                                    className={`absolute inset-0 bg-dark-950/95 flex flex-col justify-center p-6 font-mono text-xs text-primary-400 space-y-1.5 border border-primary-500/20 rounded-2xl pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <div className="text-[10px] text-dark-500 uppercase tracking-widest mb-2 border-b border-white/[0.05] pb-1">
                                        Booting Project Console...
                                    </div>
                                    {project.logs.map((log, idx) => (
                                        <div
                                            key={idx}
                                            className="opacity-0 translate-y-2 animate-fade-in-up"
                                            style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                                        >
                                            <span className="text-emerald-500">✔</span> {log}
                                        </div>
                                    ))}
                                    <div
                                        className="opacity-0 mt-3 pt-2 text-[10px] text-dark-500 border-t border-white/[0.05] animate-fade-in"
                                        style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
                                    >
                                        [Mouse-leave to exit shell]
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
