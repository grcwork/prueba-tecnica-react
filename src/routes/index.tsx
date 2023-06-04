import { useGetBooksQuery } from "../services/books";
import BooksTable from "../components/BookTable";

function Index() {
  const { data: books, isLoading, isError } = useGetBooksQuery();

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
