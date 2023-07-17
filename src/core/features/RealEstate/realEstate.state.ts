import { RealEstateData } from '../../shared/interfaces/realEstateData';
import { Category } from '../../shared/interfaces/categoryData';

export interface RealEstateState {
  realEstate: RealEstateData[];
}

export interface CategoriesState {
  categoriesByPageName: { [x: string]: Category[] };
  categories: Category[];
}
