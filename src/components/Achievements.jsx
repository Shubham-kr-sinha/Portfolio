const Achievements = () => {
    const achievements = [
        {
            title: 'IEEE Best Paper Award',
            description: 'Awarded Best Paper at IEEE RECON 2025 conference for research on "Emergent ROV: Underwater Solar Panel Cleaning"',
            icon: '🏆',
            link: 'https://drive.google.com/file/d/1namXQc2wUR-LPPSf4_Be_UJkw9OgJEux/view?usp=sharing',
            linkText: 'View Certificate',
        },
        {
            title: 'IEEE Publication',
            description: 'Research paper published in IEEE Xplore digital library on underwater robotics and solar panel maintenance',
            icon: '📄',
            link: 'https://ieeexplore.ieee.org/document/11085386',
            linkText: 'View Publication',
        },
        {
            title: 'LeetCode Rating: 1700+',
            description: 'Achieved 1700+ rating on LeetCode, demonstrating strong problem-solving skills and algorithmic proficiency',
            icon: '💻',
            link: 'https://leetcode.com/u/Shubh_iam/',
            linkText: 'View Profile',
        },
        {
            title: 'Codeforces Rating: 1100 (Newbie)',
            description: 'Achieved 1100 rating (Newbie) on Codeforces, showcasing competitive programming abilities',
            icon: '⚡',
            link: 'https://codeforces.com/profile/Sammyhero',
            linkText: 'View Profile',
        },
    ];

    return (
        <section id="achievements" className="py-20 bg-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title animate-fade-in-up">Achievements & Recognition</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.title}
                            className="card group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                                    {achievement.icon}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-dark-100 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-dark-300 mb-4 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
                                    >
                                        {achievement.linkText}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coding Platforms */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-dark-200 mb-8 text-center">Coding Profiles</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://leetcode.com/u/Shubh_iam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card hover:scale-105 transition-transform duration-300 flex items-center gap-4 min-w-[250px]"
                        >
                            <div className="text-4xl">💻</div>
                            <div>
                                <p className="text-dark-400 text-sm">LeetCode</p>
                                <p className="text-dark-100 font-bold">1700+ Rating</p>
                            </div>
                        </a>
                        <a
                            href="https://codeforces.com/profile/Sammyhero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card hover:scale-105 transition-transform duration-300 flex items-center gap-4 min-w-[250px]"
                        >
                            <div className="text-4xl">⚡</div>
                            <div>
                                <p className="text-dark-400 text-sm">Codeforces</p>
                                <p className="text-dark-100 font-bold">1200+ (Pupil)</p>
                            </div>
                        </a>

                    </div>
                </div>

                {/* Extracurricular Activities */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-dark-200 mb-8 text-center">Extracurricular Activities</h3>
                    <div className="flex justify-center">
                        <a
                            href="https://my-artwork-gallary.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card hover:scale-105 transition-transform duration-300 flex items-center gap-4 min-w-[300px] group"
                        >
                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">🎨</div>
                            <div>
                                <h4 className="text-xl font-bold text-dark-100 group-hover:text-primary-400 transition-colors">Artwork Gallery</h4>
                                <p className="text-dark-300 text-sm">Explore my creative side</p>
                            </div>
                            <svg className="w-5 h-5 text-primary-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
