import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../types";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anapioficeandfire.com/api/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "/books",
    }),
    getBook: builder.query<Book, number>({
      query: (id) => `/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = booksApi;
