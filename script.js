const addBook = document.getElementById('addBook');
const form = document.getElementById('form');
const closeButton = document.getElementById('closeButton');

let Library = [];

function Book(title, author, pageNum, read) {
    this.name = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
}

addBook.addEventListener('click', () => (form.style.cssText = 'display: flex'));
closeButton.addEventListener('click', () => (form.style.cssText = 'display: none'));
