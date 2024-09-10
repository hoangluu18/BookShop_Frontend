import React, { useEffect } from "react";
import BookProps from "./components/BookProps";
import BookModel from "../../models/BookModel";
import { fetchAllBooks, fetchBooks } from "../../api/BookApi";
import Pagination from "../utils/Pagination";
const BookList:React.FC = () => {
    const [bookList, setBookList] = React.useState<BookModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);
    const [totalPages, setTotalPages] = React.useState<number>(0);
    const [pageCurrent, setPageCurrent] = React.useState<number>(1);
    const [totalBooks, setTotalBooks] = React.useState<number>(0);
    useEffect(() => {
        fetchAllBooks(pageCurrent - 1).then(
            data => {
                setBookList(data.data);
                setLoading(false);
                setTotalBooks(data.totalBooks);
                setTotalPages(data.totalPages);
            }
        ).catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    },[pageCurrent]) //chi goi 1 lan
    if(loading){
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h2>Error: {error}</h2>
            </div>
        )
    }

    const pageChange = (page: number) => {
        setPageCurrent(page);
    }
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                {
                    bookList.map(book => (
                            <BookProps key={book.bookId} book={book} />
                        )
                    )
                }
            </div>
            <Pagination currentPage={pageCurrent} totalPages={totalPages} onPageChange={pageChange} />
        </div>
    )
}

export default BookList;