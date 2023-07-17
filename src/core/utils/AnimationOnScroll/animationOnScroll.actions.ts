import { Action } from '../../store/store';
import { Element } from './animationOnScroll.state';

export enum ElementsActions {
  ADD_ELEMENT = '[AnimationOnScroll] add element',
  REMOVE_ELEMENTS = '[AnimationOnScroll removed all elements',
}

export class AddElement extends Action {
  readonly type = ElementsActions.ADD_ELEMENT;

  constructor(public payload: Element) {
    super();
  }
}

export class RemoveElements extends Action {
  readonly type = ElementsActions.REMOVE_ELEMENTS;
}
