const addBook = document.getElementById('addBook');
const form = document.getElementById('form');
const closeButton = document.getElementById('closeButton');
const confirmButton = document.getElementById('confirm');

let Library = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function addBookToLibrary(e) {
    let titleVar = document.getElementById('title').value;
    let authorVar = document.getElementById('author').value;
    let pageNumVar = document.getElementById('pageNum').value;
    let readVar = document.getElementById('haveRead').value;
    if (form.checkValidity()) {
        const newBook = new Book(titleVar, authorVar, pageNumVar, readVar);
        Library.push(newBook);
        form.style.cssText = 'opacity: 0; pointer-events: none;';
        form.reset();
        e.preventDefault()
        console.log(Library);
    }
}

addBook.addEventListener('click', () => (form.style.cssText = 'opacity: 100'));
closeButton.addEventListener('click', () => (form.style.cssText = 'opacity: 0; pointer-events: none;'));
confirmButton.addEventListener('click', addBookToLibrary);

console.log(Library);
