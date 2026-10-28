from fastapi import FastAPI, HTTPException, Response, status
from pydantic import BaseModel

app = FastAPI()


class Book(BaseModel):
    id: int
    title: str
    author: str


class BookCreate(BaseModel):
    title: str
    author: str


books: list[Book] = [
    Book(id=1, title="The Hobbit", author="J. R. R. Tolkien"),
    Book(id=2, title="A Wrinkle in Time", author="Madeleine L'Engle"),
]


@app.get("/books", response_model=list[Book])
def list_books() -> list[Book]:
    # TODO: Return the current catalog.
    raise NotImplementedError


@app.get("/books/{book_id}", response_model=Book)
def get_book(book_id: int) -> Book:
    # TODO: Find and return the book, or raise HTTPException with status 404.
    raise NotImplementedError


@app.post("/books", response_model=Book, status_code=status.HTTP_201_CREATED)
def create_book(book_data: BookCreate) -> Book:
    # TODO: Assign the next available ID, create the book, and add it to the catalog.
    raise NotImplementedError


@app.put("/books/{book_id}", response_model=Book)
def update_book(book_id: int, book_data: BookCreate) -> Book:
    # TODO: Find the book and update its title and author, or raise HTTPException with status 404.
    raise NotImplementedError


@app.delete("/books/{book_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_book(book_id: int) -> Response:
    # TODO: Remove the book, or raise HTTPException with status 404.
    raise NotImplementedError
