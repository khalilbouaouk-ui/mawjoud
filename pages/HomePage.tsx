
import React from 'react';
import { Link } from 'react-router-dom';
import type { Category, Merchant } from '../types';
import { CATEGORIES, MERCHANTS } from '../constants';
import { SearchIcon, StarIcon, CheckIcon } from '../components/Icons';

const CategoryChip: React.FC<{ category: Category }> = ({ category }) => (
  <a href="#" className="group flex flex-col items-center gap-2 text-center w-24">
    <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-subtle flex items-center justify-center transition-all duration-200 group-hover:bg-accent group-hover:border-primary">
      <category.icon className="w-10 h-10 text-primary transition-colors group-hover:text-primary-dark" />
    </div>
    <span className="font-semibold text-sm text-muted-text group-hover:text-dark-text">{category.name}</span>
  </a>
);

const MerchantCard: React.FC<{ merchant: Merchant }> = ({ merchant }) => (
  <Link to={`/merchant/${merchant.id}`} className="group block bg-white rounded-card shadow-subtle overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
    <div className="relative">
      <img src={merchant.coverImage} alt={merchant.name} className="w-full h-40 object-cover" />
      {merchant.delivers && (
        <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">يوفر توصيل</span>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-dark-text">{merchant.name}</h3>
      <p className="font-english text-sm text-muted-text">{merchant.nameEn}</p>
      <p className="text-sm text-muted-text mt-1 h-10">{merchant.description}</p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span className="font-bold text-dark-text">{merchant.rating}</span>
        </div>
        <button className="bg-primary text-white font-bold text-sm px-4 py-2 rounded-btn transition-transform duration-200 group-hover:scale-105">اطلب الآن</button>
      </div>
    </div>
  </Link>
);


const HowItWorks: React.FC = () => {
    const steps = [
        { title: 'ابحث عن حاجتك', description: 'ابحث عن أي متجر، مطعم أو خدمة قريبة منك.', icon: '🔍' },
        { title: 'اختر واطلب', description: 'تصفح المنتجات والخدمات وأضفها للسلة بسهولة.', icon: '🛒' },
        { title: 'استلم طلبك', description: 'استلم طلبك من المتجر أو اطلب توصيله لباب بيتك.', icon: '🛵' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto max-w-6xl px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">كيف يخدمك <span className="text-primary">موجود</span>؟</h2>
                <p className="text-muted-text max-w-2xl mx-auto mb-12">ثلاث خطوات بسيطة تفصلك عن كل ما تحتاجه في مدينتك.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-muted-bg rounded-card">
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-text">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white" 
        style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">كل ما تحتاجه في مدينتك،<br/> <span className="text-accent">موجود</span>.</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input 
                type="search" 
                placeholder="وش تحتاج؟ دور عليه هنا..."
                className="w-full text-lg md:text-xl text-dark-text py-4 pr-14 pl-6 rounded-btn border-2 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-shadow shadow-lg"
              />
              <button className="absolute inset-y-0 right-0 flex items-center justify-center px-5 bg-primary text-white rounded-l-btn">
                <SearchIcon className="w-6 h-6"/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted-bg">
        <div className="container mx-auto max-w-6xl px-6">
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-12">
                {CATEGORIES.map(cat => <CategoryChip key={cat.id} category={cat} />)}
            </div>
        </div>
      </section>

      {/* Nearby Merchants Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-10">التجار القريبين منك</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MERCHANTS.map(merchant => <MerchantCard key={merchant.id} merchant={merchant} />)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />
    </>
  );
};

export default HomePage;
