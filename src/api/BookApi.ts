import React from "react";
import BookModel from "../models/BookModel";
import request from "./Request";

interface BookApiInterface {
    data: BookModel[];
    totalPages: number;
    totalBooks: number;
}
export async function fetchBooks(endpoint: string): Promise<BookApiInterface> {
    const data: BookModel[] = []

    //fetch data
    const respond = await request(endpoint);
    const respondData = respond._embedded.books;
    const totalPages = respond.page.totalPages;
    const totalBooks = respond.page.totalElements;
    //map data
    respondData.map((book: BookModel) => {
        data.push(new BookModel(book.bookId, book.bookTitle, book.authorName, book.ISBN, book.description, book.coverPrice, book.sellingPrice, book.quantity, book.averageRating));
    });
    return {data: data, totalPages: totalPages, totalBooks: totalBooks};
}

export async function fetchAllBooks(pageCurrent: number): Promise<BookApiInterface> {
    const endpoint = `http://localhost:8080/book?sort=bookId,desc&size=5&page=${pageCurrent}`;
    return fetchBooks(endpoint);
    
}

export async function fetch3Books(): Promise<BookApiInterface> {
    const endpoint = "http://localhost:8080/book?sort=bookId,desc&page=0&size=3";
    return fetchBooks(endpoint);
    
}

export async function fetchSearchBooks(search : string): Promise<BookApiInterface> {
    const encode = encodeURIComponent(search);
    const endpoint = `http://localhost:8080/book/search/findBookByBookTitleContaining?bookTitle=${encode}&sort=bookId,desc&size=5`;
    if(search === ""){
        return fetchAllBooks(0);
    }
    return fetchBooks(endpoint);
    //return fetchAllBooks(0);
}
