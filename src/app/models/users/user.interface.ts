export interface IUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'Admin' | 'User' | 'Operator';
  status: 'active' | 'inactive';
  lastLogin?: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'Admin' | 'User' | 'Operator';
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  phone?: string;
  role?: 'Admin' | 'User' | 'Operator';
  status?: 'active' | 'inactive';
}

export interface IUserFilters {
  role?: string;
  status?: string;
  searchTerm?: string;
} 