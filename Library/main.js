document.getElementById("new-book").style.display = "none";
let isCliked = false;
const myLibrary = [];

function Book(title, author, pages, readIt) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
}

function rander() {
    let libraryElement = document.getElementById('library');
    libraryElement.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = '<div style = "display: flex; justify-content: center">'+'<p>Book title: </p>'+book.title+'</div>'
            +'<div style = "display: flex; justify-content: center">'+'<p>Author: </p>'+book.author+'</div>'
            +'<div style = "display: flex; justify-content: center">'+'<p>Pages: </p>'+book.pages+'</div>'
            +'<div style = "display: flex; justify-content: center">'+'<p>Read It: </p>'+(book.readIt ? "yes":"no")+'</div>'
            +'<button class="btn-book" data-id="' + book.id + '">Delete</button>'
        libraryElement.appendChild(bookElement);
        bookElement.querySelector(".btn-book").addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            const index = myLibrary.findIndex(book => book.id === id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
                rander();
            }
        });
    }
}

function addBookToLibrary() {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let readIt = document.getElementById("readIt").checked;
    let newBook = new Book(title, author, pages, readIt, readIt, readIt);
    myLibrary.push(newBook);
    rander();
}

document.querySelector(".btn").addEventListener("click", function (e) {
    if (isCliked) {
        document.getElementById("new-book").style.display = "none";
        isCliked = false;
    }else {
        document.getElementById("new-book").style.display = "block";
        isCliked = true;
    }
});

document.querySelector("#new-book").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
})