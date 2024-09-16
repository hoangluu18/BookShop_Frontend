import React, { useEffect } from "react";
import BookProps from "./components/BookProps";
import BookModel from "../../models/BookModel";
import { fetchAllBooks, fetchBooks, fetchSearchBooks } from "../../api/BookApi";
import Pagination from "../utils/Pagination";

interface BookListProps {
    keyWord: string;
}

function BookList({keyWord}: BookListProps) {
    const [bookList, setBookList] = React.useState<BookModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);
    const [totalPages, setTotalPages] = React.useState<number>(0);
    const [pageCurrent, setPageCurrent] = React.useState<number>(1);
    const [totalBooks, setTotalBooks] = React.useState<number>(0);

    useEffect(() => {
        if(keyWord === ""){
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
    }else{
        fetchSearchBooks(keyWord).then(
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
    }
    },[pageCurrent,keyWord]) //chi goi 1 lan
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

    if (bookList.length === 0) {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <h2 className="card-title text-danger">Không tìm thấy sách</h2>
                                <p className="card-text">Xin lỗi, chúng tôi không tìm thấy kết quả nào cho tìm kiếm của bạn.</p>
                                <a href="/" className="btn btn-primary">Trở về trang chủ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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