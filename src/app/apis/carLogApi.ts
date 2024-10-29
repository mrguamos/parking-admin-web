import { api } from './base/api';
import { ICarLog, ICarLogSearchParams } from '@/models/car-log/car-log.interface';
import { IPageModel, ISuccessResponse } from '@/models/api/response.interface';

export const carLogApi = {
  searchCarLogs: (params: ICarLogSearchParams) => {
    return api.get<ISuccessResponse<IPageModel<ICarLog>>>('/api/CarLog/SearchCarLogs', params);
  }
}; 