import { AppState } from '../../store/store';

export const getStatus = ({
  showFormReducer: { formStatus },
}: AppState): string => formStatus;
