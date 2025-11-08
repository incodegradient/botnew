import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Revolutionize Your Customer Support?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Join thousands of businesses already using AI to enhance their customer experience. Get started today, no credit card required.
          </p>
          <div className="mt-8">
            <a href="#" className="px-10 py-4 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Start Your Free Trial Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
