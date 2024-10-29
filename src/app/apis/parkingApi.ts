import { api } from './base/api';
import { IParkingBasicInfo, IParkChargeType } from '@/models/parking/parking.interface';
import { ISuccessResponse } from '@/models/api/response.interface';

export const parkingApi = {
  getParkingInfo: (parkId: number, longitude?: string, latitude?: string) => {
    return api.get<ISuccessResponse<IParkingBasicInfo>>('/api/ParkBasicInfo/DetailParkingInfo', {
      parkId,
      longitude,
      latitude
    });
  },

  getParkingCharges: (parkId: number) => {
    return api.get<ISuccessResponse<IParkChargeType[]>>('/api/ParkBasicInfo/GetParkingChargeList', {
      parkId
    });
  },

  getUsableSpaces: (parkId: number, startTime: string, endTime: string) => {
    return api.get<ISuccessResponse<number>>('/api/ParkBasicInfo/GetUsableSpaces', {
      parkId,
      startTime,
      endTime
    });
  }
}; 