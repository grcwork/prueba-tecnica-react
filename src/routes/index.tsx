import { useGetBooksQuery } from "../services/books";
import BooksTable from "../components/BookTable";
import { createColumnHelper } from "@tanstack/react-table";
import { BookTableInfo } from "../types";

import type { RootState } from "../app/store";
import { useSelector } from "react-redux";

const columnHelper = createColumnHelper<BookTableInfo>();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  }),
  columnHelper.accessor("name", {
    header: "Nombre",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("authors", {
    header: "Autor(es)",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("isbn", {
    header: "ISBN",
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  }),
];

function Index() {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const favorites = useSelector((state: RootState) => state.favorites.value);

  if (isLoading) return <h3>Cargando</h3>;
  if (isError) return <h3>Algo salió mal</h3>;

  return (
    <>
      {books != null ? (
        <div className="flex flex-col justify-center items-center">
          <BooksTable
            data={books.map((book) => ({
              id: parseInt(book.url.split("/").slice(-1)[0]),
              name: book.name,
              authors: book.authors.join(),
              isbn: book.isbn,
            }))}
          />
        </div>
      ) : null}
    </>
  );
}

export default Index;
