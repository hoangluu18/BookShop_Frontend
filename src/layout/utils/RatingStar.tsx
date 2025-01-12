import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {Array.from({ length: fullStars }, (_, index) => (
                <StarFill key={`full-${index}`} className="star-icon" />
            ))}
            {halfStar && <StarHalf key="half" className="star-icon" />}
            {Array.from({ length: emptyStars }, (_, index) => (
                <Star key={`empty-${index}`} className="star-icon" />
            ))}
        </>
    );
};

export default renderStars;