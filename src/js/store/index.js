import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';

export const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware, thunk)
);