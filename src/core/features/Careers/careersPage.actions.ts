import { Action } from '../../store/store';
import { JobData } from '../../shared/interfaces/jobData';

export enum CareersActions {
  GET_CAREERS = '[CareersPage] get careers',
  GET_CAREERS_SUCCESS = '[CareersPage] get careers to the store',
  GET_CAREERS_FAILED = '[CareersPage] get careers failed',
}

export class GetCareers extends Action {
  readonly type = CareersActions.GET_CAREERS;
}

export class GetCareersSuccess extends Action {
  readonly type = CareersActions.GET_CAREERS_SUCCESS;

  constructor(public payload: { vacancies: JobData[] }) {
    super();
  }
}

export class GetCareersFailed extends Action {
  readonly type = CareersActions.GET_CAREERS_FAILED;
}
