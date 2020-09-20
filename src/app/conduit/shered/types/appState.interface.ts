import {AuthStateInterface} from '../../auth/types/authState.interface';
import {FeedStateInterface} from '../../global-feed/types/feedState.interface';
import {TagStateInterface} from '../../global-feed/types/tagState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tag: TagStateInterface;
}
