import { RealEstateData } from './realEstateData';
import { Category } from './categoryData';

export interface SelectsProps {
  categoriesData: Category[];
}

export interface RealEstateItemProps {
  realEstate: RealEstateData;
}
