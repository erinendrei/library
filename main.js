let myLibrary = []

let testBook1 = new Book("Miss Garnet's Angel", "Salley Vickers", "305", false)
let testBook2 = new Book("You Are Gods", "David Bentley Hart", "305", true)

myLibrary.push(testBook1, testBook2)

const container = document.querySelector(".container")

myLibrary.forEach(item => {
    console.log(item.info())
    let card = document.createElement("div");
    card.textContent = item.info()
    container.appendChild(card).className = "card";
});


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (this.read === true) {
            readString = 'read'
        }
        else { readString = 'not read yet' }
        return `${title} by ${author}, ${pages} pages, ${readString}`
    }
}

function addBookToLibrary() {

}

