import BookTable from "../components/BookTable";

import books from "./books.json";

export default {
  title: "BookTable",
  component: BookTable,
};

export const Table = () => (
  <BookTable
    data={books.map((book) => ({
      id: parseInt(book.url.split("/").slice(-1)[0]),
      name: book.name,
      authors: book.authors.join(),
      isbn: book.isbn,
    }))}
  />
);
