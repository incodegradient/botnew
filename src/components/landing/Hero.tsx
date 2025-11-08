import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
            Create an AI Chatbot <br /> Trained on <span className="text-blue-500">Your Data</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400">
            Build a no-code, GPT-powered chatbot in minutes. Train it on your website content, documents, and knowledge base to provide instant, accurate support.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="#" className="px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Start for Free
            </a>
            <a href="#" className="px-8 py-3 font-semibold text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg">
              Book a Demo
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <img 
            src="https://i.ibb.co/67X3xfS/ai-chatbot-builder-preview.png"
            alt="AI Chatbot Builder Dashboard and Widget Preview" 
            className="rounded-lg shadow-2xl mx-auto max-w-4xl w-full border-4 border-slate-800"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
