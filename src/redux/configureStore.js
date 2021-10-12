import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({

})

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
