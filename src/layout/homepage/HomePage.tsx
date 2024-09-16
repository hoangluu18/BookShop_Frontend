import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import BookList from "../product/BookList";
import { fetchBooks } from "../../api/BookApi";
import { useParams } from "react-router-dom";

interface HomePageProps {
    keyWord: string;
}
function HomePage({keyWord} : HomePageProps) {
    const {categoryId} = useParams();
    let categoryIdNumber = 0;
    try {
        categoryIdNumber = parseInt(categoryId+'');
    } catch (error) {
        categoryIdNumber = 0;
        console.log('error: ', error);
    }
    if(Number.isNaN(categoryIdNumber)){
        categoryIdNumber = 0 
    }

    return (
        <div>
            <Banner/>
            <Carousel/>
            <BookList keyWord={keyWord} categoryId={categoryIdNumber}/>
        </div>
    )
}
export default HomePage;