import { AxiosResponse } from 'axios';
import request from './request';
import api from '../shared/constants';

export class FormRequest {
  public SendData = (data): Promise<AxiosResponse> => {
    const url = api.schema + api.backendHost + api.helpers.form;

    return request.post(url, data);
  };
}

const instance = new FormRequest();

export default instance;
