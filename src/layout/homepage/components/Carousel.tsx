import React, { useEffect } from "react";
import BookModel from "../../../models/BookModel";
import { fetch3Books } from "../../../api/BookApi";
import CarouselItem from "./CarouselItem";

const Carousel: React.FC = () => {
    const [bookList, setBookList] = React.useState<BookModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetch3Books().then(
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
    }, []) //chi goi 1 lan
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





    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <CarouselItem key={bookList[0].bookId} book={bookList[0]} />
                    </div>
                    <div className="carousel-item">
                        <CarouselItem key={bookList[1].bookId} book={bookList[1]} />
                    </div>
                    <div className="carousel-item">
                        <CarouselItem key={bookList[2].bookId} book={bookList[2]} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel;