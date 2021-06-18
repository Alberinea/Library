const addBook = document.getElementById('addBook');
const form = document.getElementById('form');
const closeButton = document.getElementById('closeButton');
const confirmButton = document.getElementById('confirm');
const clearButton = document.getElementById('clear');
let titleVar = document.getElementById('title');
let authorVar = document.getElementById('author');
let pageNumVar = document.getElementById('pageNum');
let readVar = document.getElementById('haveRead');

let Library = [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function clear() {
    titleVar.value = '';
    authorVar.value = '';
    pageNumVar.value = '';
    readVar.value = 'No';
}

function addBookToLibrary() {
    const newBook = new Book(titleVar.value, authorVar.value, pageNumVar.value, readVar.value);
    Library.push(newBook);
    form.style.cssText = 'display: none';
    clear();
    console.log(Library);
}

addBook.addEventListener('click', () => (form.style.cssText = 'display: flex'));
closeButton.addEventListener('click', () => (form.style.cssText = 'display: none'));
confirmButton.addEventListener('click', addBookToLibrary);
clearButton.addEventListener('click', clear);

console.log(Library);
