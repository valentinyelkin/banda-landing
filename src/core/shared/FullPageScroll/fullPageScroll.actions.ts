export const changeSection = (
  action: number,
): { type: string; payload: number } => {
  return { type: 'CHANGE_SECTION', payload: action };
};

export const updateScrollings = (
  action: number[],
): { type: string; payload: number[] } => {
  return { type: 'UPDATE_SCROLLINGS', payload: action };
};

export const updateActiveAnimation = (
  action: boolean,
): { type: string; payload: boolean } => {
  return { type: 'UPDATE_ACTIVE_ANIMATION', payload: action };
};

export const updateCanScroll = (
  action: boolean,
): { type: string; payload: boolean } => {
  return { type: 'UPDATE_CAN_SCROLL', payload: action };
};

export const updateLastSection = (
  action: boolean,
): { type: string; payload: boolean } => {
  return { type: 'UPDATE_LAST_SECTION', payload: action };
};
