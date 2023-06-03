import { useNavigate, useParams } from "react-router-dom";
import { useGetBookQuery } from "../services/books";
import BookDetail from "../components/BookDetail";

function Book() {
  let { id } = useParams();
  const navigate = useNavigate();

  const {
    data: book,
    isLoading,
    isError,
  } = useGetBookQuery(parseInt(id ?? ""));

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
      {book != null ? (
        <div className="flex flex-col items-center gap-5">
          <BookDetail book={book} />
          <button
            className="bg-[#8d2827] w-28 h-8 text-white"
            onClick={() => navigate(-1)}
          >
            Atrás
          </button>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Book;
