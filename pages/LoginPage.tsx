
import React, { useState } from 'react';
import { LogoIcon, GoogleIcon, FacebookIcon } from '../components/Icons';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('customer'); // 'customer' or 'merchant'

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted-bg py-24 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-card shadow-subtle">
        <div className="text-center mb-8">
          <LogoIcon className="w-12 h-12 text-primary mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-dark-text">
            {isLogin ? 'أهلاً بعودتك!' : 'انشاء حساب جديد'}
          </h2>
          <p className="text-muted-text mt-2">
            {isLogin ? 'سجل الدخول للمتابعة في موجود.' : 'انضم إلينا واكتشف كل ما في مدينتك.'}
          </p>
        </div>

        {/* Social Logins */}
        <div className="flex items-center justify-center gap-4 mb-6">
            <button aria-label="Sign in with Google" className="w-12 h-12 flex items-center justify-center bg-muted-bg rounded-full hover:bg-gray-200 transition-colors">
                <GoogleIcon className="w-7 h-7" />
            </button>
             <button aria-label="Sign in with Facebook" className="w-12 h-12 flex items-center justify-center bg-muted-bg rounded-full hover:bg-gray-200 transition-colors">
                <FacebookIcon className="w-7 h-7 text-[#1877F2]" />
            </button>
        </div>
        <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-4 text-sm text-muted-text">أو</span>
            <hr className="flex-grow border-gray-200" />
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-1">الاسم الكامل</label>
              <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-btn focus:ring-primary focus:border-primary" />
            </div>
          )}

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark-text mb-1">رقم الهاتف</label>
            <input type="tel" id="phone" placeholder="سيتم إرسال رمز تحقق" required className="w-full px-4 py-2 border border-gray-300 rounded-btn focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label htmlFor="password"  className="block text-sm font-medium text-dark-text mb-1">كلمة السر</label>
            <input type="password" id="password" required className="w-full px-4 py-2 border border-gray-300 rounded-btn focus:ring-primary focus:border-primary" />
          </div>

          {!isLogin && (
            <div>
              <span className="block text-sm font-medium text-dark-text mb-2">تسجيل كـ:</span>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center gap-2 p-3 border rounded-btn cursor-pointer has-[:checked]:bg-accent has-[:checked]:border-primary">
                    <input type="radio" name="userType" value="customer" checked={userType === 'customer'} onChange={(e) => setUserType(e.target.value)} className="accent-primary"/>
                    <span>زبون</span>
                </label>
                <label className="flex-1 flex items-center gap-2 p-3 border rounded-btn cursor-pointer has-[:checked]:bg-accent has-[:checked]:border-primary">
                    <input type="radio" name="userType" value="merchant" checked={userType === 'merchant'} onChange={(e) => setUserType(e.target.value)} className="accent-primary"/>
                    <span>تاجر</span>
                </label>
              </div>
            </div>
          )}

          {!isLogin && (
            <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                <label htmlFor="terms" className="mr-2 block text-sm text-muted-text">أوافق على <a href="#" className="font-medium text-primary hover:underline">الشروط والأحكام</a></label>
            </div>
          )}


          <div>
            <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-btn hover:bg-primary-dark transition-all duration-200">
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <button onClick={() => setIsLogin(!isLogin)} className="text-sm font-medium text-primary hover:underline">
            {isLogin ? 'ليس لديك حساب؟ سجل الآن' : 'لديك حساب بالفعل؟ سجل الدخول'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
