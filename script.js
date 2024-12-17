const myLibrary = [];

function Book() {

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(books) {
    for (let book of books) {
        createBookCard(book);
    }
}

function createBookCard(book) {
    
}