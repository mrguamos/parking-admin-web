export interface IPayment {
  paymentId: number;
  paymentNo: string;
  paymentType: number;
  paymentStatus: number;
}

export interface ICreatePaymentDto {
  orderId: number;
  currency?: string;
  phoneNumber?: string;
  isDisclaimer: boolean;
}

export interface ICreatePaymentResponse {
  paymentId: number;
  paymentUrl: string;
} 