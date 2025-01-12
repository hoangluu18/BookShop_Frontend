class Review {
    reviewId: number;
    rating: number;
    reviewContent: string;

    constructor(reviewId: number, rating: number, reviewContent: string) {
        this.reviewId = reviewId;
        this.rating = rating;
        this.reviewContent = reviewContent;

    }
}

export default Review;