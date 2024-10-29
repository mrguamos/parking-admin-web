export interface ISuccessResponse<T> {
  status: string;
  message: string;
  code: number;
  data: T;
}

export interface IPageModel<T> {
  totalPage: number;
  pageIndex: number;
  pageSize: number;
  total: number;
  data: T[];
} 