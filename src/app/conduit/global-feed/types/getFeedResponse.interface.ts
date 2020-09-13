import {FeedInterface} from './feed.interface';

export interface GetFeedResponseInterface {
  articles: Array<FeedInterface>;
  articlesCount: number;
}
