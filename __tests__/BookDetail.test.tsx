import React from "react";
import { render, screen } from "@testing-library/react";
import BookDetail from "../src/components/BookDetail";
import * as books from "../src/stories/books.json";

describe("BookDetail", () => {
  it("Should render 'A Game of Thrones'", () => {
    render(<BookDetail book={books[0]} />);

    expect(screen.getByText(/A Game of Thrones/)).toBeInTheDocument();
    screen;
  });

  it("Should render 'A Clash of Kings'", () => {
    render(<BookDetail book={books[1]} />);

    expect(screen.getByText(/A Clash of Kings/)).toBeInTheDocument();
    screen;
  });

  it("Should render 'A Storm of Swords'", () => {
    render(<BookDetail book={books[2]} />);

    expect(screen.getByText(/A Storm of Swords/)).toBeInTheDocument();
  });

  it("Should render 'The Hedge Knight'", () => {
    render(<BookDetail book={books[3]} />);

    expect(screen.getByText(/The Hedge Knight/)).toBeInTheDocument();
  });

  it("Should render 'A Feast for Crows'", () => {
    render(<BookDetail book={books[4]} />);

    expect(screen.getByText(/A Feast for Crows/)).toBeInTheDocument();
  });

  it("Should render 'The Sworn Sword'", () => {
    render(<BookDetail book={books[5]} />);

    expect(screen.getByText(/The Sworn Sword/)).toBeInTheDocument();
  });

  it("Should render 'The Mystery Knigh'", () => {
    render(<BookDetail book={books[6]} />);

    expect(screen.getByText(/The Mystery Knigh/)).toBeInTheDocument();
  });

  it("Should render 'A Dance with Dragons'", () => {
    render(<BookDetail book={books[7]} />);

    expect(screen.getByText(/A Dance with Dragons/)).toBeInTheDocument();
  });

  it("Should render 'The Princess and the Queen'", () => {
    render(<BookDetail book={books[8]} />);

    expect(screen.getByText(/The Princess and the Queen/)).toBeInTheDocument();
  });

  it("Should render 'The Rogue Prince'", () => {
    render(<BookDetail book={books[9]} />);

    expect(screen.getByText(/The Rogue Prince/)).toBeInTheDocument();
  });
});
