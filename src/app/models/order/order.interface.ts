export interface IOrder {
  orderId: number;
  clientId: number;
  merchantId: number;
  parkId: number;
  orderNo: string;
  parkNumber: number;
  total: number;
  subTotal: number;
  transactionFee: number;
  serviceFee: number;
  tax: number;
  startTime: string;
  endTime: string;
  status: number;
  plateNumbers: string;
  phoneNumber: string;
  parkType: number;
  userEmail: string;
  parkName: string;
  createDate: string;
  paymentType: string;
}

export interface ICreateOrderDto {
  parkId: number;
  startTime: string;
  endTime: string;
  plateNumbers: string[];
  parkType: number;
  parkNumber: number;
  parkPrice: number;
  phoneNumber?: string;
}

export interface IOrderSearchParams {
  pageSize?: number;
  pageIndex?: number;
  searchText?: string;
  orderBy?: string;
  isAsc?: boolean;
  orderNumber?: string;
  parkId?: number;
  status?: number;
  startTime?: string;
  endTime?: string;
  phoneNumber?: string;
}

// Add this interface for the mock orders
export interface IMockOrder {
  orderId: number;
  orderNo: string;
  parkId: number;
  parkName: string;
  plateNumbers: string;
  startTime: string;
  endTime: string;
  total: number;
  status: number;
  phoneNumber: string;
} 