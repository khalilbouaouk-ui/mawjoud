
import type { Category, Merchant, Product } from './types';
import {
  CarrotIcon,
  BurgerIcon,
  SpiceIcon,
  MeatIcon,
  CleaningIcon,
  ServicesIcon
} from './components/Icons';

export const NAV_LINKS = [
  { name: 'الرئيسية', href: '#/' },
  { name: 'المتاجر', href: '#/stores' },
  { name: 'المطاعم', href: '#/restaurants' },
  { name: 'الخدمات', href: '#/services' },
  { name: 'تواصل', href: '#/contact' },
];

export const CATEGORIES: Category[] = [
  { id: 'cat1', name: 'خضر وفواكه', icon: CarrotIcon },
  { id: 'cat2', name: 'أكل سريع', icon: BurgerIcon },
  { id: 'cat3', name: 'توابل', icon: SpiceIcon },
  { id: 'cat4', name: 'لحوم', icon: MeatIcon },
  { id: 'cat5', name: 'منظفات', icon: CleaningIcon },
  { id: 'cat6', name: 'خدمات', icon: ServicesIcon },
];

export const MERCHANTS: Merchant[] = [
  {
    id: 'm1',
    name: 'سوق الحي للخضر',
    nameEn: 'Neighborhood Greens',
    description: 'أجود الخضر الطازجة يوميًا',
    coverImage: 'https://picsum.photos/seed/market/400/300',
    rating: 4.5,
    delivers: true,
  },
  {
    id: 'm2',
    name: 'بيتزا روما',
    nameEn: 'Roma Pizza',
    description: 'البيتزا الإيطالية على أصولها',
    coverImage: 'https://picsum.photos/seed/pizza/400/300',
    rating: 5,
    delivers: true,
  },
  {
    id: 'm3',
    name: 'ملحمة أبو علي',
    nameEn: 'Abu Ali Butchery',
    description: 'لحوم بلدية طازجة ومختارة',
    coverImage: 'https://picsum.photos/seed/meat/400/300',
    rating: 4,
    delivers: false,
  },
  {
    id: 'm4',
    name: 'نظافة بلس',
    nameEn: 'Clean Plus',
    description: 'كل ما يلزم منزلك من منظفات',
    coverImage: 'https://picsum.photos/seed/clean/400/300',
    rating: 4.5,
    delivers: true,
  },
];

export const PRODUCTS: Product[] = [
    { id: 'p1', name: 'طماطم', price: '120 دج/كغ', image: 'https://picsum.photos/seed/tomato/100/100'},
    { id: 'p2', name: 'بطاطا', price: '80 دج/كغ', image: 'https://picsum.photos/seed/potato/100/100'},
    { id: 'p3', name: 'بصل', price: '70 دج/كغ', image: 'https://picsum.photos/seed/onion/100/100'},
    { id: 'p4', name: 'خيار', price: '100 دج/كغ', image: 'https://picsum.photos/seed/cucumber/100/100'},
    { id: 'p5', name: 'فلفل', price: '150 دج/كغ', image: 'https://picsum.photos/seed/pepper/100/100'},
    { id: 'p6', name: 'جزر', price: '90 دج/كغ', image: 'https://picsum.photos/seed/carrot/100/100'},
]
