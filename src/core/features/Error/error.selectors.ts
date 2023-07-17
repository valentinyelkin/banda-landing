import { AppState } from '../../store/store';
import { Article } from './error.state';

export const getLatestArticles = ({
  articlesReducer: { articles },
}: AppState): Article[] => articles;

export const getError = ({ articlesReducer: { error } }: AppState): string =>
  error;
