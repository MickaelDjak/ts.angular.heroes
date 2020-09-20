import {TagTypeInterface} from '../../shered/types/tagType.interface';

export interface TagStateInterface {
  isLoading: boolean;
  isLoaded: boolean;
  errors: Array<string> | null;
  data: Array<TagTypeInterface>;
}
