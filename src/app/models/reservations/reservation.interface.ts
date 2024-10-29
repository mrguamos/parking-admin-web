export interface IReservation {
  licensePlate: string;
  title: string;
  duration: string;
  date: string;
  total: number;
  status?: 'active' | 'completed' | 'cancelled';
}

export interface IReservationFilters {
  status?: string;
  dateRange?: [Date, Date];
  searchTerm?: string;
}

export interface ICreateReservation {
  licensePlate: string;
  parkingLotId: string;
  startDate: string;
  duration: string;
} 