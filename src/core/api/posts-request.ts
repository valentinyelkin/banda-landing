import { AxiosResponse } from 'axios';
import request from './request';
import api from '../shared/constants';
import { BlogPostsCategories } from '../lists/postsTabsTitles';

export class PostsRequest {
  public GetPosts = (): Promise<AxiosResponse> => {
    const url = api.schema + api.backendHost + api.helpers.blog;

    return request.get(url);
  };

  public GetLastPosts = (numberOfPosts: number): Promise<AxiosResponse> => {
    const url = `${
      api.schema + api.backendHost + api.helpers.blog
    }?take=${numberOfPosts}&all=false`;

    return request.get(url);
  };

  public GetMorePosts = (
    numberOfPosts: number,
    numberOfPostsToSkip: number,
  ): Promise<AxiosResponse> => {
    const url = `${
      api.schema + api.backendHost + api.helpers.blog
    }?skip=${numberOfPostsToSkip}&take=${numberOfPosts}&all=false`;

    return request.get(url);
  };

  public GetMorePostsByCategory = (
    numberOfPosts: number,
    numberOfPostsToSkip: number,
    category: BlogPostsCategories,
  ): Promise<AxiosResponse> => {
    const url = `${
      api.schema + api.backendHost + api.helpers.blog
    }/category/${category}?skip=${numberOfPostsToSkip}&take=${numberOfPosts}&all=false`;

    return request.get(url);
  };

  public GetTotalPostsCount = (): Promise<AxiosResponse> => {
    const url = `${api.schema + api.backendHost + api.helpers.blog}/count`;

    return request.get(url);
  };

  public GetTotalPostsCountByCategories = (): Promise<AxiosResponse> => {
    const url = `${
      api.schema + api.backendHost + api.helpers.blog
    }/count-by-categories`;

    return request.get(url);
  };
}

const instance = new PostsRequest();

export default instance;
