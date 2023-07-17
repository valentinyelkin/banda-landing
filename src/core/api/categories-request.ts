import { AxiosResponse } from 'axios';
import api from '../shared/constants';
import request from './request';

export class CategoriesRequest {
  public GetCategories = (): Promise<AxiosResponse> => {
    const url = api.schema + api.backendHost + api.helpers.categories;

    return request.get(url);
  };

  public GetCategoriesByPageName = (
    pageName: string,
  ): Promise<AxiosResponse> => {
    const url =
      api.schema +
      api.backendHost +
      api.helpers.categories +
      api.queries.pageName +
      pageName;

    return request.get(url);
  };
}

const instance = new CategoriesRequest();

export default instance;
