import React from "react";
import BookModel from "../models/BookModel";
import request from "./Request";


export async function fetchBooks(endpoint: string): Promise<BookModel[]> {
    const data: BookModel[] = []

    //fetch data
    const respond = await request(endpoint);
    const respondData = respond._embedded.books;
    //map data
    respondData.map((book: BookModel) => {
        data.push(new BookModel(book.bookId, book.bookTitle, book.authorName, book.ISBN, book.description, book.coverPrice, book.sellingPrice, book.quantity, book.averageRating));
    });
    return data;
}

export async function fetchAllBooks(): Promise<BookModel[]> {
    const endpoint = "http://localhost:8080/book?sort=bookId,desc";
    return fetchBooks(endpoint);
    
}

export async function fetch3Books(): Promise<BookModel[]> {
    const endpoint = "http://localhost:8080/book?sort=bookId,desc&page=0&size=3";
    return fetchBooks(endpoint);
    
}

