import React from 'react'
import { Linkedin, Instagram, Code, Database, Globe, Box, Terminal, Palette, FileCode, Bot, MousePointer2, Rocket } from 'lucide-react'

const BentoGrid = () => {
    return (
        <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">


                <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 h-[420px] sm:h-[500px] md:h-auto">
                    <img
                        src="/projects/second.png"
                        alt="Pranjal Mishra"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>


                <div className="md:col-span-2 flex flex-col gap-6">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">


                        <div className="flex flex-col gap-6">

                            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-center gap-2">
                                <span className="text-neutral-500 text-sm">Currently focused on</span>
                                <h3 className="text-xl font-semibold">Social Media Internship & Startup Growth</h3>
                            </div>


                            <div className="grid grid-cols-4 gap-3 sm:gap-4">
                                <a href="http://nexorabuildweb.in/" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <Globe className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/pranjal-mishra-346618323/" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://youtu.be/56NOmu_z-4A?si=xOFDS3MiQHDBbwsz" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="https://youtu.be/UFdTJofPW5E?si=DBKoEaCFK40sWGTd" target="_blank" rel="noopener noreferrer" className="aspect-square bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-colors group">
                                    <Code className="w-6 h-6 text-neutral-400 group-hover:text-orange-500 transition-colors" />
                                </a>
                            </div>


                            <div className="relative group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 h-[160px] sm:h-[180px]">
                                <img
                                    src="/projects/thrid.png"
                                    alt="Pranjal Mishra Life"
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-white/70 text-[10px] uppercase tracking-widest font-bold">Based in India</span>
                                </div>
                            </div>
                        </div>


                        <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center gap-6 relative overflow-hidden">

                            <div className="absolute top-4 right-4 text-yellow-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold uppercase leading-tight">
                                Want to work <br /> together?
                            </h3>
                            <p className="text-neutral-400 text-sm">My CV is one click away</p>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-neutral-800 hover:bg-neutral-900 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
                            >
                                View Resume
                                <span className="text-lg">📄</span>
                            </a>
                        </div>

                    </div>


                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 sm:p-8">
                        <div className="mb-6">
                            <span className="text-neutral-500 text-sm">Skills and strengths from my CV</span>
                        </div>


                        <div className="flex flex-wrap gap-5 sm:gap-8 items-center justify-center md:justify-start opacity-80">


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500 transition-colors">
                                    <Globe className="text-blue-400 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Digital Outreach</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-yellow-900/20 rounded-xl flex items-center justify-center border border-yellow-500/30 group-hover:border-yellow-500 transition-colors">
                                    <FileCode className="text-yellow-400 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Campaign Support</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-orange-900/20 rounded-xl flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500 transition-colors">
                                    <Code className="text-orange-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">SEO</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-600/30 group-hover:border-blue-600 transition-colors">
                                    <Palette className="text-blue-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Community Building</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400 transition-colors">
                                    <Terminal className="text-blue-400 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Basic Python</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 group-hover:border-white transition-colors">
                                    <Database className="text-white w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">MS Excel</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:border-blue-500 transition-colors">
                                    <Box className="text-blue-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Web Dev</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center border border-green-500/30 group-hover:border-green-500 transition-colors">
                                    <Bot className="text-green-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Marketing Research</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700 group-hover:border-white transition-colors">
                                    <MousePointer2 className="text-white w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Networking</span>
                            </div>


                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-12 h-12 bg-purple-900/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 transition-colors">
                                    <Rocket className="text-purple-500 w-6 h-6" />
                                </div>
                                <span className="text-xs text-neutral-500">Brand Strategy</span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default BentoGrid
