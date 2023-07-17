import { Action } from '../../store/store';
import { Article } from './error.state';

export enum ErrorActions {
  GET_LATEST_ARTICLES = '[Error] get articles',
  SAVE_ARTICLES = '[Error] save articles',
  SET_ARTICLES_ERROR = '[Error] error on get articles',
}

export class GetLatestArticles extends Action {
  readonly type = ErrorActions.GET_LATEST_ARTICLES;

  constructor(public numberOfArticles: number) {
    super();
  }
}

export class SaveArticles extends Action {
  readonly type = ErrorActions.SAVE_ARTICLES;

  constructor(public articles: Article[]) {
    super();
  }
}

export class SetArticlesError extends Action {
  readonly type = ErrorActions.SET_ARTICLES_ERROR;

  constructor(public error: string) {
    super();
  }
}
