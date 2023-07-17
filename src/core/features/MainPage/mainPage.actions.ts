import { Action } from '../../store/store';

export enum FormActions {
  SEND_FORM_DATA = '[MainPage] send form data',
  SEND_SUCCESS = '[MainPage] send form data success',
  SEND_FAILED = '[MainPage] send form data failed',
  CLEAR_STATUS = '[MainPage] clear status',
}

export class SendFormData extends Action {
  readonly type = FormActions.SEND_FORM_DATA;

  constructor(public payload: FormData | Record<string, string>) {
    super();
  }
}

export class SendFormDataSuccess extends Action {
  readonly type = FormActions.SEND_SUCCESS;

  constructor(public successStatus: string) {
    super();
  }
}

export class SendFormDataFailed extends Action {
  readonly type = FormActions.SEND_FAILED;

  constructor(public failureStatus: string) {
    super();
  }
}

export class ClearFormDataStatus extends Action {
  readonly type = FormActions.CLEAR_STATUS;
}
