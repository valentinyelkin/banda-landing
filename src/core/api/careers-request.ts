import { AxiosResponse } from 'axios';
import request from './request';
import api from '../shared/constants';

export class CareersRequest {
  public GetCareers = (): Promise<AxiosResponse> => {
    const url = api.schema + api.backendHost + api.helpers.careers;

    return request.get(url);
  };
}

const instance = new CareersRequest();

export default instance;
