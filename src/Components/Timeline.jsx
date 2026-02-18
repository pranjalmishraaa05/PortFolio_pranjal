import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, Rocket, ExternalLink, Github } from 'lucide-react';

const timelineData = [
    {
        year: '2026',
        projects: [
            {
                title: 'Tomato Pay Economy',
                company: 'Agricultural Finance Platform',
                description: 'Agricultural finance re-imagined. Empowering tomato traders with flexible payment solutions including Tomato Pay and EMI plans designed for the modern tomato economy.',
                tech: ['Wix', 'Branding', 'Landing Page', 'Agritech Finance'],
                image: '/projects/tomato.png',
                icon: <Globe className="w-6 h-6" />,
                color: 'bg-neutral-500',
                liveDemo: 'https://pranjalmishra2024.wixsite.com/my-site#Contact%20Us',
                github: 'https://pranjalmishra2024.wixsite.com/my-site#Contact%20Us'
            },
            {
                title: 'Launch Your Startup (YouTube Feature)',
                company: 'Video Feature',
                description: 'Featured in a long-form startup discussion focused on how teenagers and college students can launch real ventures, including practical startup journeys from Rishihood University.',
                tech: ['YouTube', 'Founder Interview', 'Startup Storytelling', 'Long-form Content'],
                image: '/projects/yt1.png',
                icon: <Globe className="w-6 h-6" />,
                color: 'bg-neutral-600',
                liveDemo: 'https://www.youtube.com/watch?v=Edy-H6PBTt8',
                github: 'https://www.youtube.com/watch?v=Edy-H6PBTt8'
            },
            {
                title: 'THE SCAM | EP 01 (Finanza Club)',
                company: 'Finance Series Feature',
                description: 'Featured in Episode 01 of THE SCAM, the Finanza Club finance series introduction focused on financial awareness and engaging educational storytelling.',
                tech: ['YouTube', 'Finanza Club', 'Finance Series', 'Educational Content'],
                image: '/projects/yt2.png',
                icon: <Globe className="w-6 h-6" />,
                color: 'bg-neutral-500',
                liveDemo: 'https://youtu.be/56NOmu_z-4A?si=e8rmZRl2HVW0Uy1B',
                github: 'https://youtu.be/56NOmu_z-4A?si=e8rmZRl2HVW0Uy1B'
            },
            {
                title: 'THE SCAM | EP 02 (Finanza Club)',
                company: 'Finance Series Feature',
                description: 'Featured in Episode 02 of THE SCAM, continuing the Finanza Club finance series with a deeper narrative on financial thinking and practical awareness.',
                tech: ['YouTube', 'Finanza Club', 'Finance Series', 'Educational Content'],
                image: '/projects/yt3.png',
                icon: <Globe className="w-6 h-6" />,
                color: 'bg-neutral-600',
                liveDemo: 'https://youtu.be/UFdTJofPW5E?si=JpeR9fvGzdB-4MqZ',
                github: 'https://youtu.be/UFdTJofPW5E?si=JpeR9fvGzdB-4MqZ'
            }
        ]
    }
];

const TimelineProject = ({ project, index, isEven }) => {
    return (
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 sm:gap-8 md:gap-16 mb-16 sm:mb-20 md:mb-32 last:mb-0`}>
            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-5 sm:p-6 md:p-8 hover:border-neutral-500/50 transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-2xl ${project.color} text-white shadow-lg shadow-neutral-800/40 group-hover:scale-110 transition-transform`}>
                            {project.icon}
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neutral-500 transition-colors">{project.title}</h3>
                            <p className="text-neutral-500 text-sm">{project.company}</p>
                        </div>
                    </div>

                    <p className="text-neutral-400 text-sm sm:text-base mb-6 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, idx) => (
                            <span key={idx} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors text-xs sm:text-sm font-medium"
                        >
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-neutral-800 hover:bg-neutral-800 text-white rounded-xl transition-colors text-xs sm:text-sm font-medium"
                        >
                            <Github className="w-4 h-4" /> Source
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Image Display */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                <div className="relative group overflow-hidden rounded-3xl border border-neutral-800 aspect-video md:aspect-[4/3] bg-neutral-900 p-4 sm:p-6">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />

                    <div className="absolute bottom-6 right-6 p-4 rounded-full bg-neutral-800/10 backdrop-blur-md border border-neutral-800/30 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Rocket className="w-6 h-6 animate-pulse" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    let projectCounter = 0;

    return (
        <section id="projects" className="w-full bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 sm:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800/30 bg-neutral-800/10 text-neutral-500 mb-6"
                    >
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold tracking-wider uppercase">My Journey</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-6xl font-black text-center text-white mb-6 tracking-tighter"
                    >
                        EVOLUTION OF <span className="text-neutral-500">CRAFT</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-neutral-600 rounded-full mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-neutral-500 text-center max-w-2xl text-base sm:text-lg px-4"
                    >
                        Curated projects are being added one by one with the same portfolio presentation style.
                    </motion.p>
                </div>

                {/* Central Connecting Line */}
                <div className="hidden md:block absolute left-1/2 top-[350px] bottom-0 w-px bg-gradient-to-b from-neutral-800/50 via-neutral-800 to-transparent -translate-x-1/2 z-0" />

                {/* Timeline Items */}
                <div className="relative z-10">
                    {timelineData.map((group, groupIdx) => (
                        <div key={groupIdx} className="relative mb-20 sm:mb-32 last:mb-0">
                            {/* Year Marker */}
                            <div className="flex justify-center mb-12 sm:mb-16 relative z-20">
                                <div className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-neutral-800/30 bg-neutral-900 text-neutral-500 font-bold text-lg sm:text-xl shadow-2xl shadow-neutral-900/40 relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-neutral-800/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10">{group.year}</span>
                                </div>
                            </div>

                            {/* Projects in this year */}
                            <div className="space-y-20 md:space-y-0">
                                {group.projects.map((project, projIdx) => {
                                    const isEven = projectCounter % 2 === 0;
                                    projectCounter++;
                                    return (
                                        <TimelineProject
                                            key={projIdx}
                                            project={project}
                                            index={projIdx}
                                            isEven={isEven}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20 sm:mt-32 p-6 sm:p-8 md:p-12 rounded-3xl border border-neutral-800 bg-neutral-900/30 text-center relative overflow-hidden group z-10"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-600 to-transparent opacity-50" />
                    <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">The journey continues...</h3>
                        <p className="text-neutral-500 text-sm sm:text-base mb-8 max-w-xl mx-auto">Currently open for new opportunities and collaborations on exciting projects.</p>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-neutral-600 hover:bg-neutral-500 text-white rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-neutral-800/20 inline-block"
                        >
                            View Resume
                        </a>
                    </div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neutral-800/10 rounded-full blur-3xl group-hover:bg-neutral-600/20 transition-colors duration-700" />
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
