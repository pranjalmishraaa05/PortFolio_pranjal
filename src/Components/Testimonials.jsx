import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

const reviews = [
    {
        id: 1,
        text: "Co-leading the development of automated vending machine solutions for beverage retail in high-footfall locations, with active contribution to business strategy, partnership development, and operational planning.",
        name: "Elite Vendz",
        role: "Co-Founder | Jan 2026 - Present",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        text: "Built and ran a web development agency delivering websites and digital solutions for startups and small businesses, handling client communication, project coordination, and online visibility support.",
        name: "Nexora",
        role: "Founder | Feb 2025 - Sep 2025",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        text: "Led the development of a fashion technology platform connecting emerging designers with budget-conscious consumers, with focus on branding, creator partnerships, and sustainable-fashion positioning.",
        name: "Lehzaaa",
        role: "Founder & CEO | Present",
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
]

const Testimonials = () => {
    return (
        <section className="w-full bg-black text-white relative mt-12 sm:mt-20 mb-16 sm:mb-20 overflow-hidden">
            <BackgroundBeamsWithCollision className="w-full !h-auto min-h-screen flex-col justify-start py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-black !overflow-visible">
                <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-20 pb-20">

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center space-y-4"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                            Experience Highlights
                        </h2>
                        <div className="flex items-center justify-center gap-4 text-neutral-400">
                            <span className="hidden md:block text-2xl">~</span>
                            <p className="text-base sm:text-lg md:text-xl font-light italic">Real startup milestones from my CV</p>
                            <span className="hidden md:block text-2xl">~</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8 mt-8">

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="self-end flex items-end gap-3 sm:gap-4 w-full sm:max-w-2xl justify-end"
                        >
                            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl rounded-br-none p-4 sm:p-6 text-base sm:text-xl text-neutral-200 shadow-lg shadow-neutral-900/10">
                                <p>Here are key milestones from my entrepreneurial journey.</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-neutral-600 overflow-hidden border-2 border-black shrink-0">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pranjal-Mishra" alt="Me" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        <div className="flex flex-col gap-8">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    className="self-start flex items-end gap-3 sm:gap-4 w-full sm:max-w-3xl"
                                >
                                    <div className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden border-2 border-black shrink-0 hidden md:block">
                                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl rounded-bl-none p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 hover:bg-neutral-900 transition-colors duration-300">
                                        <p className="text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
                                            {review.text}
                                        </p>
                                        <div className="border-t border-neutral-800 pt-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden md:hidden">
                                                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white">{review.name}</h4>
                                                <p className="text-xs sm:text-sm text-neutral-500">{review.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                </div>
            </BackgroundBeamsWithCollision>
        </section>
    )
}

export default Testimonials
