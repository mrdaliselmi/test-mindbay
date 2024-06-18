import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.nytimes.com/svc/books/v3/lists/",
  prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${process.env.BACK_API_KEY}`);
    return headers;
  },
});
