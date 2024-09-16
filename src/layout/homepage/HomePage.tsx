import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import BookList from "../product/BookList";
import { fetchBooks } from "../../api/BookApi";

interface HomePageProps {
    keyWord: string;
}
function HomePage({keyWord} : HomePageProps) {

    return (
        <div>
            <Banner/>
            <Carousel/>
            <BookList keyWord={keyWord}/>
        </div>
    )
}
export default HomePage;