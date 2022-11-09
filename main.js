let myLibrary = []

let testBook1 = new Book("Miss Garnet's Angel", "Salley Vickers", "305", "Not read")
let testBook2 = new Book("You Are Gods", "David Bentley Hart", "305", "Read")

myLibrary.push(testBook1, testBook2)

const container = document.querySelector(".container")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages + " pages"
    this.read = read
    this.info = function () {
        if (this.read === true) {
            readString = 'read'
        }
        else { readString = 'not read yet' }
        return `${title} \n\n by ${author}, ${pages} pages, ${readString}`
    }
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    displayBook(newBook)
}

myLibrary.forEach(displayBook);

function displayBook(item, index) {
    let card = document.createElement("div");

    ["title", "author", "pages", "read"].forEach(e => {
        let element = document.createElement("p");
        card.appendChild(element)
        element.textContent = item[e]

    })
    card.setAttribute('data-index', index)
    let closeCardButton = document.createElement("button")
    closeCardButton.setAttribute('card_id', index)
    closeCardButton.addEventListener('click', removeBookFromLibrary)
    card.appendChild(closeCardButton)
    closeCardButton.textContent = "Remove"
    container.appendChild(card).className = "card";
}

const newBookButton = document.getElementById("newBook")
const newBookForm = document.querySelector("div.formWrapper")
const closeFormButton = document.getElementById("closeForm")
const submitButton = document.getElementById("submit")

newBookButton.addEventListener('click', activateFormModal)
closeFormButton.addEventListener('click', closeFormModal)
submitButton.addEventListener('click', submitForm)

function activateFormModal() {
    newBookForm.classList.remove('inactive')
}

function closeFormModal() {
    newBookForm.classList.add('inactive')
}

let titleInput = document.querySelector("#title")
let authorInput = document.querySelector("#author")
let pagesInput = document.querySelector("#pages")
let readInput = document.querySelector("#read")


function submitForm() {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
    newBookForm.classList.add('inactive')
}

function removeBookFromLibrary(e) {
    let bookIndex = e.target.getAttribute("card_id")
    myLibrary.splice(bookIndex, 1)
    let card = e.target.parentNode
    card.remove()
}