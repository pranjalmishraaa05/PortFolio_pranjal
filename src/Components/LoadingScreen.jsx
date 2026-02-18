import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EncryptedText } from './ui/encrypted-text';

const LoadingScreen = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-8 overflow-hidden"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.2 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                    className="absolute inset-0 bg-neutral-500 blur-[100px] rounded-full"
                />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-[0.2em] text-white">
                        <EncryptedText
                            text="PRANJAL"
                            revealDelayMs={80}
                            flipDelayMs={50}
                        />
                    </h1>
                </motion.div>

                <div className="w-48 h-[1px] bg-neutral-900 mt-12 relative overflow-hidden">
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-neutral-600 text-[10px] uppercase tracking-[0.5em] mt-6 ml-2"
                >
                    Preparing Experience
                </motion.p>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
