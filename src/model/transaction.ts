export type Transaction = {
  id: string;
  title: string;
  description?: string;
  date: number;
  amount: number;
  payerId: string;
  [key: string]: any;
};
