// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Category {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Merchant {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  coverImage: string;
  rating: number;
  delivers: boolean;
}

export interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
}