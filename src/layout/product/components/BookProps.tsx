import React, { useEffect } from "react";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { fetchImages } from "../../../api/ImageApi";
interface BookPropsInterface {
    book : BookModel
}


const BookProps: React.FC<BookPropsInterface> = (props ) => {
    const bookId: number = props.book.bookId;
    const [imageList, setImageList] = React.useState<ImageModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchImages(bookId).then(
            data => {
                setImageList(data);
                setLoading(false);
            }
        ).catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    },[]) //chi goi 1 lan
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                {/* Hình ảnh sách */}
                { imageList.length > 0 &&
                    <img
                    src={imageList[0].data}
                    className="card-img-top"
                    alt={props.book.bookTitle}
                    style={{ height: '350px' }}
                    />                  
                }

                <div className="card-body">
                    {/* Tiêu đề sách */}
                    <h5 className="card-title">{props.book.bookTitle}</h5>

                    {/* Mô tả sách */}
                    <p className="card-text">{props.book.description}</p>

                    {/* Phần hiển thị giá */}
                    <div className="price">
                        {/* Giá gốc */}
                        <span className="original-price" style={{ marginRight: '8px' }}>
                            <del>{props.book.coverPrice}</del>
                        </span>
                        {/* Giá giảm */}
                        <span className="discounted-price">
                            <strong>{props.book.sellingPrice}</strong>
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

export default BookProps;
