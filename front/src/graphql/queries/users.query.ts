import { gql } from '@apollo/client';
import { User } from '../../types';

export const USERS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

export interface PostsData {
  posts: User[];
}
