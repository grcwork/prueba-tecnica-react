function Form() {
  return (
    <div className="flex flex-row justify-center">
      <div className="border-2 border-[#8d2827] flex flex-col gap-3 items-center rounded-lg p-5 m-3 w-full sm:w-96 bg-white">
        <h1 className="text-lg">Llene los campos para añadir un libro</h1>
        <div className="w-full">
          <form className="flex flex-col gap-3 w-full border-collapse">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 outline-none h-8"
            />
            <label htmlFor="author">Autor:</label>
            <input
              type="text"
              id="author"
              name="author"
              className="border border-gray-300 outline-none h-8"
            />
            <label htmlFor="genre">Género:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              className="border border-gray-300 outline-none h-8"
            />
            <label htmlFor="released">Fecha de publicación:</label>
            <input
              type="date"
              id="released"
              name="released"
              className="border border-gray-300 outline-none h-8"
            ></input>
            <input
              type="submit"
              value="Enviar"
              onClick={(e) => e.preventDefault()}
              className="border-2 border-[#8d2827] h-10 hover:bg-[#8d2827] hover:text-white hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
