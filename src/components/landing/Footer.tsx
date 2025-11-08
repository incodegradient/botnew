import React from 'react';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' },
    { icon: <Github size={20} />, href: '#' },
  ];

  const footerLinks = [
    { title: 'Product', links: ['Features', 'Pricing', 'Updates', 'Demo'] },
    { title: 'Company', links: ['About Us', 'Careers', 'Contact Us', 'Blog'] },
    { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'] },
  ];

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">AI Chatbot</span>
            </div>
            <p className="text-slate-400 max-w-xs">
              The leading platform for building intelligent, data-driven chatbots.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-slate-400 hover:text-white transition-colors">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AI Support Chatbot Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
