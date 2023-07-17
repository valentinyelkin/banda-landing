import { IRealEstate } from './realEstateData';

export interface Category {
  id: number;
  name: string;
  pageName: string;
  realEstates: IRealEstate[];
}
