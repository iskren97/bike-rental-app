export interface UserDTO {
  _id: string;
  username: string;
  password: string;
  role?: string;
  reservedBikes?: string[];
}
