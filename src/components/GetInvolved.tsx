import React from 'react';
import { Heart, Users, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GetInvolved = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const ways = [
    {
      icon: <Heart className="w-12 h-12 text-blue-900" />,
      title: t('getInvolved.donate.title'),
      description: t('getInvolved.donate.description'),
      action: t('getInvolved.donate.action'),
      onClick: () => navigate('/donate')
    },
    {
      icon: <Users className="w-12 h-12 text-blue-900" />,
      title: t('getInvolved.volunteer.title'),
      description: t('getInvolved.volunteer.description'),
      action: t('getInvolved.volunteer.action'),
      onClick: () => navigate('/volunteer')
    },
    {
      icon: <HandHeart className="w-12 h-12 text-blue-900" />,
      title: t('getInvolved.partner.title'),
      description: t('getInvolved.partner.description'),
      action: t('getInvolved.partner.action'),
      onClick: () => window.location.href = '#contact'
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('getInvolved.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {way.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {way.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {way.description}
              </p>
              <button 
                onClick={way.onClick}
                className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors transform hover:scale-105"
              >
                {way.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;