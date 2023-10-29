export interface BikeDTO {
  _id: string;
  model: string;
  imgUrl: string;
  color: string;
  location: string;
  rating?: number;
  availability?: boolean;
  reservedBy: string;
}
