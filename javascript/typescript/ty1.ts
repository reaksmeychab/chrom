// /* 
// 1 Class Design:
// - Define the Library class with attributes like name and books.
// - Create a separate Book class with attributes like title, author, genre, and available (to track borrowing).
//  */


// // class Book {
// //     title: string;
// //     author: string;
// //     genre: string;
// //     available: boolean;

// //     constructor(title: string, author: string, genre: string, available: boolean) {
// //         this.title = title;
// //         this.author = author;
// //         this.genre = genre;
// //         this.available = available;
// //     }
// // }

// // class Library {
// //     name: string;
// //     books: Book[];

// //     constructor(name: string, books: Book[]) {
// //         this.name = name;
// //         this.books = books;
// //     }

// //     addBook(book: Book) {
// //         this.books.push(book);
// //     }

// //     removeBook(title: string) {
// //         this.books = this.books.filter(book => book.title !== title);
// //     }

// //     findBook(title: string): Book | undefined {
// //         return this.books.find(book => book.title === title);
// //     }

// //     displayBooks() {
// //         console.log(`Books available in ${this.name}:`);
// //         this.books.forEach(book => {
// //             console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Available: ${book.available ? 'Yes' : 'No'}`);
// //         });
// //     }
// // }

// // // Usage example:
// // const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", true);
// // const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", false);

// // const myLibrary = new Library("My Library", [book1, book2]);

// // myLibrary.displayBooks(); // Display initial books

// // const newBook = new Book("Pride and Prejudice", "Jane Austen", "Romance", true);
// // myLibrary.addBook(newBook); // Add a new book

// // myLibrary.displayBooks(); // Display updated list

// // myLibrary.removeBook("To Kill a Mockingbird"); // Remove a book

// // myLibrary.displayBooks(); // Display updated list


// /* 2 Basic Operations:
// + Implement methods for:
// - Adding a book to the library
// - Removing a book (by title or ISBN)
// - Searching for books by title, author, or genre
// - Displaying a list of all available books
//  */

// class Book {
//     constructor(public title: string, public author: string, public genre: string, public available: boolean) {}
// }

// class Library {
//     constructor(public name: string, public books: Book[]) {}

//     addBook(book: Book) {
//         this.books.push(book);
//     }

//     removeBookByTitle(title: string) {
//         this.books = this.books.filter(book => book.title !== title);
//     }

//     removeBookByISBN(isbn: number) {
//         this.books = this.books.filter(book => book.isbn !== isbn);
//     }

//     searchByTitle(title: string): Book[] {
//         return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
//     }

//     searchByAuthor(author: string): Book[] {
//         return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
//     }

//     searchByGenre(genre: string): Book[] {
//         return this.books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
//     }

//     displayAvailableBooks() {
//         const availableBooks = this.books.filter(book => book.available);
//         console.log(`Available books in ${this.name}:`);
//         availableBooks.forEach(book => {
//             console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
//         });
//     }
// }

// // Usage example:
// const myLibrary = new Library("My Library", [
//     new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", true),
//     new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", false),
//     new Book("Pride and Prejudice", "Jane Austen", "Romance", true),
//     new Book("1984", "George Orwell", "Dystopian", false),
// ]);

// myLibrary.displayAvailableBooks(); // Display all available books

// myLibrary.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic", true)); // Add a new book

// myLibrary.displayAvailableBooks(); // Display updated list

// myLibrary.removeBookByTitle("To Kill a Mockingbird"); // Remove a book by title

// myLibrary.displayAvailableBooks(); // Display updated list

// const searchResults = myLibrary.searchByAuthor("George Orwell"); // Search for books by author
// console.log("Search results for George Orwell:");
// console.log(searchResults);

// const sciFiBooks = myLibrary.searchByGenre("Science Fiction"); // Search for books by genre
// console.log("Science Fiction books:");
// console.log(sciFiBooks);


import React from 'react';

// Parent component
const ParentComponent = (props) => {
    return (
        <div>
            <h1>Parent Component</h1>
            <p>This is the parent component.</p>
            {/* Render the children passed to ParentComponent */}
            {props.children}
        </div>
    );
};

// Child components
const ChildComponent1 = () => {
    return <p>This is the first child component.</p>;
};

const ChildComponent2 = () => {
    return <p>This is the second child component.</p>;
};

// App component using ParentComponent and ChildComponents
const App = () => {
    return (
        <div>
            {/* ParentComponent with ChildComponent1 and ChildComponent2 as children */}
            <ParentComponent>
                <ChildComponent1 />
                <ChildComponent2 />
            </ParentComponent>
        </div>
    );
};

export default App;
