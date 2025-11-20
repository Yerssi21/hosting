export interface ProductSummary {
  id: string;
  name: string;
  basePrice: number;
  mockupUrl: string;
  category: 'camiseta' | 'sudadera' | 'taza' | 'otro';
}