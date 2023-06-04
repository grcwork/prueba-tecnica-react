import BookDetail from "../components/BookDetail";

import books from "./books.json";

export default {
  title: "BookDetail",
  component: BookDetail,
};

export const AGameOfThrones = () => <BookDetail book={books[0]} />;
export const AClashOfKings = () => <BookDetail book={books[1]} />;
export const AStormOfSwords = () => <BookDetail book={books[2]} />;
export const TheHedgeKnight = () => <BookDetail book={books[3]} />;
export const AFeastForCrows = () => <BookDetail book={books[4]} />;
export const TheSwornSword = () => <BookDetail book={books[5]} />;
export const TheMysteryKnight = () => <BookDetail book={books[6]} />;
export const ADanceWithDragons = () => <BookDetail book={books[7]} />;
export const ThePrincessAndTheQueen = () => <BookDetail book={books[8]} />;
export const TheRoguePrince = () => <BookDetail book={books[9]} />;
