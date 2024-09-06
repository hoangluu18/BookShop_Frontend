import React from "react";
import Book from "../../../models/Book";

interface BookProps {
    book: Book;
}

const BookComponent: React.FC<BookProps> = ({ book }) => {
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                {/* Hình ảnh sách */}
                <img
                    src={book.imageUrl}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: '350px' }}
                />
                <div className="card-body">
                    {/* Tiêu đề sách */}
                    <h5 className="card-title">{book.title}</h5>

                    {/* Mô tả sách */}
                    <p className="card-text">{book.description}</p>

                    {/* Phần hiển thị giá */}
                    <div className="price">
                        {/* Giá gốc */}
                        <span className="original-price" style={{ marginRight: '8px' }}>
                            <del>{book.originalPrice}</del>
                        </span>
                        {/* Giá giảm */}
                        <span className="discounted-price">
                            <strong>{book.price}</strong>
                        </span>
                    </div>

                    {/* Các nút hành động */}
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6" style={{textAlign:"right"}}>
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookComponent;
