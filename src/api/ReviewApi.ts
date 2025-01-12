import React from "react";
import BookModel from "../models/BookModel";
import request from "./Request";
import { promises } from "dns"; 
import ReviewModel from "../models/ReviewModel";


export async function fetchReview(endpoint: string): Promise<ReviewModel[]> {
    const data: ReviewModel[] = [];
    
    // Fetch data
    const response = await request(endpoint);
    const responseData = response._embedded.reviews;

    // Map data
    responseData.map((review: any) => {
        data.push(new ReviewModel(
            review.reviewId,
            review.rating,
            review.reviewContent,
        ));
    });

    return data;
}

export async function fetchAllReviews(bookId: number): Promise<ReviewModel[]> {
    const endpoint = `http://localhost:8080/book/${bookId}/reviewList`;
    return fetchReview(endpoint);
}




