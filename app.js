const bookAddBtn = document.querySelector('.add-book-btn');
const mainContainer = document.querySelector('.book-display');
const addBookForm = document.querySelector('.add-book-form');
const formRemoveBtn = document.querySelector('.form-remove-btn');
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
    this.read = read;
    
}

Book.prototype.toggleRead = function () {
        if (this.read === 'Read') {
            this.read = 'Unread';
        } else if (this.read === 'Unread') {
            this.read = 'Read';
        }
}

function addBookToLibrary() {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let pages = inputPages.value;
    if (readCheckbox.checked === false) {
        read = 'Unread';
    } else if (readCheckbox.checked === true) {
        read = 'Read';
    }

    clearForm();
    let book1 = new Book(title, author, pages, read);
    myLibrary.push(book1);
    displayBook();
}

function clearForm() {
    inputTitle.value = '';
    inputAuthor.value = '';
    inputPages.value = '';
    readCheckbox.checked = false;
    addBookForm.style.visibility = 'hidden';
}



function displayBook() {
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        let bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.setAttribute('data-index-nr', i);
        mainContainer.appendChild(bookCard);
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        bookCard.appendChild(removeBtn);
        let bookTitle = document.createElement('div');
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add('book-title');
        bookCard.appendChild(bookTitle)
        let bookAuthor = document.createElement('div');
        bookAuthor.textContent = `by ${myLibrary[i].author}`;
        bookCard.appendChild(bookAuthor)
        let bookPages = document.createElement('div');
        bookPages.textContent = `${myLibrary[i].pages} pages`;
        bookCard.appendChild(bookPages)
        let bookRead = document.createElement('button');
        bookRead.textContent = myLibrary[i].read;
        bookRead.classList.add('read-btn', 'unread-btn');
        if (bookRead.textContent === 'Read') {
            bookRead.classList.toggle('unread-btn');
        } else if (bookRead.textContent === 'Unread') {
            bookRead.classList.toggle('read-btn');
        }

        bookCard.appendChild(bookRead);
        removeContentBtn();
        toggleReadBtn();
    }
}

formRemoveBtn.addEventListener('click', clearForm);

bookAddBtn.addEventListener('click', () => {
    addBookForm.style.visibility = 'visible';
});

// This function adds a remove button on every book card by using the 
// data-index-nr attribute as its place in the myLibrary array, then 
// when a card is removed the rest of the cards are looped over and assigned 
// new data-index-nr that correspond with their location in the myLibrary array.
const removeContentBtn = () => {
    
    const removeBtn = document.querySelectorAll('.remove-btn');
    for (let button of removeBtn) {
        const card = button.parentElement;
        if (button.title === 'Remove') {
            continue;
        } else {
            button.addEventListener('click', (e) => {
                let indexNr = card.getAttribute('data-index-nr');
                myLibrary.splice(indexNr, 1); 
                card.remove();
                let i = 0;
                const cardElements = document.querySelectorAll('.card');
                for (let card of cardElements) {
                    card.setAttribute('data-index-nr', i);
                    i++;
                }
            })
        } button.title = 'Remove';
    }
}
// This function loops over the buttons in the card with the read-btn class,
// adds a value to the title attribute, then checks if the element with the 
// class already has the title value, and doesn't set duplicate eventlisteners
// on the element.
const toggleReadBtn = () => {
    const bookReadBtn = document.querySelectorAll('.read-btn');
    const bookUnreadBtn = document.querySelectorAll('.unread-btn');
    
    for (let button of bookReadBtn) {
        const card = button.parentElement;
        if (button.title === 'Read/Unread') {
            continue;
        } else {
            button.addEventListener('click', (e) => {
                let indexNr = card.getAttribute('data-index-nr');
                myLibrary[indexNr].toggleRead();
                if (button.classList.contains('read-btn')) {
                    button.classList.toggle('read-btn');
                    button.classList.add('unread-btn');
                    e.target.textContent = 'Unread';
                } else {
                    button.classList.toggle('unread-btn');
                    button.classList.toggle('read-btn');
                    e.target.textContent = 'Read';
                }
            })
            button.title = 'Read/Unread';
        }
    };
    for (let button of bookUnreadBtn) {
        const card = button.parentElement;
        if (button.title === 'Read/Unread') {
            continue;
        } else {
            button.addEventListener('click', (e) => {
                let indexNr = card.getAttribute('data-index-nr');
                myLibrary[indexNr].toggleRead();
                if (button.classList.contains('read-btn')) {
                    button.classList.toggle('read-btn');
                    button.classList.add('unread-btn');
                    e.target.textContent = 'Unread';
                } else {
                    button.classList.toggle('unread-btn');
                    button.classList.toggle('read-btn');
                    e.target.textContent = 'Read';
                }
            })
            button.title = 'Read/Unread';
        }
    };
    
}


