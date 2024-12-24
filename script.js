const myLibrary = [];
const cardsContainer = document.querySelector(".cards-container");
const dialog = document.querySelector("dialog");
const addBookBtn = document.querySelector(".add-book-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const titleInput = document.querySelector("input#title");
const authorInput = document.querySelector("input#author");
const pagesInput = document.querySelector("input#pages");
const readInput = document.querySelector("input#checkbox");

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    cardsContainer.textContent = "";
    for (let book of myLibrary) {
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
        readBtn.classList.add("read");
    }
    else {
        readBtn.textContent = "Not Read";
        readBtn.classList.add("not-read");
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

cardsContainer.addEventListener("click", (e) => {
    let target = e.target;
    
    if (target.classList.contains("read-btn")) {
        if (target.classList.contains("read")) {
            target.classList.remove("read");
            target.classList.add("not-read");
            target.textContent = "Not Read";
        }
        else {
            target.classList.remove("not-read");
            target.classList.add("read");
            target.textContent = "Read";
        }
    }
    else if (target.classList.contains("delete-btn")) {
        
    }
});

submitBtn.addEventListener("click", () => {
    let read = readInput.checked ? "read" : "";
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, read);
    addBookToLibrary(newBook);
});