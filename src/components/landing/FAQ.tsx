import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How does the chatbot training work?',
    answer: 'You can train your chatbot by either providing a link to your website, and we will crawl it automatically, or by uploading documents like PDFs, DOCX, or text files. The AI will learn from this content to answer user questions.',
  },
  {
    question: 'Can I customize the chatbot\'s appearance?',
    answer: 'Yes, absolutely! You can customize the chatbot widget\'s color, position on the screen, greeting message, and even the chatbot\'s personality and tone to match your brand.',
  },
  {
    question: 'What languages are supported?',
    answer: 'Our AI chatbots support over 95 languages out of the box. The chatbot will automatically detect the user\'s language and respond accordingly, making it perfect for global businesses.',
  },
  {
    question: 'Is it possible to integrate with other tools?',
    answer: 'Our Business plan includes API access, which allows you to integrate the chatbot with your existing CRM, helpdesk software, and other business tools for a seamless workflow.',
  },
  {
    question: 'What happens if I exceed my plan\'s message limit?',
    answer: 'If you exceed your monthly message limit, we offer flexible options. You can either upgrade to a higher plan or purchase message packs. We will notify you before you reach your limit.',
  },
];

const FAQItem: React.FC<{ faq: { question: string, answer: string }, index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="w-full flex justify-between items-center py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
