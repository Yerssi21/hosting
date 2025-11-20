export interface CustomOrder {
  id: string;
  status: 'borrador' | 'en_revision' | 'aprobado' | 'en_produccion' | 'enviado';
  createdAt: string;
  items: Array<{
    productId: string;
    quantity: number;
    color?: string;
    size?: string;
  }>;
  total: number;
}