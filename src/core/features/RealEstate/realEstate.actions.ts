import { Category } from '../../shared/interfaces/categoryData';
import { Action } from '../../store/store';
import { RealEstateState } from './realEstate.state';

export enum RealEstateActions {
  GET_REAL_ESTATE = '[RealEstate] get real-estate',
  GET_REAL_ESTATE_SUCCESS = '[RealEstate] save real-estate to the store',
  GET_REAL_ESTATE_FAILED = '[RealEstate] get real-estate failed',
}

export enum CategoriesActions {
  GET_CATEGORIES = '[Categories] get categories ',
  GET_CATEGORIES_SUCCESS = '[Categories] save categories to the store',
  GET_CATEGORIES_FAILED = '[Categories] get categories failed',
  GET_CATEGORIES_BY_PAGE_NAME = '[Categories] get categories by page name',
  GET_CATEGORIES_BY_PAGE_NAME_SUCCESS = '[Categories] save categories by page name to the store',
  GET_CATEGORIES_BY_PAGE_NAME_FAILED = '[Categories] get categories by page name failed',
}

export class GetRealEstate extends Action {
  readonly type = RealEstateActions.GET_REAL_ESTATE;
}

export class GetRealEstateSuccess extends Action {
  readonly type = RealEstateActions.GET_REAL_ESTATE_SUCCESS;

  constructor(public payload: { realEstate: RealEstateState }) {
    super();
  }
}

export class GetRealEstateFailed extends Action {
  readonly type = RealEstateActions.GET_REAL_ESTATE_FAILED;
}

export class GetCategories extends Action {
  readonly type = CategoriesActions.GET_CATEGORIES;
}

export class GetCategoriesSuccess extends Action {
  readonly type = CategoriesActions.GET_CATEGORIES_SUCCESS;

  constructor(public payload: { categories: Category[] }) {
    super();
  }
}

export class GetCategoriesFailed extends Action {
  readonly type = CategoriesActions.GET_CATEGORIES_FAILED;
}

export class GetCategoriesByPageName extends Action {
  readonly type = CategoriesActions.GET_CATEGORIES_BY_PAGE_NAME;

  constructor(public payload: string) {
    super();
  }
}

export class GetCategoriesByPageNameSuccess extends Action {
  readonly type = CategoriesActions.GET_CATEGORIES_BY_PAGE_NAME_SUCCESS;

  constructor(public payload: { [x: string]: Category[] }) {
    super();
  }
}

export class GetCategoriesByPageNameFailed extends Action {
  readonly type = CategoriesActions.GET_CATEGORIES_BY_PAGE_NAME_FAILED;
}
