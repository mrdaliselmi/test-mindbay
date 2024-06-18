import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import booksReducer from './api/books/booksSlice';
import { booksApiSlice } from './api/books/booksApiSlice';

const store = configureStore({
  reducer: {
    [booksApiSlice.reducerPath]: booksApiSlice.reducer,
    books: booksReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      booksApiSlice.middleware,
      thunk,
    ]),
  devTools: true,
});

export default store;
