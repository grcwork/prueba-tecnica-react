import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-full text-3xl gap-3">
      <h1>Página no encontrada :(</h1>
      <button onClick={() => navigate("/")}>Ir a Inicio</button>
    </div>
  );
}

export default NotFound;
