import { Book } from "../types";

function BookDetail({ book }: { book: Book }) {
  const formatDate = (date: Date) => {
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    return [year, month, day].join("-");
  };

  return (
    <>
      <div className="flex flex-row justify-center">
        <table className="border-0 rounded-md border-collapse bg-[#fefdf6]">
          <tbody>
            <tr>
              <td className="p-2">Nombre</td>
              <td className="p-2">{book.name}</td>
            </tr>
            <tr>
              <td className="p-2">ISBN</td>
              <td className="p-2">{book.isbn}</td>
            </tr>
            <tr>
              <td className="p-2">Autor(es)</td>
              <td className="p-2">{book.authors.join()}</td>
            </tr>
            <tr>
              <td className="p-2">Páginas</td>
              <td className="p-2">{book.numberOfPages}</td>
            </tr>
            <tr>
              <td className="p-2">Editorial</td>
              <td className="p-2">{book.publisher}</td>
            </tr>
            <tr>
              <td className="p-2">País</td>
              <td className="p-2">{book.country}</td>
            </tr>
            <tr>
              <td className="p-2">Medio</td>
              <td className="p-2">{book.mediaType}</td>
            </tr>
            <tr>
              <td className="p-2">Fecha de publicación</td>
              <td className="p-2">{formatDate(new Date(book.released))}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BookDetail;
