import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import BookList from "../product/BookList";
import { fetchBooks } from "../../api/BookApi";

function HomePage() {

    return (
        <div>
            <Banner/>
            <Carousel/>
            <BookList/>
        </div>
    )
}
export default HomePage;