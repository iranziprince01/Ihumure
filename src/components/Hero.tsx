import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Phone, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20" style={{ background: '#002e6d' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[60rem] h-[60rem] -top-40 -left-40 animate-spin-slow">
          <div className="absolute inset-0 rounded-full border-[1px] border-white/5" />
          <div className="absolute inset-[4rem] rounded-full border-[1px] border-white/5" />
          <div className="absolute inset-[8rem] rounded-full border-[1px] border-white/5" />
          <div className="absolute inset-[12rem] rounded-full border-[1px] border-white/5" />
        </div>
        <div className="absolute w-[50rem] h-[50rem] -bottom-20 -right-20 animate-spin-slow-reverse">
          <div className="absolute inset-0 rounded-full border-[1px] border-white/5" />
          <div className="absolute inset-[4rem] rounded-full border-[1px] border-white/5" />
          <div className="absolute inset-[8rem] rounded-full border-[1px] border-white/5" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fadeIn">
              <Globe className="w-4 h-4 text-[#ffe600]" />
              <span className="text-[#ffe600] text-sm font-medium">{t('hero.subtitle')}</span>
            </div>

            {/* Headings */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fadeIn">
                Healing
                <span className="text-[#ffe600]"> Minds</span>,
                <br />
                <span className="animate-slideUp inline-block delay-300">
                  Building Hope
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-300 max-w-xl animate-fadeIn delay-500">
                {t('hero.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-10">
              {[
                { number: '20K+', label: 'Lives Touched' },
                { number: '15+', label: 'Countries' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left animate-fadeIn" style={{ animationDelay: `${700 + index * 100}ms` }}>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-fadeIn delay-1000">
              <button
                onClick={() => navigate('/donate')}
                className="group relative px-8 py-4 bg-[#ffe600] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#fff000] transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="relative flex items-center justify-center text-[#002e6d] font-semibold">
                  <Heart className="w-5 h-5 mr-2" />
                  {t('hero.cta.support')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 border border-white/20 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center text-white font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  {t('hero.cta.join')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            </div>

            {/* Emergency Contact */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mt-6 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fadeIn delay-1000 hover:bg-white/10 transition-all duration-300">
              <Phone className="w-5 h-5 text-[#ffe600]" />
              <div>
                <p className="text-white text-sm font-medium">24/7 Crisis Support</p>
                <p className="text-[#ffe600] font-medium">+250 782 485 566</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden animate-fadeIn delay-500">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mental Health Support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002e6d]/50 via-[#002e6d]/30 to-transparent" />
              
              {/* Floating Cards */}
              <div className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffe600]/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#ffe600]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Support Available</p>
                    <p className="text-xs text-[#ffe600]">In Multiple Languages</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffe600]/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#ffe600]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Community Care</p>
                    <p className="text-xs text-[#ffe600]">Healing Together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;