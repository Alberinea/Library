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

function displayBook() {
    for (let index = 0; index < Library.length; index++) {
        const element = Library[index];
        const htmlText = `<h1>${element.title}</h1>
                <p class="text">By ${element.author}</p>
                <p class="text">${element.pageNum} pages</p>
                <p class="text">${element.read}</p>`;
        document.getElementById(index).innerHTML = htmlText;
    }
}

function addBookToLibrary(e) {
    let titleVar = document.getElementById('title').value;
    let authorVar = document.getElementById('author').value;
    let pageNumVar = document.getElementById('pageNum').value;
    let readVar = document.getElementById('haveRead').value;
    readVar = readVar === 'Yes' ? 'Read already' : 'Not read yet';
    if (form.checkValidity()) {
        const newBook = new Book(titleVar, authorVar, pageNumVar, readVar);
        const newDiv = document.createElement('div');
        document.getElementById('container').appendChild(newDiv);
        newDiv.setAttribute('class', 'book');
        newDiv.setAttribute('id', Library.length);
        Library.push(newBook);
        form.style.cssText = 'opacity: 0; pointer-events: none;';
        form.reset();
        displayBook();
        e.preventDefault();
    }
}

addBook.addEventListener('click', () => (form.style.cssText = 'opacity: 100'));
closeButton.addEventListener('click', () => (form.style.cssText = 'opacity: 0; pointer-events: none;'));
confirmButton.addEventListener('click', addBookToLibrary);

