const myLibrary = [];
const container = document.querySelector("#container");

function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages + " pages";
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function showBooks(){
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        const footer = document.createElement("div");
        const nodes = ["title","author","pages"];;

        for (let index = 0; index <= 2; index++) {
            let node = document.createElement("div");
            node.textContent = book[`${nodes[index]}`];

            (index > 0) ? footer.appendChild(node) : card.appendChild(node);
        }

        card.appendChild(footer);
        card.classList.add("card");
        container.appendChild(card);
    })
}

function updateContent(){
    add_book_form.reset();
    modal.style.display = "none";
    container.innerHTML = "";
    showBooks();
}


const modal = document.querySelector(".modal");
const add_book_form = document.querySelector("#add-book-form");
const add_book_button = document.querySelector("#add-book");
const close_button = document.querySelector("#close-button");
const add_button = document.querySelector("#add-button")

add_book_button.addEventListener("click", e => {
    modal.style.display = "block";
});

close_button.addEventListener("click", e =>{
    modal.style.display = "none";
})

add_button.addEventListener("click", e => {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");

    let book = new Book(title.value,author.value,pages.value);
    addBookToLibrary(book);
    updateContent();
    e.preventDefault();
})

