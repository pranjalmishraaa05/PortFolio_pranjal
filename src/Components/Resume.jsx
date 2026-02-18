import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ExternalLink, GraduationCap, Briefcase, Rocket, Cpu, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <section className="min-h-screen bg-black text-white py-24 px-6 md:px-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-800/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neutral-800/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden backdrop-blur-sm">
                {/* Header / Contact Info */}
                <div className="bg-gradient-to-r from-neutral-900/50 to-neutral-900 p-8 md:p-12 border-b border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-4xl md:text-5xl font-bold tracking-tighter mb-2"
                            >
                                PRANJAL <span className="text-neutral-400">MISHRA</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-neutral-400 text-lg md:text-xl font-light"
                            >
                                Entrepreneur | Student
                            </motion.p>
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-neutral-300">
                            <a href="tel:+917235040768" className="flex items-center gap-2 hover:text-neutral-500 transition-colors">
                                <Phone className="w-4 h-4 text-neutral-400" /> +91 7235040768
                            </a>
                            <a href="mailto:pranjal.mishra2024@makers.rishihood.edu.in" className="flex items-center gap-2 hover:text-neutral-500 transition-colors">
                                <Mail className="w-4 h-4 text-neutral-400" /> pranjal.mishra2024@makers.rishihood.edu.in
                            </a>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-4">
                                    <a href="https://www.linkedin.com/in/pranjal-mishra-346618323/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 active:scale-95 transition-all">
                                        <Linkedin className="w-5 h-5 text-neutral-400" />
                                    </a>
                                    <a href="http://nexorabuildweb.in/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-500 active:scale-95 transition-all">
                                        <Github className="w-5 h-5 text-neutral-400" />
                                    </a>
                                </div>
                                <button
                                    onClick={() => window.print()}
                                    className="print:hidden flex items-center gap-2 px-3 py-1 border border-neutral-700 rounded-lg hover:border-neutral-500 text-xs transition-all"
                                >
                                    Print / Save As PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                    {/* Professional Summary */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Professional Summary</h2>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            Entrepreneurship student and enthusiast with practical experience in startups, digital outreach, networking, and campaign coordination. Founder and operator of ventures in web development, fashion tech, and automated retail, with a strong focus on communication, audience engagement, and growth-oriented execution. Actively seeking a Social Media Internship role.
                        </p>
                    </section>

                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Education</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l border-neutral-800/30">
                                <div className="absolute w-2 h-2 bg-neutral-600 rounded-full -left-1.5 top-2" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="font-bold text-lg">BBA in Entrepreneurship</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2024 - 2028</span>
                                </div>
                                <p className="text-neutral-300">Rishihood University</p>
                            </div>

                            <div className="relative pl-6 border-l border-neutral-800/30">
                                <div className="absolute w-2 h-2 bg-neutral-600 rounded-full -left-1.5 top-2" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="font-bold text-lg">Higher Secondary Education</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2021 - 2023</span>
                                </div>
                                <p className="text-neutral-300">Tabish Public School</p>
                            </div>

                            <div className="relative pl-6 border-l border-neutral-800/30">
                                <div className="absolute w-2 h-2 bg-neutral-600 rounded-full -left-1.5 top-2" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="font-bold text-lg">Schooling</h3>
                                    <span className="text-neutral-400 font-mono text-sm">2009 - 2021</span>
                                </div>
                                <p className="text-neutral-300">Stella Maris Convent School</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Projects</h2>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">Tomato Pay Economy</h3>
                                    <div className="flex gap-3">
                                        <a href="https://pranjalmishra2024.wixsite.com/my-site#Contact%20Us" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <Github className="w-3 h-3" /> Website
                                        </a>
                                        <a href="https://pranjalmishra2024.wixsite.com/my-site#Contact%20Us" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> Demo
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-xs font-mono mb-3">Tech: Wix, Brand Storytelling, Landing Page Design, Agritech Finance Positioning</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                                    Built a finance-focused brand landing page for tomato traders with a strong visual identity and a clear value proposition around flexible payments.
                                </p>
                                <ul className="text-neutral-500 text-sm list-disc pl-5 space-y-1">
                                    <li>Communicated the core offering: Tomato Pay + EMI options for the modern tomato trade.</li>
                                    <li>Designed a clear conversion path using focused navigation and direct calls to action.</li>
                                    <li>Aligned visuals and copy to keep the product message simple, bold, and easy to remember.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">Launch Your Startup (YouTube Feature)</h3>
                                    <div className="flex gap-3">
                                        <a href="https://www.youtube.com/watch?v=Edy-H6PBTt8" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <Github className="w-3 h-3" /> YouTube
                                        </a>
                                        <a href="https://www.youtube.com/watch?v=Edy-H6PBTt8" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> Watch
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-xs font-mono mb-3">Type: Long-form YouTube Feature, Founder Interview, Startup Storytelling</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                                    Featured in a startup-focused video conversation about launching ventures as a teenager or college student, with real examples from Rishihood student founders.
                                </p>
                                <ul className="text-neutral-500 text-sm list-disc pl-5 space-y-1">
                                    <li>Showcases practical startup insights and student entrepreneurship journeys.</li>
                                    <li>Highlights communication, founder positioning, and narrative-driven personal branding.</li>
                                    <li>Extends digital presence through long-form content and audience discovery.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">THE SCAM | EP 01 (Finanza Club)</h3>
                                    <div className="flex gap-3">
                                        <a href="https://youtu.be/56NOmu_z-4A?si=e8rmZRl2HVW0Uy1B" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <Github className="w-3 h-3" /> YouTube
                                        </a>
                                        <a href="https://youtu.be/56NOmu_z-4A?si=e8rmZRl2HVW0Uy1B" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> Watch
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-xs font-mono mb-3">Type: YouTube Feature, Finanza Club Series, Finance Storytelling</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                                    Featured in THE SCAM | EP 01, an introductory finance-series episode built for educational awareness and engaging digital storytelling.
                                </p>
                                <ul className="text-neutral-500 text-sm list-disc pl-5 space-y-1">
                                    <li>Strengthens finance and community-oriented content positioning.</li>
                                    <li>Builds audience reach through platform-native long-form video.</li>
                                    <li>Adds another high-visibility media touchpoint in your public portfolio.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">THE SCAM | EP 02 (Finanza Club)</h3>
                                    <div className="flex gap-3">
                                        <a href="https://youtu.be/UFdTJofPW5E?si=JpeR9fvGzdB-4MqZ" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <Github className="w-3 h-3" /> YouTube
                                        </a>
                                        <a href="https://youtu.be/UFdTJofPW5E?si=JpeR9fvGzdB-4MqZ" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors">
                                            <ExternalLink className="w-3 h-3" /> Watch
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-xs font-mono mb-3">Type: YouTube Feature, Finanza Club Series, Finance Storytelling</p>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                                    Featured in THE SCAM | EP 02: The Beginning, extending the finance-series presence with continued educational storytelling and audience engagement.
                                </p>
                                <ul className="text-neutral-500 text-sm list-disc pl-5 space-y-1">
                                    <li>Builds continuity from Episode 01 to a broader finance-content narrative.</li>
                                    <li>Strengthens recurring creator visibility through series-based publishing.</li>
                                    <li>Adds another strong media proof-point to your portfolio.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-neutral-300 font-bold mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Core & Technical Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['MS Excel', 'Basic Python', 'SEO', 'Basic Web Dev', 'Research', 'Marketing Coordination', 'Digital Marketing Fundamentals'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 text-neutral-400 rounded-lg text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-neutral-300 font-bold mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Professional Skills
                                </h4>
                                <ul className="text-neutral-500 text-sm space-y-1 list-disc pl-5">
                                    <li>Social Media Support & Engagement</li>
                                    <li>Content Coordination & Campaign Assistance</li>
                                    <li>Communication & Community Building</li>
                                    <li>Networking & Partnership Development</li>
                                    <li>Strategic Thinking & Problem Solving</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Professional Experience & Highlights */}
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Briefcase className="w-5 h-5 text-neutral-400" />
                            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">Professional Experience & Highlights</h2>
                        </div>
                        <ul className="text-neutral-400 text-sm space-y-3 list-disc pl-5">
                            <li>Co-Founder, Elite Vendz (Jan 2026 - Present): Co-leading automated beverage vending solutions in high-footfall locations with focus on partnerships and operations.</li>
                            <li>Founder & CEO, Lehzaaa (Present): Building a fashion-tech platform connecting emerging designers with budget-conscious consumers.</li>
                            <li>Founder, Nexora Web Development Agency (Feb 2025 - Sep 2025): Delivered websites and digital solutions for startups and small businesses.</li>
                            <li>Marketing & Media Shoot Contributor, College Branding Initiatives (Feb 2025 - Sep 2025): Supported digital content and influencer-led promotional campaigns.</li>
                            <li>Sales Intern, JMES Nagpur (Apr 2025 - May 2025): Assisted fundraising outreach, investor communication, and market research.</li>
                            <li>Networking Specialist, Finance Club (Feb 2025 - Oct 2025): Managed outreach communications to improve event participation and collaboration.</li>
                            <li>Research Paper Presenter (March 2025): Presented findings with strong communication, presentation, and analytical clarity.</li>
                            <li>Short Film Production & Acting: Produced and acted in two short films published online with 6,000+ total views.</li>
                            <li>Languages: English, Hindi | Interests: Marketing, Entrepreneurship, Digital Media, Community Building, Branding.</li>
                        </ul>
                    </section>
                </div>

                {/* Footer on Resume Page */}
                <div className="bg-neutral-900 p-8 border-t border-neutral-800 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-600 hover:bg-neutral-400 text-white rounded-xl transition-all font-medium active:scale-95">
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Resume;
