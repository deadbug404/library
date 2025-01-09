const myLibrary = [];
const container = document.querySelector("#container");

function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages + " pages";
  this.status = "not finished";
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

function showBooks(){
    myLibrary.forEach((book,index) => {
        const card = document.createElement("div");
        const footer = document.createElement("div");
        const nodes = ["title","author","pages","status"];;

        for (let index = 0; index <= 3; index++) {
            let node = document.createElement("div");
            node.textContent = book[`${nodes[index]}`];

            (index > 0) ? footer.appendChild(node) : card.appendChild(node);
        }

        let delete_button = document.createElement("button");
        delete_button.textContent = "DELETE";
        delete_button.setAttribute("id",index);
        delete_button.classList.add("delete-book");

        let change_status_button =  document.createElement("button");
        change_status_button.textContent = "DONE";
        change_status_button.setAttribute("id",index);
        change_status_button.classList.add("change-status");
    

        footer.appendChild(change_status_button);
        footer.appendChild(delete_button);
        card.appendChild(footer);
        card.classList.add("card");
        container.appendChild(card);

        addDeleteButtonsFunction();
        addChangeButtonsFunction();
    })
}

function updateContent(){
    add_book_form.reset();
    modal.style.display = "none";
    container.innerHTML = "";
    showBooks();
}

function deleteBook(e){
    let id = e.target.id;
    console.log(id);
    myLibrary.splice(id,1); 
    updateContent();
}

function changeStatus(e){
    let id = e.target.id;
    myLibrary[id].status = "Finished Reading";
    updateContent();
}

function addDeleteButtonsFunction(){
    const delete_book_buttons = document.querySelectorAll(".delete-book");
    Array.from(delete_book_buttons).forEach(button => {
        button.addEventListener("click", deleteBook);
    }
    );
}

function addChangeButtonsFunction(){
    const change_status_buttons = document.querySelectorAll(".change-status");
    Array.from(change_status_buttons).forEach(button => {
        button.addEventListener("click", changeStatus);
    }
    );
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

