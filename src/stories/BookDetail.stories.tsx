import BookDetail from "../components/BookDetail";

import books from "./books.json";

export default {
  title: "BookDetail",
  component: BookDetail,
};

export const AGameofThrones = () => <BookDetail book={books[0]} />;
