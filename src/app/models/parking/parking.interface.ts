export interface IParkingBasicInfo {
  parkId: number;
  parkNumber: string;
  parkName: string;
  usableSpace: number;
  totalSpaces: number;
  address: string;
  status: number;
  priceList: IParkChargeType[];
  businessHoursList: IParkingBusinessHours[];
  clientId: number;
  merchantId: number;
  pricePerFine: boolean;
  serviceFee: number;
  tax: number;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  latitude?: string;
  longitude?: string;
  facilityId?: string;
  distance: number;
}

export interface IParkChargeType {
  priceType: number;
  price: number;
  priceTypeName: string;
}

export interface IParkingBusinessHours {
  open: boolean;
  weekType: number;
  times?: IParkingBusinessTimes[];
}

export interface IParkingBusinessTimes {
  beginTime: string;
  endTime: string;
} 