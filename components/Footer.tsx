
import React from 'react';
import { LogoIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'عن موجود', href: '#' },
    { title: 'انضم كتاجر', href: '#' },
    { title: 'سياسة الخصوصية', href: '#' },
    { title: 'اتصل بنا', href: '#' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LogoIcon className="w-8 h-8 text-accent" />
              <div>
                <span className="font-bold text-2xl">موجود</span>
                <span className="block text-sm font-english text-gray-300">Mawjoud</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">سوقك المحلي في مدينتك، كل ما تحتاجه - موجود.</p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.title}><a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">الخدمات</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">المتاجر</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">المطاعم</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الصيدليات</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الحرفيين</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">تابعنا</h3>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook"><FacebookIcon className="w-6 h-6 text-gray-300 hover:text-white transition-transform hover:scale-110" /></a>
                <a href="#" aria-label="Instagram"><InstagramIcon className="w-6 h-6 text-gray-300 hover:text-white transition-transform hover:scale-110" /></a>
                <a href="#" aria-label="Twitter"><TwitterIcon className="w-6 h-6 text-gray-300 hover:text-white transition-transform hover:scale-110" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} موجود. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
