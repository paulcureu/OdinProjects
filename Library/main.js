const divAddBook = document.getElementById("showOrHide");
let isClicked = true;
const myLibrary = [];

function Book(title, author, pages, readIt) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readIt = readIt;
}

function addBook(title) {
    myLibrary.push(title);
}

divAddBook.style.display = "none";
let showOrHide = function (){
    if(isClicked){
        divAddBook.style.display = 'block';
        isClicked = false;
    }else{
        divAddBook.style.display = 'none';
        isClicked = true;
    }

}

const divLibrary = document.getElementById("showOrHideLibrary");
divLibrary.style.display = "grid";