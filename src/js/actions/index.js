import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

export const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
};

export const foundBadWord = (payload) => {
  return { type: FOUND_BAD_WORD, payload };
}

export const getData = () => {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
      dispatch({ type: 'DATA_LOADED', payload: json });
    })
  }
}