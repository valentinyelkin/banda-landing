export type Element = {
  y: number;
  ref: HTMLDivElement | HTMLSpanElement;
  parentRef?: HTMLElement | null;
  styles: string;
};

export interface ElementsState {
  elementsRefs: Element[];
}
