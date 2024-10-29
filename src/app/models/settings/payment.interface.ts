export interface IPaymentMethod {
  id: string;
  type: string;
  lastFour: string;
  expiryDate: string;
  isDefault: boolean;
}

export interface INewPaymentMethod {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
} 