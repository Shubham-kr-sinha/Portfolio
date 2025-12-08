const Projects = () => {
    const projects = [
        {
            title: 'MediBook',
            category: 'Web Development',
            description: 'A full-stack MERN application for medical appointment management with JWT authentication, role-based access control, and secure patient-doctor communication.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://medi-book-gamma.vercel.app/',
            image: '🏥',
        },
        {
            title: 'FoodFlow',
            category: 'Web Development',
            description: 'Built a scalable food application using the MERN stack with React Context API for state management, implementing secure authentication and real-time order tracking.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://food-flow-five.vercel.app/',
            image: '🍔',
        },
        {
            title: 'Typing Speed Test',
            category: 'Web Development',
            description: 'An interactive typing speed test application featuring real-time WPM calculation, accuracy tracking, and a dynamic user interface.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://shubham-kr-sinha.github.io/Typing-Speed-Test/',
            image: '⌨️',
        },
        {
            title: 'Bubble Game',
            category: 'Web Development',
            description: 'A fun and engaging browser-based game built with vanilla JavaScript, featuring score tracking and timer functionality.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Shubham-kr-sinha',
            live: 'https://shubham-kr-sinha.github.io/Bubble-Game/',
            image: '🎮',
        },
        {
            title: 'Nanoplastic Classification',
            category: 'Machine Learning',
            description: 'Developed a machine learning model for classifying nanoplastic particles using advanced image processing and deep learning techniques.',
            tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
            github: 'https://github.com/Shubham-kr-sinha/ML-Project',
            live: null,
            image: '🔬',
        },
        {
            title: 'Flight Delay Prediction System',
            category: 'Machine Learning',
            description: 'Built a predictive model to forecast flight delays using historical data, feature engineering, and ensemble learning methods.',
            tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
            github: 'https://github.com/Shubham-kr-sinha/Flight-Delay-Prediction-System',
            live: null,
            image: '✈️',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title animate-fade-in-up">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="card group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Project Icon */}
                            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {project.image}
                            </div>

                            {/* Category Badge */}
                            <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-semibold rounded-full mb-3">
                                {project.category}
                            </span>

                            {/* Project Title */}
                            <h3 className="text-2xl font-bold text-dark-100 mb-3 group-hover:text-primary-400 transition-colors duration-300">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-dark-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-dark-800 text-dark-400 text-xs rounded border border-dark-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2 bg-dark-800 text-dark-200 rounded-lg border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 text-center font-medium"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </span>
                                </a>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 text-center font-medium"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live
                                        </span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
