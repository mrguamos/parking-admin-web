import { api } from './base/api';
import { IPayment, ICreatePaymentDto, ICreatePaymentResponse } from '@/models/payment/payment.interface';
import { ISuccessResponse } from '@/models/api/response.interface';

export const paymentApi = {
  createPayment: (data: ICreatePaymentDto) => {
    return api.post<ISuccessResponse<ICreatePaymentResponse>>('/api/Payment/GetPaymentUrl', data);
  },

  getPaymentInfo: (paymentId: number) => {
    return api.get<ISuccessResponse<IPayment>>('/api/Payment/GetPaymentInfo', { paymentId });
  },

  cancelPayment: (paymentId: number) => {
    return api.post<ISuccessResponse<boolean>>('/api/Payment/CancelPayment', { paymentId });
  },

  refundOrder: (orderId: number) => {
    return api.get<ISuccessResponse<boolean>>('/api/Payment/Refund', { orderId });
  }
}; 