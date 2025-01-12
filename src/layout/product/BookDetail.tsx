import React, { useEffect } from "react";
import { Card, Badge, Table } from "react-bootstrap";
import BookModel from "../../models/BookModel";
import { useParams } from "react-router-dom";
import { fetchBooksById } from "../../api/BookApi";
import ProductImage from "./components/ProductImage";
import Review from "./components/Review";
import { Carousel } from "react-responsive-carousel"
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
    const [quantity, setQuantity] = React.useState<number>(1);

    const increaseQuantity = () => {
        if (quantity < (book?.quantity ?? 0)) {
            setQuantity(quantity + 1);
        }
    }
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value);
        const maxQuantity = book?.quantity ?? 0;
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= maxQuantity) {
            setQuantity(newQuantity);
        }
    };

    const handleBuyNow = () => {
        alert('Mua ngay');
    }
    const handleAddToCart = () => {
        alert('Thêm vào giỏ hàng');
    }

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
                            <div className="quantity-section p-3 border rounded">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="me-2">Số lượng</span>
                                    <div className="d-flex align-items-center quantity-control">
                                        <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
                                        <input
                                            type="text"
                                            className="form-control text-center mx-2"
                                            value={quantity}
                                            min={1}
                                            style={{ width: '50px' }}
                                            onChange={handleQuantityChange}
                                        />
                                        <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
                                    </div>
                                </div>
                                {
                                    book?.sellingPrice && (
                                        <div className="mt-2 text-center">
                                            Số tiền tạm tính <br />
                                            <h4>{NumberFormat(quantity * book.sellingPrice)} đ</h4>
                                        </div>
                                    )
                                }
                                <div className="d-grid gap-2 mt-3">
                                    <button type="button" className="btn btn-danger" onClick={handleBuyNow}>Mua ngay</button>
                                    <button type="button" className="btn btn-outline-secondary" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                                </div>
                            </div>
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

