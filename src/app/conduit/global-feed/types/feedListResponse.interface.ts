import {FeedInterface} from './feed.interface';

export interface FeedListResponseInterface {
  articles: Array<FeedInterface>;
  articlesCount: number;
}
