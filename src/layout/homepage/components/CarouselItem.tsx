import React, { useEffect } from "react";
import ImageModel from "../../../models/ImageModel";
import BookModel from "../../../models/BookModel";
import { fetchMainImage } from "../../../api/ImageApi";
interface CarouselItemProps {
    book: BookModel
}

const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    const [image, setImage] = React.useState<ImageModel>();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchMainImage(props.book.bookId).then(
            data => {
                setImage(data);
                setLoading(false);
            }
        ).catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    }, []) //chi goi 1 lan

    return (
        <div className="row align-items-center">
            <div className="col-5 text-center">
                <img src= {image?.data} className="float-end" style={{ width: '150px' }} />
            </div>
            <div className="col-7" style={{ maxWidth: '500px', wordWrap: 'break-word' }}>
                <h5>{props.book.bookTitle}</h5>
                <p>
                    {props.book.description}
                </p>
            </div>
        </div>
    )
}

export default CarouselItem;