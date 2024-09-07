import React from "react";
import BookModel from "../models/BookModel";
import request from "./Request";


export async function fetchBooks(): Promise<BookModel[]> {
    const data: BookModel[] = []
    //endpoint
    const endpoint = "http://localhost:8080/book";
    //fetch data
    const respond = await request(endpoint);
    const respondData = respond._embedded.books;
    //map data
    respondData.map((book: BookModel) => {
        data.push(new BookModel(book.bookId, book.bookTitle, book.authorName, book.ISBN, book.description, book.coverPrice, book.sellingPrice, book.quantity, book.averageRating));
    });
    return data;
}

