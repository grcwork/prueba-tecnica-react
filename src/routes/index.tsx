import { useGetBooksQuery } from "../services/books";
import BooksTable from "../components/BookTable";

function Index() {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  if (isLoading)
    return (
      <div className="flex flex-row justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-[#8d2827] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );

  if (isError)
    return (
      <h3 className="text-center text-2xl text-red-500">
        Error: Algo salió mal :(
      </h3>
    );

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
