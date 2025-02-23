import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('about.whoWeAre.title')}</h3>
            <p className="text-gray-600">{t('about.whoWeAre.description')}</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('about.mission.title')}</h3>
            <p className="text-gray-600">{t('about.mission.description')}</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">{t('about.vision.title')}</h3>
            <p className="text-gray-600">{t('about.vision.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;