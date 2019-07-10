import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  articles: [],
  msg: '',
  remoteArticles: []
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  else if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, {
      msg: 'FOUND_BAD_WORD'
    });
  }

  else if (action.type === 'DATA_LOADED') {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  }

  return state;
};