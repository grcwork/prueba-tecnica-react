export interface Book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: strings;
  released: string;
  characters: string[];
  povCharacters: string[];
}

type BookTableInfo = Pick<Book, "name" | "isbn"> & {
  id: number;
  authors: string;
};
