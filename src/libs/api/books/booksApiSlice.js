import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../query.ts"
export const booksApiSlice = createApi({
    reducerPath: "booksApi",
    baseQuery,
    endpoints: (builder) => ({
        getOverview: builder.query({
            query: () => ({
                url: '/full-overview.json',
                method: 'GET',
                credentials: 'include'
            })
        }),
    }),
});

export const {useGetOverviewQuery} = booksApiSlice;