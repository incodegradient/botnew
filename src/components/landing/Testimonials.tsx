import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "This chatbot builder is a game-changer. We automated 70% of our support queries in the first month. Incredible!",
    name: 'Sarah Johnson',
    title: 'CEO, TechNova',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote: "The ease of use is phenomenal. I had our first chatbot live in 15 minutes without any help. Our customers love it.",
    name: 'Michael Chen',
    title: 'Founder, QuickEats',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    quote: "The analytics dashboard provides so much insight. We've improved our product based on the questions users are asking.",
    name: 'Emily Rodriguez',
    title: 'Head of Product, InnovateCo',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by Teams Worldwide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <p className="text-slate-300 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
