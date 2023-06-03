import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-full bg-[#f3ebdc]">
      <h1 className="text-center text-3xl p-8">
        Libros del Universo de Hielo y Fuego
      </h1>
      <ul className="flex flex-row justify-center gap-10 text-xl mb-5">
        <li
          className={`hover:cursor-pointer  ${
            location.pathname === "/" ? "underline" : ""
          }`}
          onClick={() => navigate("/")}
        >
          Todo
        </li>
        <li
          className={`hover:cursor-pointer  ${
            location.pathname === "/favorites" ? "underline" : ""
          }`}
          onClick={() => navigate("/favorites")}
        >
          Favoritos
        </li>
        <li
          className={`hover:cursor-pointer  ${
            location.pathname === "/add-book" ? "underline" : ""
          }`}
          onClick={() => navigate("/add-book")}
        >
          Añadir
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Root;
