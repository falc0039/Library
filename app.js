const bookAddBtn = document.querySelector('.add-book-btn');
const mainContainer = document.querySelector('.main-content');
const addBookForm = document.querySelector('.add-book-form');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const readCheckbox = document.querySelector('#read-checkbox');
const bookSubmitBtn = document.querySelector('.book-submit.btn');
let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
}

function addBookToLibrary() {
    
    console.log('hell');

    // let title = prompt('Please enter the title of the book');
    // let author = prompt('Please enter the author\'s name');
    // let pages = prompt('Please enter the number of pages');
    // let read = prompt('Please enter read or unread');
    console.log(inputTitle.value);
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    let read = 'read';
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    if (readCheckbox.checked === false) {
        readCheckbox.checked = true;
    } else if (readCheckbox.checked === true) {
        readCheckbox.checked = false;
    }
    addBookForm.style.visibility = 'hidden';
    
    let book1 = new Book(title, author, pages, read);
    myLibrary.push(book1);
    displayBook();
}

function displayBook () {
    for (let i = myLibrary.length-1; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        bookCard.classList.add('card');
        mainContainer.appendChild(bookCard);
        let bookTitle = document.createElement('div');
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add('book-title');
        bookCard.appendChild(bookTitle)
        let bookAuthor = document.createElement('div');
        bookAuthor.textContent = myLibrary[i].author;
        bookCard.appendChild(bookAuthor)
        let bookPages = document.createElement('div');
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookCard.appendChild(bookPages)
        let bookRead = document.createElement('div');
        bookRead.textContent = myLibrary[i].read;
        bookCard.appendChild(bookRead)
        // the three above lines to add book attribute to the page
        // and i guess repeat for the other attributes.
        
    }
}

bookAddBtn.addEventListener('click', () => {
    addBookForm.style.visibility = 'visible';
});
