import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">AI Chatbot</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              Start Free Trial
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-slate-800">
            <div className="flex items-center px-5 space-x-4">
               <a href="#" className="w-full px-4 py-2 text-sm font-medium text-center text-slate-300 hover:text-white transition-colors border border-slate-700 rounded-md">Sign In</a>
               <a href="#" className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
