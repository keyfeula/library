const myLibrary = [];
const cardsContainer = document.querySelector(".cards-container");
const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book-btn");
const closeBtn = document.querySelector(".close-btn");

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

const book1 = new Book("Dune", "Frank Herbert", 600, "read");
const book2 = new Book("The Hobbit", "JRR Tolkien", 300, "read");
const book3 = new Book("Do Androids Dream of Electric Sheep", "Philip K Dick", 250, "read");
const book4 = new Book("The Dark Knight Returns", "Frank Miller", 120, "read");

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(books) {
    for (let book of books) {
        createBookCard(book);
    }
}

function createBookCard(book) {
    const card = document.createElement("div");
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const bookInfo = document.createElement("div");
    const cardBtns = document.createElement("div");
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    bookInfo.classList.add("book-info");
    cardBtns.classList.add("card-btns");
    readBtn.classList.add("read-btn");
    deleteBtn.classList.add("delete-btn");
    card.classList.add("card");

    titleText.textContent = "\"" + book.title + "\"";
    authorText.textContent = book.author;
    pagesText.textContent = book.pages + " pages";

    bookInfo.append(titleText);
    bookInfo.append(authorText);
    bookInfo.append(pagesText);
    card.append(bookInfo);

    if (book.readStatus === "read") {
        readBtn.textContent = "Read";
    }
    else {
        readBtn.textContent = "Not Read";
    }

    deleteBtn.textContent = "Delete";
    cardBtns.append(readBtn);
    cardBtns.append(deleteBtn);
    card.append(cardBtns);

    cardsContainer.append(card);
}

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

displayBooks(myLibrary);