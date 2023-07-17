import { FullPageScrollState } from '../shared/FullPageScroll/fullPageScroll.state';
import { PreloaderState } from '../shared/Preloader/preloader.state';
import { ShowFormState } from '../features/MainPage/mainPage.state';
import { BlogPageState } from '../features/BlogPage/blogPage.state';
import { ElementsState } from '../utils/AnimationOnScroll/animationOnScroll.state';
import { ArticlesState } from '../features/Error/error.state';
import { CareersPageState } from '../features/Careers/careersPage.state';
import {
  CategoriesState,
  RealEstateState,
} from '../features/RealEstate/realEstate.state';

export interface AppState {
  fullPageScrollReducer: FullPageScrollState;
  preloaderReducer: PreloaderState;
  showFormReducer: ShowFormState;
  blogPageReducer: BlogPageState;
  animationOnScrollReducer: ElementsState;
  articlesReducer: ArticlesState;
  careerPageReducer: CareersPageState;
  realEstateReducer: RealEstateState;
  categoriesReducer: CategoriesState;
}

export class Action {
  readonly type: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): Record<string, any> {
    return { ...this };
  }
}

export interface ConnectedProps {
  dispatch?: (act: Action) => void;
}
