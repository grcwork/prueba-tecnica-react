import { useEffect, useState, useMemo } from "react";
import { BookTableInfo } from "../types";
import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteBook,
  removeFavoriteBookById,
} from "../features/favorites/favoritesSlice";

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
    enableSorting: true,
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

function BooksTable({ data }: { data: BookTableInfo[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const navigate = useNavigate();

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const favorites = useSelector((state: RootState) => state.favorites.value);

  const dispatch = useDispatch();

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      sorting,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  });

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h3>
          (*) Haga click en el nombre de una columna para ordenar de forma
          creciente/decreciente
        </h3>
        <div className="border-0 rounded-md overflow-hidden w-full lg:w-[60rem] m-3">
          <table className="bg-[#fefdf6] border-colapse w-full text-lg">
            <thead className="bg-[#8d2827] text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="text-left py-1 [&:nth-child(1)]:w-1/12 [&:nth-child(4)]:w-3/12 w-4/12 h-16 [&:nth-child(1)]:pl-3 [&:nth-child(4)]:hidden sm:[&:nth-child(4)]:block"
                    >
                      <div className="h-full ">
                        <span
                          className="hover:cursor-pointer"
                          onClick={(e) => {
                            const toggle =
                              header.column.getToggleSortingHandler();
                            if (toggle != null) {
                              toggle(e);
                            }
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </span>

                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#f5cb98] hover:cursor-pointer"
                  onClick={() => navigate(`/books/${row.getValue("id")}`)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-2 py-1 [&:nth-child(1)]:pl-3 [&:nth-child(4)]:hidden sm:[&:nth-child(4)]:block"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      <span
                        onClick={(e) => {
                          if (
                            favorites
                              .map((favorite) => favorite.id)
                              .includes(cell.getValue() as number)
                          ) {
                            dispatch(
                              removeFavoriteBookById(cell.getValue() as number)
                            );
                          } else {
                            dispatch(
                              addFavoriteBook(cell.getContext().row.original)
                            );
                          }
                          e.stopPropagation();
                        }}
                      >
                        {cell.column.id === "id" ? (
                          favorites
                            .map((favorite) => favorite.id)
                            .includes(cell.getValue() as number) ? (
                            <span className="fa fa-star text-[#ffa500]"></span>
                          ) : (
                            <span className="fa fa-star"></span>
                          )
                        ) : null}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) {
  const [value, setValue] = useState((column.getFilterValue() ?? "") as string);

  const sortedUniqueValues = useMemo(
    () =>
      typeof table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id) ===
      "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  useEffect(() => {
    column.setFilterValue(value);
  }, [value]);

  return (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <input
        className="text-black outline-none"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        list={column.id + "list"}
        placeholder="Buscar..."
      />
    </>
  );
}

export default BooksTable;
