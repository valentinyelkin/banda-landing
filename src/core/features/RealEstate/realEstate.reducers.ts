import { CategoriesState, RealEstateState } from './realEstate.state';
import { CategoriesActions, RealEstateActions } from './realEstate.actions';

const initialState: RealEstateState = {
  realEstate: [],
};
const initialStateCategories: CategoriesState = {
  categoriesByPageName: {},
  categories: [],
};

export const realEstateReducer = (
  state = initialState,
  action,
): RealEstateState => {
  switch (action.type) {
    case RealEstateActions.GET_REAL_ESTATE_SUCCESS:
      return {
        ...state,
        realEstate: [...action.payload],
      };
    case RealEstateActions.GET_REAL_ESTATE_FAILED:
      return {
        ...state,
        realEstate: [],
      };
    default:
      return state;
  }
};

export const categoriesReducer = (
  state = initialStateCategories,
  action,
): CategoriesState => {
  switch (action.type) {
    case CategoriesActions.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...action.payload],
      };
    case CategoriesActions.GET_CATEGORIES_FAILED:
      return {
        ...state,
        categories: [],
      };
    case CategoriesActions.GET_CATEGORIES_BY_PAGE_NAME_SUCCESS:
      return {
        ...state,
        categoriesByPageName: {
          ...state.categoriesByPageName,
          ...action.payload,
        },
      };
    case CategoriesActions.GET_CATEGORIES_BY_PAGE_NAME_FAILED:
      return {
        ...state,
        categoriesByPageName: {},
      };
    default:
      return state;
  }
};
