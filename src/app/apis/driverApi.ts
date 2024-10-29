import { api } from './base/api';
import { 
  ILicensePlateDto, 
  IValidatePassCodeDto, 
  IUpdateDriverDto,
  ILoginDto,
  IDriverSearchParams
} from '@/models/driver/driver.interface';
import { ISuccessResponse } from '@/models/api/response.interface';
import { IPageModel } from '@/models/api/response.interface';

export const driverApi = {
  logout: () => {
    return api.post<ISuccessResponse<void>>('/api/Driver/Logout');
  },

  sendValidateCode: (data: ILoginDto) => {
    return api.post<ISuccessResponse<boolean>>('/api/Driver/SendValidateCode', data);
  },

  validatePassCode: (data: IValidatePassCodeDto) => {
    return api.post<ISuccessResponse<any>>('/api/Driver/ValidatePassCode', data);
  },

  getAllLicensePlate: () => {
    return api.get<ISuccessResponse<ILicensePlateDto[]>>('/api/Driver/GetAllLicensePlate');
  },

  deleteLicensePlate: (licensePlateId: number) => {
    return api.post<ISuccessResponse<boolean>>('/api/Driver/DeleteLicensePlate', undefined, { licensePlateId });
  },

  updateLicensePlate: (data: ILicensePlateDto) => {
    return api.post<ISuccessResponse<boolean>>('/api/Driver/UpdateLicensePlate', data);
  },

  addLicensePlate: (data: ILicensePlateDto) => {
    return api.post<ISuccessResponse<boolean>>('/api/Driver/AddLicensePlate', data);
  },

  updateDriver: (data: IUpdateDriverDto) => {
    return api.post<ISuccessResponse<boolean>>('/api/Driver/UpdateDriver', data);
  },

  getCurrentDriver: () => {
    return api.get<ISuccessResponse<IUpdateDriverDto>>('/api/Driver/GetCurrentDriver');
  },

  getAllDrivers: (params: IDriverSearchParams) => {
    return api.get<ISuccessResponse<IPageModel<IUpdateDriverDto>>>('/api/Driver/GetAllDrivers', params);
  },

  deleteDriver: (id: number) => {
    return api.post<ISuccessResponse<boolean>>('/api/Driver/DeleteDriver', { id });
  }
}; 