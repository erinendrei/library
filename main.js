let myLibrary = []

let testBook1 = new Book("Miss Garnet's Angel", "Salley Vickers", "305", "Not read")
let testBook2 = new Book("Truth and Truthfulness", "Bernard Williams", "305", "Read")

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

Book.prototype.toggleRead = function () {

    if (this.read === "Read") {
        this.read = "Not read"

    }
    else {
        this.read = "Read"
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
        if (e === "read") {
            element.setAttribute('id', `read_${index}`)
        }
        card.appendChild(element)
        element.textContent = item[e]

    })

    card.setAttribute('data-index', index)

    let closeCardButton = document.createElement("button")
    closeCardButton.addEventListener('click', removeBookFromLibrary)
    card.appendChild(closeCardButton)
    closeCardButton.textContent = "Remove"

    let toggleReadButton = document.createElement("button")
    toggleReadButton.classList.add('toggleRead')
    card.appendChild(toggleReadButton)
    toggleReadButton.textContent = "Read"

    container.appendChild(card).className = "card";
}

const newBookButton = document.getElementById("newBook")
const newBookForm = document.querySelector("div.formWrapper")
const formWrapperWrapper = document.querySelector("div.formWrapperWrapper")
const closeFormButton = document.getElementById("closeForm")
const submitButton = document.getElementById("submit")
const toggleReadButtons = document.querySelectorAll("button.toggleRead")

newBookButton.addEventListener('click', activateFormModal)
closeFormButton.addEventListener('click', closeFormModal)
submitButton.addEventListener('click', submitForm)

function activateFormModal() {
    newBookForm.classList.remove('inactive')
    formWrapperWrapper.classList.remove('inactive')
    //e.preventDefault()
}

function closeFormModal(e) {
    newBookForm.classList.add('inactive')
    formWrapperWrapper.classList.add('inactive')
    e.preventDefault()

}

let titleInput = document.querySelector("#title")
let authorInput = document.querySelector("#author")
let pagesInput = document.querySelector("#pages")
let readInput = document.querySelector("#read")


function submitForm(e) {
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
    newBookForm.classList.add('inactive')

}

function removeBookFromLibrary(e) {
    let bookIndex = e.target.parentNode.dataset.index
    myLibrary.splice(bookIndex, 1)
    let card = e.target.parentNode
    card.remove()
}


toggleReadButtons.forEach(btn => btn.addEventListener('click', toggleRead))

function toggleRead(e) {
    let index = e.target.parentNode.dataset.index
    let book = myLibrary[index]
    book.toggleRead()
    let readText = document.getElementById(`read_${index}`)
    readText.textContent = book.read
}
