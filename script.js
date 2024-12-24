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

    this.toggleReadStatus = function() {
        if (this.readStatus === "Read") {
            this.readStatus = "Not Read";
        }
        else {
            this.readStatus = "Read";
        }
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    createBookCard(book);
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

    if (book.readStatus === "Not Read") {
        readBtn.textContent = "Read";
        readBtn.classList.add("read");
    }

    deleteBtn.textContent = "Delete";
    cardBtns.append(readBtn);
    cardBtns.append(deleteBtn);
    card.append(cardBtns);
    card.setAttribute("id", myLibrary.length - 1);

    cardsContainer.append(card);

    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentNode.parentNode.remove();
        myLibrary.splice(myLibrary[card.getAttribute("id")], 1);
    });

    readBtn.addEventListener("click", () => {
        let readStatus = myLibrary[card.getAttribute("id")].readStatus;
        myLibrary[card.getAttribute("id")].toggleReadStatus();
        readBtn.textContent = readStatus;
        readBtn.classList.toggle("not-read");
    });
}

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", (e) => {
    let readStatus = readInput.checked ? "Read" : "Not Read";
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus);
    addBookToLibrary(newBook);
});