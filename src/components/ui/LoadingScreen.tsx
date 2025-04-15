// components/ui/LoadingScreen.tsx
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="text-accent">Andreia</span>
          <span className="text-white">Regina</span>
        </h1>
        <p className="text-secondary text-center mt-2">Especialista em Penteados</p>
      </motion.div>
      
      <div className="flex items-center justify-center space-x-2">
        <motion.div
          animate={{ 
            y: ["0%", "-100%", "0%"],
            backgroundColor: ["#a855f7", "#d946ef", "#a855f7"]
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1] 
          }}
          className="w-4 h-4 rounded-full bg-secondary"
        />
        <motion.div
          animate={{ 
            y: ["0%", "-100%", "0%"],
            backgroundColor: ["#d946ef", "#e879f9", "#d946ef"]
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
            times: [0, 0.5, 1] 
          }}
          className="w-4 h-4 rounded-full bg-accent"
        />
        <motion.div
          animate={{ 
            y: ["0%", "-100%", "0%"],
            backgroundColor: ["#e879f9", "#a855f7", "#e879f9"]
          }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
            times: [0, 0.5, 1] 
          }}
          className="w-4 h-4 rounded-full bg-accent"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;