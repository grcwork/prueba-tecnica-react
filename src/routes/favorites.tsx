import BooksTable from "../components/BookTable";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites.value);
  return <BooksTable data={favorites} />;
}

export default Favorites;
