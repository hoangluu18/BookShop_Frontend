import React, { useEffect } from "react";
import BookProps from "./components/BookProps";
import BookModel from "../../models/BookModel";
import { fetchAllBooks, fetchBooks } from "../../api/BookApi";
const BookList:React.FC = () => {
    const [bookList, setBookList] = React.useState<BookModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchAllBooks().then(
            data => {
                setBookList(data);
                setLoading(false);
            }
        ).catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    },[]) //chi goi 1 lan
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
    return (
        <div className="container">
            <div className="row mt-4">
                {
                    bookList.map(book => (
                            <BookProps key={book.bookId} book={book} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default BookList;