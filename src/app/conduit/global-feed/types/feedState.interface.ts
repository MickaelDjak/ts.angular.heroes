import {GetFeedResponseInterface} from './getFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  errors: Array<string> | null;
  data: GetFeedResponseInterface;
}
