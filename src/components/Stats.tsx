import React from 'react';
import { Brain, Heart, Users, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Brain className="w-8 h-8 text-blue-900" />,
      title: t('stats.crisis.title'),
      description: t('stats.crisis.description')
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-900" />,
      title: t('stats.depression.title'),
      description: t('stats.depression.description')
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-900" />,
      title: t('stats.impact.title'),
      description: t('stats.impact.description')
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: t('stats.community.title'),
      description: t('stats.community.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t('stats.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-center">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;