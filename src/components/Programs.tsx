import React from 'react';
import { Brain, Heart, Users, HandHeart, GraduationCap, LineChart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: <Brain className="w-12 h-12 text-blue-900" />,
      title: t('programs.awareness.title'),
      description: t('programs.awareness.description')
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-900" />,
      title: t('programs.access.title'),
      description: t('programs.access.description')
    },
    {
      icon: <HandHeart className="w-12 h-12 text-blue-900" />,
      title: t('programs.trauma.title'),
      description: t('programs.trauma.description')
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-900" />,
      title: t('programs.youth.title'),
      description: t('programs.youth.description')
    },
    {
      icon: <LineChart className="w-12 h-12 text-blue-900" />,
      title: t('programs.research.title'),
      description: t('programs.research.description')
    },
    {
      icon: <Users className="w-12 h-12 text-blue-900" />,
      title: t('programs.support.title'),
      description: t('programs.support.description')
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('programs.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-900 mb-4">
                {program.title}
              </h3>
              <p className="text-gray-600 text-center">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;