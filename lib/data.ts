export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  discount?: number
  description?: string
  specifications?: Record<string, string>
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export interface Review {
  id: string
  productId: string
  author: string
  rating: number
  date: string
  comment: string
  verified: boolean
}

export const categories: Category[] = [
  { id: '1', name: 'Phones', icon: '/icons/Category-CellPhone.png', color: '#E0F7FA' },      
  { id: '2', name: 'Computers', icon: '/icons/Category-Computer.png', color: '#FFF176' },   
  { id: '3', name: 'SmartWatch', icon: '/icons/Category-SmartWatch.png', color: '#DCEDC8' }, 
  { id: '4', name: 'Camera', icon: '/icons/Category-Camera.png', color: '#BBDEFB' },      
  { id: '5', name: 'HeadPhones', icon: '/icons/Category-HeadPhone.png', color: '#FFE0B2' },  
  { id: '6', name: 'Gaming', icon: '/icons/Category-Gamepad.png', color: '#E1BEE7' },    
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Gucci duffle bag',
    price: 960,
    originalPrice: 1160,
    image: '/images/bag.png',
    category: 'Fashion',
    rating: 4.5,
    reviews: 88,
    inStock: true,
    discount: 35,
  },
  {
    id: '2',
    name: 'RGB liquid CPU Cooler',
    price: 1960,
    image: '/images/box.png',
    category: 'Computers',
    rating: 4.5,
    reviews: 75,
    inStock: true,
  },
  {
    id: '3',
    name: 'GP11 Shooter USB Gamepad',
    price: 550,
    image: '/images/remot.png',
    category: 'Gaming',
    rating: 4.5,
    reviews: 55,
    inStock: true,
  },
  {
    id: '4',
    name: 'Quilted Satin Jacket',
    price: 750,
    image: '/images/jaket.png',
    category: 'Fashion',
    rating: 4.5,
    reviews: 55,
    inStock: true,
  },
  {
    id: '5',
    name: 'ASUS FHD Gaming Laptop',
    price: 960,
    originalPrice: 1160,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
    category: 'Computers',
    rating: 5,
    reviews: 65,
    inStock: true,
    discount: 30,
  },
  {
    id: '6',
    name: 'IPS LCD Gaming Monitor',
    price: 1160,
    originalPrice: 1360,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
    category: 'Computers',
    rating: 5,
    reviews: 99,
    inStock: true,
  },
  {
    id: '7',
    name: 'HAVIT HV-G92 Gamepad',
    price: 560,
    originalPrice: 660,
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=400&fit=crop',
    category: 'Gaming',
    rating: 5,
    reviews: 55,
    inStock: true,
  },
  {
    id: '8',
    name: 'AK-900 Wired Keyboard',
    price: 200,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    category: 'Computers',
    rating: 4,
    reviews: 75,
    inStock: true,
  },
  {
    id: '9',
    name: 'Apple MacBook Air Early(2025)',
    price: 849,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'Computers',
    rating: 4.5,
    reviews: 150,
    inStock: true,
    description: 'Apple MacBook Air (2025) Apple M3 13.6" Midnight Laptop Price',
    specifications: {
      'Display': '13.6-inch Liquid Retina display with True Tone',
      'Processor': 'Apple M3 chip with 8-core CPU and 8-core GPU',
      'Memory': '8GB unified memory',
      'Storage': '256GB SSD',
      'Battery': 'Up to 18 hours of battery life',
      'Operating System': 'macOS Sonoma',
      'Other Features': 'Fanless design for silent operation, Touch ID, Magic Keyboard, and up to 18 hours of battery life.',
    },
  },
  {
    id: '10',
    name: 'iPhone 17 Pro Max',
    price: 799,
    image: '/images/lap.png',
    category: 'Phones',
    rating: 5,
    reviews: 200,
    inStock: true,
  },
  {
    id: '11',
    name: 'HP Laptop',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
    category: 'Computers',
    rating: 4.5,
    reviews: 120,
    inStock: true,
  },
  {
    id: '12',
    name: 'Wireless Headphones',
    price: 250,
    originalPrice: 350,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'HeadPhones',
    rating: 4.5,
    reviews: 90,
    inStock: true,
  },
]

export const reviews: Review[] = [
  {
    id: '1',
    productId: '9',
    author: 'Jennifer Jr.',
    rating: 5,
    date: '6.10.1025',
    comment: 'Best Quality Product!',
    verified: true,
  },
  {
    id: '2',
    productId: '9',
    author: 'Anna Lina.',
    rating: 5,
    date: '10.8.1025',
    comment: 'Worth It!',
    verified: true,
  },
]
