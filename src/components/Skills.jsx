const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: ['C++', 'Java', 'JavaScript', 'SQL', 'HTML', 'Python', 'CSS'],
        },
        {
            title: 'Frameworks & Libraries',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'NumPy', 'Pandas', 'Scikit-learn', 'Flask'],
        },
        {
            title: 'Tools & Platforms',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'JWT', 'REST APIs'],
        },
        {
            title: 'Databases',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            skills: ['MySQL', 'MongoDB'],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title animate-fade-in-up">Skills & Technologies</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-primary-400">{category.icon}</div>
                                <h3 className="text-xl font-bold text-dark-100">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-dark-800 text-dark-200 text-sm rounded-lg border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-dark-200 mb-6">Core Competencies</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Data Structures & Algorithms',
                            'Object-Oriented Programming',
                            'Database Management',
                            'RESTful APIs',
                            'Version Control',
                            'Agile Methodologies',
                            'Problem Solving',
                            'Team Collaboration',
                        ].map((competency) => (
                            <div
                                key={competency}
                                className="px-6 py-3 bg-gradient-to-r from-dark-800 to-dark-900 rounded-full border border-dark-700 hover:border-primary-500 transition-all duration-300 group"
                            >
                                <span className="text-dark-300 group-hover:text-primary-400 transition-colors duration-300">
                                    {competency}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
