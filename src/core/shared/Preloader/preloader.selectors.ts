import { AppState } from '../../store/store';

export const getStart = ({
  preloaderReducer: { startPreloader },
}: AppState): boolean => startPreloader;
