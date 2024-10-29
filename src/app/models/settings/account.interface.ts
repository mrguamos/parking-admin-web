export interface IUserProfile {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export interface IPasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
} 