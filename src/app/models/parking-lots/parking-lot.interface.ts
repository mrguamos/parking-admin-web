export interface IParkingLot {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  spots: number
  rates: {
    hourly: boolean
    daily: boolean
    weekly: boolean
    monthly: boolean
  }
}

export interface IParkingLotForm {
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  spots: number
  rates: {
    hourly: boolean
    daily: boolean
    weekly: boolean
    monthly: boolean
  }
}
