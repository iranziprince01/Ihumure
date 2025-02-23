import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('contact.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">{t('contact.subtitle')}</h3>
            <p className="text-gray-600 mb-8">{t('contact.description')}</p>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {t('contact.info.email')}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> {t('contact.info.phone')}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {t('contact.info.location')}
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">{t('contact.form.name')}</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">{t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-900 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-blue-800 transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;