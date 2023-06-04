import React from "react";
import BookTable from "../components/BookTable";
import { withRouter } from "storybook-addon-react-router-v6";
import books from "./books.json";

import { Provider } from "react-redux";
import { store } from "../app/store";

const Store = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default {
  title: "BookTable",
  component: BookTable,
  decorators: [withRouter],
};

export const Table = () => (
  <Store>
    <BookTable
      data={books.map((book) => ({
        id: parseInt(book.url.split("/").slice(-1)[0]),
        name: book.name,
        authors: book.authors.join(),
        isbn: book.isbn,
      }))}
    />
  </Store>
);
