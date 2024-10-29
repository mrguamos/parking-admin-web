export interface IParkingBasicInformation {
  parkId?: number;
  parkNumber: string;
  parkName: string;
  usableSpace?: number;
  totalSpaces: number;
  address: string;
  status: number;
  priceList: IParkChargeType[];
  businessHoursList: IParkingBusinessHours[];
  clientId: number;
  merchantId: number;
  pricePerFine: boolean;
  priceFineType?: number;
  priceFineDuration?: string;
  fineOverTime?: string;
  fineOverTimeType?: number;
  priceFinePrice?: string;
  refundAllow: boolean;
  refundTime?: string;
  refundTimeType?: number;
  cancelFee: number;
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
  locationDetails?: string;
  phoneNumber?: string;
  contact?: string;
  manager?: string;
  email?: string;
  images?: IParkImage[];
  parkDescription?: IParkDescription;
  planPictures?: IParkImage[];
}

export interface IParkChargeType {
  priceType: number;
  price: number;
  priceTypeName?: string;
}

export interface IParkingBusinessHours {
  open: boolean;
  weekType: number;
  times: IParkingBusinessTimes[];
}

export interface IParkingBusinessTimes {
  beginTime: string;
  endTime: string;
}

export interface IParkImage {
  imageId: number;
  url: string;
  parkId: number;
  imageType: number;
}

export interface IParkDescription {
  propertyOverview?: string;
  buildingHighlights?: string;
  amenities?: string;
}

export interface IParkingSearchParams {
  pageSize?: number;
  pageIndex?: number;
  longitude?: string;
  latitude?: string;
  searchText?: string;
  orderBy?: string;
  isAsc?: boolean;
} 