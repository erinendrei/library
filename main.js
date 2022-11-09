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
    container.appendChild(card).className = "card";
}