import React from "react";
import { render, screen } from "@testing-library/react";
import BookTable from "../src/components/BookTable";
import * as books from "../src/stories/books.json";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../src/app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BookTable
        data={books.map((book) => ({
          id: parseInt(book.url.split("/").slice(-1)[0]),
          name: book.name,
          authors: book.authors.join(),
          isbn: book.isbn,
        }))}
      />
    ),
  },
]);

const AllTheProviders = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

describe("BookTable", () => {
  it("Should render a table", async () => {
    render(<AllTheProviders />);

    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("Should render 10 rows for 'George R. R. Martin'", async () => {
    render(<AllTheProviders />);

    expect((await screen.findAllByText(/George R. R. Martin/)).length).toBe(10);
  });
});
