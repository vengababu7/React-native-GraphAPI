import { Reddit } from 'graphqlhub-schemas';
import { GraphQLSchema, graphql } from 'graphql';

import {
  MOVIE_FETCH_SUCCESS,
} from './Type';


const schema = new GraphQLSchema({
  query: Reddit.graphqlhub
});

const query =
 '{user(username: "kn0thing"){ username } subreddit(name: "movies"){ newListings(limit: 10){title ,comments{body, author{username,commentKarma}}}}}';

export const movieFetch = () => {
  return (dispatch) => {
    graphql(schema, query).then((result) => {
       dispatch({ type: MOVIE_FETCH_SUCCESS, payload: result.val() });
      console.log(result);
    });
  };
};
