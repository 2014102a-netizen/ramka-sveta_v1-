export interface Story {
  id: number;
  name: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  quote: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  archetype: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  style: 'traditional' | 'text' | 'custom' | 'kids';
  tags: string[];
}

export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    emoji: string;
  }[];
}

export interface Recommendation {
  productId: string;
  reason: string;
}