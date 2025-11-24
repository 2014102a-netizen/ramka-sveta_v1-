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
  description: string;
  image: string;
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
