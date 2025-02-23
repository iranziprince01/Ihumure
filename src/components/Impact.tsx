import React from 'react';
import { useTranslation } from 'react-i18next';

const Impact = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "20K+", label: t('impact.stats.individuals') },
    { number: "30K+", label: t('impact.stats.refugees') },
    { number: "50+", label: t('impact.stats.clinics') },
    { number: "5K+", label: t('impact.stats.workers') }
  ];

  const testimonials = [
    {
      quote: t('impact.testimonials.1.quote'),
      author: t('impact.testimonials.1.author')
    },
    {
      quote: t('impact.testimonials.2.quote'),
      author: t('impact.testimonials.2.author')
    },
    {
      quote: t('impact.testimonials.3.quote'),
      author: t('impact.testimonials.3.author')
    }
  ];

  return (
    <section id="impact" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">{t('impact.title')}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <p className="text-white italic mb-4">{testimonial.quote}</p>
              <p className="text-gray-300 text-sm">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;