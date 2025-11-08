import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = {
  monthly: [
    { name: 'Free', price: '$0', features: ['1 Chatbot', '50 Messages/mo', '10 Documents', 'Basic Analytics'], cta: 'Start for Free' },
    { name: 'Basic', price: '$29', features: ['3 Chatbots', '1,000 Messages/mo', '100 Documents', 'Standard Analytics'], cta: 'Choose Basic' },
    { name: 'Pro', price: '$99', features: ['10 Chatbots', '5,000 Messages/mo', 'Unlimited Documents', 'Advanced Analytics'], cta: 'Choose Pro', popular: true },
    { name: 'Business', price: '$299', features: ['Unlimited Chatbots', '20,000 Messages/mo', 'API Access', 'Dedicated Support'], cta: 'Contact Sales' },
  ],
  yearly: [
    { name: 'Free', price: '$0', features: ['1 Chatbot', '50 Messages/mo', '10 Documents', 'Basic Analytics'], cta: 'Start for Free' },
    { name: 'Basic', price: '$24', features: ['3 Chatbots', '1,000 Messages/mo', '100 Documents', 'Standard Analytics'], cta: 'Choose Basic' },
    { name: 'Pro', price: '$83', features: ['10 Chatbots', '5,000 Messages/mo', 'Unlimited Documents', 'Advanced Analytics'], cta: 'Choose Pro', popular: true },
    { name: 'Business', price: '$249', features: ['Unlimited Chatbots', '20,000 Messages/mo', 'API Access', 'Dedicated Support'], cta: 'Contact Sales' },
  ],
};

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Find the Right Plan for Your Business</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Start for free and scale as you grow. All plans include our powerful AI chatbot builder.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} />
            <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className={`font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
            Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans[billingCycle].map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-slate-800/50 p-8 rounded-lg shadow-lg flex flex-col ${plan.popular ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">Most Popular</div>}
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400">/month</span>
              </p>
              <ul className="mt-6 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 block w-full py-3 px-6 text-center font-semibold rounded-lg transition-colors ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
