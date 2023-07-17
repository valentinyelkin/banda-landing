import { AxiosResponse } from 'axios';
import request from './request';
import api from '../shared/constants';

export class RealEstatesRequest {
  public GetRealEstates = (): Promise<AxiosResponse> => {
    const url = api.schema + api.backendHost + api.helpers.realEstate;

    return request.get(url);
  };
}

const instance = new RealEstatesRequest();

export default instance;
