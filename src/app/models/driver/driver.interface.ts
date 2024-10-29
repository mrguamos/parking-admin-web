export interface ILicensePlateDto {

  licensePlateId: number;

  number: string;

  state: string;

  stateCode: string;

  createBy: number;

}



export interface IValidatePassCodeDto {

  account: string;

  code: string;

  mode: number;

}



export interface IUpdateDriverDto {

  id?: number;

  email: string;

  phoneNumber: string;

  firstName: string;

  lastName: string;

  licensePlates?: string[];

}



export interface IDriverResponse extends IUpdateDriverDto {

  // Add any additional fields that might come from the API

}



export interface ILoginDto {

  account?: string;

  mode: number;

}



export interface IDriverSearchParams {

  pageSize?: number;

  pageIndex?: number;

  searchText?: string;

} 
