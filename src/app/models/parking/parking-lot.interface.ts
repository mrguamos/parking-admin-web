import type { UploadFile } from 'element-plus';

export interface IParkingLotForm {
  parkingType: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  dockStart: string;
  dockEnd: string;
  operatingRate: string;
  gracePeriod: string;
  gracePeriodUnit: string;
  reservedDocks: string[];
  rates: {
    hourly: boolean;
    daily: boolean;
    weekly: boolean;
    monthly: boolean;
    hourlyRate: string;
    dailyRate: string;
    weeklyRate: string;
    monthlyRate: string;
  };
  images: UploadFile[];
  propertyOverview: string;
  buildingHighlights: string;
  amenities: string;
  termsOfService: string;
  status: number;
  availableSpaces: number;
} 