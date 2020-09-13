import {AuthorFeedInterface} from './authorFeed.interface';

export interface FeedInterface {
  author: AuthorFeedInterface;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: Array<string>;
  title: string;
  updatedAt: string;
}
