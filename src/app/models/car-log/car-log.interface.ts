export interface ICarLog {
  carLogId: number;
  plateNumber: string;
  inGate: string;
  inType: number;
  inTime: string;
  outGate: string;
  outType: number;
  outTime: string;
  inPlateImage: string;
  outPlateImage: string;
  parkId: number;
  parkName: string;
}

export interface ICarLogSearchParams {
  pageSize?: number;
  pageIndex?: number;
  searchText?: string;
  orderBy?: string;
  isAsc?: boolean;
} 