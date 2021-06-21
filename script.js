const addBook = document.getElementById('addBook');
const form = document.getElementById('form');
const closeButton = document.getElementById('closeButton');
const confirmButton = document.getElementById('confirm');
const markButtons = document.querySelectorAll('.mark');
const removeButtons = document.querySelectorAll('.bookClose');

let actionDisabled = false;

let Library = [];
let localLibrary = JSON.parse(localStorage.getItem('localLibrary')) || [];

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}

function removeBook() {
    if (actionDisabled) return;
    this.parentElement.parentElement.remove();
    localLibrary.splice(this.parentElement.parentElement.id, 1);
    localStorage.setItem('localLibrary', JSON.stringify(localLibrary));
}

function changeRead() {
    if (actionDisabled) return;
    this.innerText = this.innerText === 'bookmark_border' ? 'bookmark' : 'bookmark_border';
    let readStatus = this.parentElement.parentElement.lastElementChild.innerText;
    this.parentElement.parentElement.lastElementChild.innerText =
        readStatus === 'Read already' ? 'Not read yet' : 'Read already';
    console.log(this.innerText);
}

function displayBook() {
    let readVar = document.getElementById('haveRead').value;
    for (let index = localLibrary.length - 1; index < localLibrary.length; index++) {
        const element = localLibrary[index];
        const content = document.getElementById(index);
        content.innerHTML = `
                    <div class="bookIcons">
                        <span class="material-icons mark"></span>
                        <span class="material-icons bookClose">close</span> 
                    </div>
                    <h3 class="bookTitle">${element.title}</h3>
                    <p class="text">By: ${element.author}</p>
                    <p class="text">${element.pageNum} pages</p>
                    <p class="text read">${element.read}</p>`;
        content.querySelector('.mark').setAttribute('id', `mark ${index}`);
        content.querySelector('.bookClose').setAttribute('id', `remove ${index}`);
        const markButton = document.getElementById(`mark ${index}`);
        const removeButton = document.getElementById(`remove ${index}`);
        markButton.innerText = readVar === 'Yes' ? 'bookmark_border' : 'bookmark';
        markButton.addEventListener('click', changeRead);
        removeButton.addEventListener('click', removeBook);
    }
}

function localInit() {
    for (let index = 0; index < localLibrary.length; index++) {
        const newDiv = document.createElement('div');
        document.getElementById('container').appendChild(newDiv);
        newDiv.setAttribute('class', 'book');
        newDiv.setAttribute('id', index);
        const element = localLibrary[index];
        const content = document.getElementById(index);
        content.innerHTML = `
                    <div class="bookIcons">
                        <span class="material-icons mark"></span>
                        <span class="material-icons bookClose">close</span> 
                    </div>
                    <h3 class="bookTitle">${element.title}</h3>
                    <p class="text">By: ${element.author}</p>
                    <p class="text">${element.pageNum} pages</p>
                    <p class="text read">${element.read}</p>`;
        content.querySelector('.mark').setAttribute('id', `mark ${index}`);
        content.querySelector('.bookClose').setAttribute('id', `remove ${index}`);
        const markButton = document.getElementById(`mark ${index}`);
        const removeButton = document.getElementById(`remove ${index}`);
        markButton.innerText =
            markButton.parentElement.parentElement.lastElementChild.innerText === 'Read already'
                ? 'bookmark_border'
                : 'bookmark';
        markButton.addEventListener('click', changeRead);
        removeButton.addEventListener('click', removeBook);
    }
}

function addBookToLibrary(e) {
    actionDisabled = false;
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
        newDiv.setAttribute('id', localLibrary.length);
        Library.push(newBook);
        localLibrary.push(Library[Library.length -1]);
        console.log(localLibrary);
        localStorage.setItem('localLibrary', JSON.stringify(localLibrary));
        form.style.cssText = 'opacity: 0; pointer-events: none;';
        displayBook();
        form.reset();
        e.preventDefault();
    }
}

addBook.addEventListener('click', () => {
    form.style.cssText = 'opacity: 100';
    actionDisabled = true;
});
closeButton.addEventListener('click', () => {
    form.style.cssText = 'opacity: 0; pointer-events: none;';
    actionDisabled = false;
});
confirmButton.addEventListener('click', addBookToLibrary);
removeButtons.forEach((removeButton) => removeButton.addEventListener('click', removeBook));
markButtons.forEach((markButton) => markButton.addEventListener('click', changeRead));

localInit()
