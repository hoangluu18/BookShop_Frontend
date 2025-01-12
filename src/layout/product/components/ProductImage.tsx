import React, { useEffect } from "react";
import BookModel from "../../../models/BookModel";
import ImageModel from "../../../models/ImageModel";
import { fetchAllImagesById, fetchImages, fetchMainImage } from "../../../api/ImageApi";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface ProductImageInterface {
    bookId: number
}


const ProductImage: React.FC<ProductImageInterface> = (props) => {
    const bookId: number = props.bookId;
    const [imageList, setImageList] = React.useState<ImageModel[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetchAllImagesById(bookId).then(
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
        <div className="row">
            <div className="col-12">
                <Carousel showArrows={false} showIndicators={false}>
                    {
                        imageList.map((image, index) => (
                            <div key={index}>
                                <img src={image.data} alt={`${image.imageName}`} style={{maxWidth: "250px"}} />
                            </div>
                        ))
                    }
                </Carousel>

            </div>
        </div>
    )
};

export default ProductImage;
