import React from 'react';
import { Code, Languages, FileText, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    title: 'No-Code Chatbot Builder',
    description: 'Design, build, and launch your AI chatbot without writing a single line of code using our intuitive visual builder.',
  },
  {
    icon: <Languages className="w-10 h-10 text-blue-500" />,
    title: 'Multi-language AI Support',
    description: 'Engage a global audience. Our chatbots can understand and respond in over 95 languages automatically.',
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-500" />,
    title: 'Website + Document Training',
    description: 'Train your chatbot by simply providing a website URL or uploading documents like PDFs, DOCX, and TXT files.',
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-blue-500" />,
    title: 'Real-time Chat Analytics',
    description: 'Gain insights from user interactions with a powerful analytics dashboard. Track conversations, leads, and satisfaction.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything You Need to Automate Support</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Powerful features to create a seamless customer experience and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-slate-800/50 p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-slate-700 p-4 rounded-full mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
