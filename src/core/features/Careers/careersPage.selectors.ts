import { AppState } from '../../store/store';

export const getAllVacancies = ({
  careerPageReducer: { vacancies },
}: AppState) => vacancies;
