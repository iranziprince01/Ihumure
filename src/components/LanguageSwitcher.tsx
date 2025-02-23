import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'rw', name: 'Kinyarwanda' }
];

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-sm transition-all ${
          isScrolled 
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">
          {languages.find(lang => lang.code === i18n.language)?.code.toUpperCase() || 'EN'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[140px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                i18n.language === language.code 
                  ? 'text-[#002e6d] font-medium bg-gray-50' 
                  : 'text-gray-700'
              }`}
            >
              {language.name}
              {i18n.language === language.code && (
                <span className="text-[#002e6d] text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;