import {ErrorReportInterface} from '../../../shered/types/errorReport.interface';
import {CurrentUserInterface} from '../../../shered/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface;
  validationErrors: ErrorReportInterface;
}
