import { gql } from '@apollo/client';

export interface GetAnilistMediaList {
  data: any;
  vars: {
    search: string;
  };
}

export const GET_ANILIST_MEDIA_LIST = gql`
  query GetAnilistMediaList($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          romaji
        }
      }
    }
  }
`;
