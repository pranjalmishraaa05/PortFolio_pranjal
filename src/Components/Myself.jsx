import React from 'react'
import { Vortex } from './ui/vortex'

const Myself = () => {
    return (
        <section id="about" className="w-full bg-black text-white relative overflow-hidden">
            <div className="h-[40rem] md:h-[50rem] w-full rounded-md overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={0}
                    hue={0}
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-20">

                        <div className="flex items-center gap-6 md:w-1/3">
                            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                About Me
                            </h2>
                            <div className="hidden md:block">
                                <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10H98M98 10L88 1M98 10L88 19" stroke="white" strokeWidth="1.5" />
                                </svg>
                            </div>
                        </div>

                        <div className="md:w-2/3 space-y-8 text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                            <p>
                                I am an <span className="text-white font-semibold">entrepreneurship student</span> with practical exposure to startups, digital outreach, and campaign coordination. I enjoy turning ideas into real initiatives and helping teams build stronger visibility through structured execution.
                            </p>

                            <p>
                                My journey includes co-leading automated retail work at Elite Vendz and building ventures such as Nexora and Lehzaaa. Across these roles, I have worked on client communication, branding, partnership coordination, and growth-focused execution while staying consistent with delivery.
                            </p>

                            <p>
                                I am seeking a social media internship where I can contribute creativity, consistency, and growth-driven content strategies while continuing to learn through real campaign execution.
                            </p>
                        </div>

                    </div>
                </Vortex>
            </div>
        </section>
    )
}

export default Myself
