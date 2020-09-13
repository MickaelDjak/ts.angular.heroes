import {AuthStateInterface} from '../../auth/types/authState.interface';
import {FeedStateInterface} from '../../global-feed/types/feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
