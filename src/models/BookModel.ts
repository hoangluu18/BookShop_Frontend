class BookModel {
    bookId: number;
    bookTitle?: string; // co the bi null
    authorName?: string;
    ISBN?: string;
    description?: string;
    coverPrice?: number;
    sellingPrice?: number;
    quantity?: number;
    averageRating?: number;

    constructor(bookId: number, bookTitle?: string, authorName?: string, ISBN?: string, description?: string, coverPrice?: number, sellingPrice?: number, quantity?: number, averageRating?: number) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.ISBN = ISBN;
        this.description = description;
        this.coverPrice = coverPrice;
        this.sellingPrice = sellingPrice;
        this.quantity = quantity;
        this.averageRating = averageRating;
    }

}

export default BookModel;

