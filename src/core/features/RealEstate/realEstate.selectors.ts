import { AppState } from '../../store/store';

export const getRealEstates = ({
  realEstateReducer: { realEstate },
}: AppState) => realEstate;

export const getCategories = ({
  categoriesReducer: { categories },
}: AppState) => categories;

export const getByPageNameCategories = (
  { categoriesReducer: { categoriesByPageName } }: AppState,
  pageName: string,
) => categoriesByPageName[pageName] ?? [];
