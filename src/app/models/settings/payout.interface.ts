export interface IPayoutMethod {
  id: string;
  type: string;
  details: string;
  isDefault: boolean;
}

export interface INewPayoutMethod {
  type: 'bank' | 'paypal';
  accountDetails: string;
} 