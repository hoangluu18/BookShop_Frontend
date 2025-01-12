import React, { useEffect } from "react";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { fetchImages, fetchMainImage } from "../../../api/ImageApi";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"
import { fetchAllReviews } from "../../../api/ReviewApi";
import ReviewModel from "../../../models/ReviewModel";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import renderStars from "../../utils/RatingStar";
interface ReviewInterface {
    bookId: number
}


const Review: React.FC<ReviewInterface> = (props) => {
    const bookId: number = props.bookId;
    const [reviewList, setReviewList] = React.useState<ReviewModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);


    useEffect(() => {
        fetchAllReviews(bookId).then(
            data => {
                setReviewList(data);
                setLoading(false);
            }
        ).catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    }, []) //chi goi 1 lan

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
        <div className="container mt-2 mb-2 text-center">
            <h4>Đánh giá sản phẩm:</h4>
            {reviewList.map((review, index) => (
                <div className="row" key={index}>
                    <div className="col-4 text-end">
                        <p>{renderStars(review.rating)}</p>
                    </div>
                    <div className="col-8 text-start">
                        <p>{review.reviewContent}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Review;
