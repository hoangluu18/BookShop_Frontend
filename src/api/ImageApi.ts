import React from "react";
import ImageModel from "../models/ImageModel";
import request from "./Request";
import BookModel from "../models/BookModel";

export async function fetchImages(bookId: Number): Promise<ImageModel[]> {
    const data: ImageModel[] = []
    //endpoint
    const endpoint = `http://localhost:8080/book/${bookId}/imageList`;
    //fetch data
    const respond = await request(endpoint);
    const respondData = respond._embedded.images;
    //map data
    respondData.map((image: ImageModel) => {
        data.push(new ImageModel(image.imageId, image.imageName, image.isMainImage, image.link, image.data));
    });
    return data;
}

export async function fetchMainImage(bookId: Number): Promise<ImageModel> {
    const data: ImageModel[]= await fetchImages(bookId);
    return data[0] as ImageModel;
}





