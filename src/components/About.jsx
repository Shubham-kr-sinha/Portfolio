const About = () => {
    return (
        <section id="about" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title animate-fade-in-up">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <div className="relative group animate-fade-in-left">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-dark-800 rounded-2xl p-8 border border-dark-700">
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img
                                    src="/profile.png"
                                    alt="Shubham Kumar Sinha"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="space-y-6 animate-fade-in-right">
                        <p className="text-lg text-dark-300 leading-relaxed">
                            I'm a passionate <span className="text-primary-400 font-semibold">Full-Stack MERN Developer</span> with
                            a strong foundation in building scalable web applications. My expertise spans across MongoDB, Express.js,
                            React, and Node.js, enabling me to create end-to-end solutions that deliver exceptional user experiences.
                        </p>

                        <p className="text-lg text-dark-300 leading-relaxed">
                            Beyond web development, I'm deeply fascinated by <span className="text-primary-400 font-semibold">Machine Learning</span> and
                            its potential to solve real-world problems. I've worked on various ML projects including nanoplastic classification
                            and flight delay prediction systems, combining my software engineering skills with data science.
                        </p>

                        <p className="text-lg text-dark-300 leading-relaxed">
                            Currently pursuing my <span className="text-primary-400 font-semibold">B.Tech in Computer Science and Engineering</span> at
                            Vellore Institute of Technology, Chennai. I'm constantly learning, building, and pushing the boundaries of what's possible
                            with code.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 text-dark-300">
                                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                                <span>VIT Chennai</span>
                            </div>
                            <div className="flex items-center gap-2 text-dark-300">
                                <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>Chennai, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
