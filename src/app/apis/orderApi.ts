import { api } from './base/api';
import { IOrder, ICreateOrderDto, IOrderSearchParams } from '@/models/order/order.interface';
import { IPageModel, ISuccessResponse } from '@/models/api/response.interface';

export const orderApi = {
  createOrder: (data: ICreateOrderDto) => {
    return api.post<ISuccessResponse<number>>('/api/Order/CreateOrder', data);
  },

  getOrders: (params: IOrderSearchParams) => {
    return api.post<ISuccessResponse<IPageModel<IOrder>>>('/api/Order/Page', params);
  },

  getOrder: (orderId: number) => {
    return api.get<ISuccessResponse<IOrder>>('/api/Order/GetOrder', { orderId });
  },

  cancelOrder: (orderId: number) => {
    return api.post<ISuccessResponse<boolean>>('/api/Order/CancelOrder', { orderId });
  }
}; 