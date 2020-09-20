import {FeedListResponseInterface} from './feedListResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  errors: Array<string> | null;
  data: FeedListResponseInterface;
}
