import type { UploadFile } from 'element-plus';

export interface IParkingLotForm {
  parkId?: number;
  parkingType: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  dockStart: string;
  dockEnd: string;
  operatingRate: string;
  gracePeriod: {
    hours: string;
    minutes: string;
  };
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
  images: any[];
  propertyOverview: string;
  buildingHighlights: string;
  amenities: string;
  termsOfService: string;
  status: number;
  availableSpaces: number;
} 