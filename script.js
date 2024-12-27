const myLibrary = [];
const cardsContainer = document.querySelector(".cards-container");
const mainContainer = document.querySelector(".main-container");
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

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

function displayBooks() {
    cardsContainer.textContent = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        let bookInfo = document.createElement("div");
        bookInfo.classList.add("book-info");

        let titleP = document.createElement("p");
        let authorP = document.createElement("p");
        let pagesP = document.createElement("p");

        let cardBtns = document.createElement("div");
        cardBtns.classList.add("card-btns");

        let readBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        readBtn.classList.add("read-btn");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";

        bookInfo.append(titleP, authorP, pagesP);
        card.append(bookInfo);
        cardBtns.append(readBtn, deleteBtn);
        card.append(cardBtns);

        titleP.textContent = "\"" + myLibrary[i].title + "\"";
        authorP.textContent = myLibrary[i].author;
        pagesP.textContent = myLibrary[i].pages + " pages";
        readBtn.textContent = myLibrary[i].readStatus;
        if (myLibrary[i].readStatus === "Read") {
            readBtn.classList.add("read");
        }
        card.setAttribute("id", i);
        cardsContainer.append(card);
    }
}

mainContainer.addEventListener("click", (event) => {
    const element = event.target;
    if (element.tagName !== "BUTTON") {
        return;
    }

    if (element.classList.contains("add-book-btn")) {
        dialog.showModal();
    }
    else if (element.classList.contains("read-btn")) {
        const parentCardIndex = element.parentNode.parentNode.getAttribute("id");
        myLibrary[parentCardIndex].toggleReadStatus();
        element.classList.toggle("read");
        element.textContent = myLibrary[parentCardIndex].readStatus;
    }
    else if (element.classList.contains("delete-btn")) {
        const parentCardIndex = element.parentNode.parentNode.getAttribute("id");
        myLibrary.splice(parentCardIndex, 1);
        displayBooks();
    }
});

dialog.addEventListener("click", (event) => {
    const element = event.target;
    if (element.tagName !== "BUTTON") {
        return;
    }

    if (element.classList.contains("submit-btn")) {
        const title = document.querySelector("input#title").value;
        const author = document.querySelector("input#author").value;
        const pages = document.querySelector("input#pages").value;
        const read = document.querySelector("input#checkbox").checked ? "Read" : "Not Read";

        addBookToLibrary(title, author, pages, read);
        displayBooks();
    }
    else {
        dialog.close();
    }
});