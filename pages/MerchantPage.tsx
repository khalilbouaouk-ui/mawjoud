
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MERCHANTS, PRODUCTS } from '../constants';
import type { Product } from '../types';
import { StarIcon, WhatsAppIcon, CheckIcon } from '../components/Icons';

type CartItem = {
    product: Product;
    quantity: number;
}

const ProductCard: React.FC<{ product: Product, onAddToCart: (product: Product) => void, isInCart: boolean }> = ({ product, onAddToCart, isInCart }) => {
    return (
        <div className="flex items-center gap-4 p-3 bg-white rounded-card border border-gray-100">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
            <div className="flex-grow">
                <h4 className="font-bold text-dark-text">{product.name}</h4>
                <p className="text-sm text-primary font-semibold">{product.price}</p>
            </div>
            <button 
                onClick={() => onAddToCart(product)}
                disabled={isInCart}
                className={`px-4 py-2 rounded-btn text-sm font-bold transition-all duration-200 ${
                    isInCart 
                    ? 'bg-gray-200 text-muted-text cursor-not-allowed' 
                    : 'bg-accent text-primary-dark hover:bg-primary hover:text-white'
                }`}
            >
                {isInCart ? <div className="flex items-center gap-1"> <CheckIcon className="w-4 h-4" /> تمت الإضافة </div> : 'أضف للسلة'}
            </button>
        </div>
    );
};


const MerchantPage: React.FC = () => {
    const { id } = useParams();
    const merchant = MERCHANTS.find(m => m.id === id) || MERCHANTS[0];

    const [activeTab, setActiveTab] = useState('menu');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [deliveryOption, setDeliveryOption] = useState('delivery');

    const handleAddToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevCart.map(item => item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prevCart, { product, quantity: 1 }];
        });
    };

    const cartTotal = cart.reduce((total, item) => {
        const price = parseFloat(item.product.price.replace(/[^\d.-]/g, ''));
        return total + (price * item.quantity);
    }, 0);

    const isProductInCart = (productId: string) => cart.some(item => item.product.id === productId);

    return (
        <div className="bg-muted-bg min-h-screen">
            <div className="container mx-auto max-w-6xl px-6 pt-24 pb-12">
                {/* Cover */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6" style={{ backgroundImage: `url('https://picsum.photos/seed/${merchant.id}/1200/400')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 right-6 text-white">
                        <h1 className="text-4xl font-bold">{merchant.name}</h1>
                        <p className="font-english text-lg">{merchant.nameEn}</p>
                        <div className="flex items-center gap-1 mt-2">
                            <StarIcon className="w-5 h-5 text-yellow-400" />
                            <span className="font-bold">{merchant.rating}</span>
                        </div>
                    </div>
                     <button className="absolute top-6 left-6 flex items-center gap-2 bg-green-500 text-white font-bold px-4 py-2 rounded-btn shadow-lg hover:bg-green-600 transition-all hover:scale-105">
                        <WhatsAppIcon className="w-5 h-5" />
                        اتصل عبر واتساب
                    </button>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left/Main Column */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-card shadow-subtle">
                        {/* Tabs */}
                        <div className="flex border-b border-gray-200 mb-6">
                            <button onClick={() => setActiveTab('menu')} className={`px-4 py-2 font-semibold ${activeTab === 'menu' ? 'text-primary border-b-2 border-primary' : 'text-muted-text'}`}>المنيو</button>
                            <button onClick={() => setActiveTab('info')} className={`px-4 py-2 font-semibold ${activeTab === 'info' ? 'text-primary border-b-2 border-primary' : 'text-muted-text'}`}>معلومات</button>
                            <button onClick={() => setActiveTab('reviews')} className={`px-4 py-2 font-semibold ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-muted-text'}`}>التقييمات</button>
                        </div>
                        
                        {/* Tab Content */}
                        <div>
                            {activeTab === 'menu' && (
                                <div className="space-y-4">
                                    {PRODUCTS.map(product => (
                                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} isInCart={isProductInCart(product.id)} />
                                    ))}
                                </div>
                            )}
                            {activeTab === 'info' && (
                                <div>
                                    <h3 className="text-xl font-bold mb-4">معلومات عن المتجر</h3>
                                    <p className="text-muted-text">{merchant.description}</p>
                                    <p className="mt-4"><strong>العنوان:</strong> شارع المثال، حي النور، الجزائر العاصمة</p>
                                    <p><strong>الهاتف:</strong> 0550 123 456</p>
                                </div>
                            )}
                            {activeTab === 'reviews' && (
                                <div>
                                    <h3 className="text-xl font-bold mb-4">تقييمات الزبائن</h3>
                                    <p className="text-muted-text">لا توجد تقييمات حاليا.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right/Sidebar Column */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-card shadow-subtle sticky top-24">
                        <h3 className="text-xl font-bold border-b pb-3 mb-4">ملخص الفاتورة</h3>
                        <div className="space-y-2 mb-4 max-h-60 overflow-y-auto pr-2">
                            {cart.length > 0 ? cart.map(item => (
                                <div key={item.product.id} className="flex justify-between items-center text-sm">
                                    <span className="text-dark-text">{item.product.name} <span className="text-muted-text text-xs">(x{item.quantity})</span></span>
                                    <span className="font-semibold">{item.product.price}</span>
                                </div>
                            )) : <p className="text-muted-text text-center py-4">سلّتك فارغة.</p>}
                        </div>

                        {cart.length > 0 && (
                             <div className="border-t pt-4">
                                <div className="flex justify-between font-bold text-lg mb-4">
                                    <span>الإجمالي</span>
                                    <span>{cartTotal.toFixed(2)} دج</span>
                                </div>
                                
                                <div className="space-y-3 mb-4">
                                    <label className="flex items-center gap-2 p-3 border rounded-btn cursor-pointer has-[:checked]:bg-accent has-[:checked]:border-primary">
                                        <input type="radio" name="delivery" value="delivery" checked={deliveryOption === 'delivery'} onChange={(e) => setDeliveryOption(e.target.value)} className="accent-primary"/>
                                        <span>توصيل</span>
                                    </label>
                                    <label className="flex items-center gap-2 p-3 border rounded-btn cursor-pointer has-[:checked]:bg-accent has-[:checked]:border-primary">
                                        <input type="radio" name="delivery" value="pickup" checked={deliveryOption === 'pickup'} onChange={(e) => setDeliveryOption(e.target.value)} className="accent-primary"/>
                                        <span>استلام ذاتي</span>
                                    </label>
                                </div>

                                {deliveryOption === 'delivery' && (
                                     <input type="text" placeholder="أدخل عنوان التوصيل" className="w-full p-2 border rounded-btn mb-4 focus:ring-2 focus:ring-primary/50 outline-none" />
                                )}

                                <button className="w-full bg-primary text-white font-bold py-3 rounded-btn shadow-md hover:bg-primary-dark transition-all hover:scale-[0.98]">تأكيد الطلب</button>
                             </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantPage;
