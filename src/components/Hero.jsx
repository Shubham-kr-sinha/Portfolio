import { useState, useEffect, useRef } from 'react';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('json'); // 'json', 'py', 'cli'
    const [typedText, setTypedText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [cliHistory, setCliHistory] = useState([
        { type: 'input', text: 'help' },
        { type: 'output', text: 'Available commands: about, skills, projects, achievements, contact, clear' }
    ]);
    const [cliInput, setCliInput] = useState('');
    const [epoch, setEpoch] = useState(1);
    const [epochLogs, setEpochLogs] = useState([]);
    const cliEndRef = useRef(null);

    const roles = [
        'Full-Stack MERN Developer',
        'Machine Learning Enthusiast',
        'Competitive Programmer',
        'Problem Solver'
    ];

    // Typing effect for Roles
    useEffect(() => {
        let currentText = '';
        let isDeleting = false;
        let index = 0;
        let timer;

        const type = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                currentText = currentRole.substring(0, currentText.length - 1);
            } else {
                currentText = currentRole.substring(0, currentText.length + 1);
            }

            setTypedText(currentText);

            let typingSpeed = 100;
            if (isDeleting) typingSpeed = 50;

            if (!isDeleting && currentText === currentRole) {
                typingSpeed = 2000; // Wait at full role text
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                setRoleIndex((prev) => (prev + 1) % roles.length);
                typingSpeed = 500;
            }

            timer = setTimeout(type, typingSpeed);
        };

        timer = setTimeout(type, 100);
        return () => clearTimeout(timer);
    }, [roleIndex]);

    // ML Epoch Simulator
    useEffect(() => {
        if (activeTab !== 'py') return;

        const pipelineSteps = [
            '>>> import torch',
            '>>> from sks_ml import NanoplasticClassifier',
            '>>> model = NanoplasticClassifier()',
            '>>> optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)',
            '>>> # Starting training loop on GPU (CUDA)...',
        ];

        setEpochLogs(pipelineSteps);
        setEpoch(1);

        let currentEpoch = 1;
        const interval = setInterval(() => {
            if (currentEpoch > 5) {
                setEpochLogs((prev) => [
                    ...prev,
                    `[SUCCESS] Model training complete!`,
                    `[METRICS] Final Val Accuracy: 96.84%`,
                    `[METRICS] Saving model checkpoint to sks_model.pt...`
                ]);
                clearInterval(interval);
                return;
            }

            const loss = (0.842 - currentEpoch * 0.14 - Math.random() * 0.05).toFixed(4);
            const acc = (72.45 + currentEpoch * 5.2 + Math.random() * 1.5).toFixed(2);
            
            setEpochLogs((prev) => [
                ...prev,
                `Epoch ${currentEpoch}/5 - loss: ${loss} - val_loss: ${(loss * 1.05).toFixed(4)} - val_acc: ${acc}%`
            ]);

            currentEpoch += 1;
            setEpoch(currentEpoch);
        }, 1200);

        return () => clearInterval(interval);
    }, [activeTab]);

    // Auto scroll CLI
    useEffect(() => {
        if (cliEndRef.current) {
            cliEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [cliHistory, activeTab]);

    // Handle CLI inputs
    const handleCliSubmit = (e) => {
        e.preventDefault();
        const cmd = cliInput.trim().toLowerCase();
        if (!cmd) return;

        let output = '';
        switch (cmd) {
            case 'help':
                output = 'Available commands: about, skills, projects, achievements, contact, clear';
                break;
            case 'about':
                output = 'Shubham Kumar Sinha is a B.Tech CSE student at VIT Chennai. Full-stack MERN builder, IEEE paper publisher, and ML enthusiast.';
                break;
            case 'skills':
                output = 'Languages: C++, Java, JS, Python, SQL. Libs: React, Node, Express, Scikit-learn, Pandas, Flask.';
                break;
            case 'projects':
                output = 'MediBook (MERN), FoodFlow (MERN), Typing Speed Test (JS), Nanoplastic Classification (ML), Flight Delay System (ML).';
                break;
            case 'achievements':
                output = 'IEEE Best Paper Award (RECON 2025), IEEE Xplore Publication, LeetCode 1700+ rating, Codeforces 1100.';
                break;
            case 'contact':
                output = 'Email: shubhamkrsinha11111@gmail.com | LinkedIn: Shubham Kumar Sinha | GitHub: Shubham-kr-sinha';
                break;
            case 'clear':
                setCliHistory([]);
                setCliInput('');
                return;
            default:
                output = `Command not found: '${cmd}'. Type 'help' to see list of valid commands.`;
        }

        setCliHistory((prev) => [
            ...prev,
            { type: 'input', text: cliInput },
            { type: 'output', text: output }
        ]);
        setCliInput('');
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950 pt-20"
        >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>

            {/* Glowing Blobs */}
            <div className="absolute top-1/4 left-1/12 w-[35rem] h-[35rem] bg-indigo-500/10 rounded-full blur-[120px] animate-float pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/12 w-[35rem] h-[35rem] bg-fuchsia-500/10 rounded-full blur-[120px] animate-float-delayed pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Heading, Info, CTAs */}
                    <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
                        {/* Interactive Status Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-primary-400 font-medium">
                            <span className="flex h-2.5 w-2.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            Available for Select Opportunities
                        </div>

                        {/* Title & Typing Effect */}
                        <div className="space-y-4">
                            <p className="text-dark-300 font-medium text-lg tracking-wider uppercase">
                                Welcome to my workspace
                            </p>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-dark-50">
                                Shubham <br />
                                <span className="text-gradient">Kumar Sinha</span>
                            </h1>
                            <div className="h-10 sm:h-12 flex items-center">
                                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200 cursor-blink">
                                    {typedText}
                                </span>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-lg text-dark-300 max-w-2xl leading-relaxed">
                            B.Tech Computer Science student at VIT Chennai. I design robust web applications using the MERN stack and write algorithms to solve complex data problems. Let's build something extraordinary.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a href="#projects" className="btn-primary flex items-center justify-center gap-2 group">
                                Explore Projects
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                                Get in Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* Social Profile Grid */}
                        <div className="flex items-center gap-4 pt-4">
                            {[
                                { name: 'GitHub', url: 'https://github.com/Shubham-kr-sinha', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-kumar-sinha-a7235b226/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                                { name: 'LeetCode', url: 'https://leetcode.com/u/Shubh_iam/', icon: 'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.832-1.62-7.872.633l-2.687 2.935v.001c-.85.904-1.348 1.978-1.458 3.124-.103 1.074.136 2.136.687 3.065.089.15.19.295.301.435.185.233.387.453.603.66l4.276 4.193.001.002c3.248 3.125 8.45 3.043 11.599-.195l2.396-2.392a2.757 2.757 0 0 0 0-3.905 2.75 2.75 0 0 0-3.904 0l-2.396 2.392a.801.801 0 0 1-1.14.003l-.001-.002-4.276-4.193a.82.82 0 0 1-.165-.247.798.798 0 0 1 .165-.959l4.277-4.193a.798.798 0 0 1 1.14 0l3.5 2.831a2.75 2.75 0 0 0 3.904 0 2.757 2.757 0 0 0 0-3.905l-3.5-2.831c-2.365-1.89-5.832-1.62-7.872.633l-4.277 4.193a2.757 2.757 0 0 0 0 3.905c.54.54 1.414.54 1.955 0l4.276-4.193c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003z' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/[0.03] hover:bg-primary-500/10 border border-white/[0.08] hover:border-primary-500/30 rounded-xl text-dark-300 hover:text-primary-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                                    aria-label={social.name}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Code IDE Terminal Widget */}
                    <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none animate-fade-in">
                        <div className="relative group">
                            {/* Inner border glow */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-primary-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                            {/* Main IDE Window */}
                            <div className="relative bg-dark-950/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                {/* IDE Title bar */}
                                <div className="bg-dark-900/60 border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                                    </div>
                                    <div className="text-xs text-dark-400 font-mono tracking-tight flex items-center gap-1.5 bg-dark-950/50 px-3 py-1 rounded-md border border-white/[0.04]">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                        sks-developer-sandbox
                                    </div>
                                    <div className="w-12"></div>
                                </div>

                                {/* Editor Tabs */}
                                <div className="bg-dark-900/30 border-b border-white/[0.05] flex text-xs font-mono">
                                    <button
                                        onClick={() => setActiveTab('json')}
                                        className={`px-4 py-2.5 border-r border-white/[0.05] flex items-center gap-1.5 transition-colors cursor-pointer ${activeTab === 'json' ? 'bg-dark-950 text-indigo-400 border-b-2 border-b-indigo-500 font-semibold' : 'text-dark-400 hover:text-dark-200 hover:bg-dark-900/40'}`}
                                    >
                                        <span className="text-amber-500 font-bold">{"{ }"}</span>
                                        profile.json
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('py')}
                                        className={`px-4 py-2.5 border-r border-white/[0.05] flex items-center gap-1.5 transition-colors cursor-pointer ${activeTab === 'py' ? 'bg-dark-950 text-indigo-400 border-b-2 border-b-indigo-500 font-semibold' : 'text-dark-400 hover:text-dark-200 hover:bg-dark-900/40'}`}
                                    >
                                        <span className="text-sky-400 font-bold">py</span>
                                        ml_train.py
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('cli')}
                                        className={`px-4 py-2.5 border-r border-white/[0.05] flex items-center gap-1.5 transition-colors cursor-pointer ${activeTab === 'cli' ? 'bg-dark-950 text-indigo-400 border-b-2 border-b-indigo-500 font-semibold' : 'text-dark-400 hover:text-dark-200 hover:bg-dark-900/40'}`}
                                    >
                                        <span className="text-emerald-400 font-bold">$</span>
                                        interactive.sh
                                    </button>
                                </div>

                                {/* Tab Contents */}
                                <div className="p-5 h-80 overflow-y-auto text-left font-mono text-xs leading-relaxed select-text">
                                    {activeTab === 'json' && (
                                        <pre className="text-indigo-300">
                                            <code className="text-emerald-400">{"{"}</code><br />
                                            &nbsp;&nbsp;<span className="text-dark-400">"name"</span>: <span className="text-fuchsia-400">"Shubham Kumar Sinha"</span>,<br />
                                            &nbsp;&nbsp;<span className="text-dark-400">"role"</span>: <span className="text-fuchsia-400">"Full-Stack MERN & ML Builder"</span>,<br />
                                            &nbsp;&nbsp;<span className="text-dark-400">"education"</span>: <span className="text-emerald-400">{"{"}</span><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-dark-400">"college"</span>: <span className="text-fuchsia-400">"VIT Chennai"</span>,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-dark-400">"major"</span>: <span className="text-fuchsia-400">"Computer Science & Eng"</span><br />
                                            &nbsp;&nbsp;<span className="text-emerald-400">{"}"}</span>,<br />
                                            &nbsp;&nbsp;<span className="text-dark-400">"location"</span>: <span className="text-fuchsia-400">"Chennai, India"</span>,<br />
                                            &nbsp;&nbsp;<span className="text-dark-400">"interests"</span>: <span className="text-violet-400">[</span><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">"Web Development"</span>,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">"Machine Learning"</span>,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-fuchsia-400">"Competitive Programming"</span><br />
                                            &nbsp;&nbsp;<span className="text-violet-400">]</span><br />
                                            <code className="text-emerald-400">{"}"}</code>
                                        </pre>
                                    )}

                                    {activeTab === 'py' && (
                                        <div className="text-slate-300 space-y-1">
                                            {epochLogs.map((log, idx) => (
                                                <div
                                                    key={idx}
                                                    className={
                                                        log.startsWith('[SUCCESS]') ? 'text-emerald-400' :
                                                        log.startsWith('[METRICS]') ? 'text-cyan-400 font-semibold' :
                                                        log.startsWith('Epoch') ? 'text-dark-300' : 'text-slate-400'
                                                    }
                                                >
                                                    {log}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'cli' && (
                                        <div className="space-y-2 text-slate-300">
                                            <div className="text-dark-400 text-[11px]">Type a command like 'about', 'skills', 'projects', 'contact' or 'clear':</div>
                                            {cliHistory.map((item, idx) => (
                                                <div key={idx} className="space-y-0.5">
                                                    {item.type === 'input' ? (
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-primary-400">sks@portfolio:~$</span>
                                                            <span className="text-dark-100">{item.text}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="text-dark-300 pl-4 border-l border-white/5 bg-white/[0.01] py-1 rounded">
                                                            {item.text}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                            <form onSubmit={handleCliSubmit} className="flex items-center gap-1.5 mt-1">
                                                <span className="text-primary-400">sks@portfolio:~$</span>
                                                <input
                                                    type="text"
                                                    value={cliInput}
                                                    onChange={(e) => setCliInput(e.target.value)}
                                                    className="flex-1 bg-transparent border-none outline-none text-dark-100 placeholder-dark-600 focus:ring-0 p-0 text-xs font-mono"
                                                    placeholder="..."
                                                    autoFocus
                                                />
                                            </form>
                                            <div ref={cliEndRef} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Down Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce pointer-events-none">
                    <span className="text-[10px] font-mono tracking-widest text-dark-500 uppercase">Scroll Down</span>
                    <svg
                        className="w-5 h-5 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
