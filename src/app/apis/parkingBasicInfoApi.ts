import { api } from './base/api';
import { 
  IParkingBasicInformation, 
  IParkChargeType, 
  IParkingSearchParams 
} from '@/models/parking/parking-basic-info.interface';
import { IPageModel, ISuccessResponse } from '@/models/api/response.interface';

export const parkingBasicInfoApi = {
  add: (data: IParkingBasicInformation) => {
    return api.post<ISuccessResponse<boolean>>('/api/ParkBasicInfo/Add', data);
  },

  update: (data: IParkingBasicInformation) => {
    return api.post<ISuccessResponse<boolean>>('/api/ParkBasicInfo/Update', data);
  },

  delete: (parkId: number) => {
    return api.post<ISuccessResponse<boolean>>('/api/ParkBasicInfo/Delete', { parkId });
  },

  getMapList: (params: IParkingSearchParams) => {
    return api.get<ISuccessResponse<IParkingBasicInformation[]>>('/api/ParkBasicInfo/MapList', params);
  },

  getPageList: (params: { pageSize?: number; pageIndex?: number }) => {
    return api.get<ISuccessResponse<IPageModel<IParkingBasicInformation>>>('/api/ParkBasicInfo/PageList', params);
  },

  getDetailParkingInfo: (parkId: number, longitude?: string, latitude?: string) => {
    return api.get<ISuccessResponse<IParkingBasicInformation>>('/api/ParkBasicInfo/DetailParkingInfo', {
      parkId,
      longitude,
      latitude
    });
  },

  getParkingWithLocation: (longitude?: string, latitude?: string) => {
    return api.get<ISuccessResponse<IParkingBasicInformation[]>>('/api/ParkBasicInfo/GetParkingWithLocation', {
      longitude,
      latitude
    });
  },

  getAllCountryAndState: (country?: string) => {
    return api.get<ISuccessResponse<any>>('/api/ParkBasicInfo/GetAllCountryAndState', { country });
  },

  getUsableSpaces: (parkId: number, startTime: string, endTime: string) => {
    return api.get<ISuccessResponse<number>>('/api/ParkBasicInfo/GetUsableSpaces', {
      parkId,
      startTime,
      endTime
    });
  },

  getParkingChargeList: (parkId: number) => {
    return api.get<ISuccessResponse<IParkChargeType[]>>('/api/ParkBasicInfo/GetParkingChargeList', { parkId });
  }
}; 