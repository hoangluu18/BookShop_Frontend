import React, { useEffect } from "react";
import { Card, Badge, Table } from "react-bootstrap";
import BookModel from "../../models/BookModel";
import { useParams } from "react-router-dom";
import { fetchBooksById } from "../../api/BookApi";
import ProductImage from "./components/ProductImage";
import Review from "./components/Review";
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RatingStar from "../utils/RatingStar";
import NumberFormat from "../utils/NumberFormat";
interface BookDetailPropsInterface {
    book: BookModel
}


const BookDetail: React.FC = () => {
    const { bookId } = useParams();
    let bookIdNumber = 0;
    try {
        bookIdNumber = parseInt(bookId + '');
        if (Number.isNaN(bookIdNumber)) {
            bookIdNumber = 0;
        }
    } catch (error) {
        bookIdNumber = 0;
        console.log(error);

    }

    const [book, setBook] = React.useState<BookModel | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchBooksById(bookIdNumber).then(
            data => {
                setBook(data);
                setLoading(false);
            }
        ).catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    }, [bookIdNumber])

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h2>Error: {error}</h2>
            </div>
        )
    }

    if (book === null) {
        return (
            <body>
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <a href="/" className="btn btn-primary">Go Home</a>
                    </div>
                </div>
            </body>
        )
    }
    
        return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-4">
                    <ProductImage bookId={bookIdNumber} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>{book.bookTitle}</h1>
                            <h4>{RatingStar(book.averageRating ?? 0)} {book.averageRating}</h4>
                            <h4>{NumberFormat(book.sellingPrice ?? 0)} đ</h4>
                            <hr />
                            <h4>{book.description}</h4>
                            <hr />
                        </div>
                        <div className="col-4">

                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <Review bookId={bookIdNumber} />
            </div>
        </div>
    
    );
}
export default BookDetail;

