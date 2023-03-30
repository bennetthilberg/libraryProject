let lib = [];
let submitNewBookBtn = document.getElementById("submitNewBookBtn");
let bookDisplay = document.getElementById('bookDisplay');

function Book(title, author, length, readYet) {
  this.title = title;
  this.author = author;
  this.length = length;
  this.readYet = readYet;
}

function addNewBook() {
    let newBookInfo = getNewBookInfo();
    let newBook = new Book(newBookInfo.title, newBookInfo.author, newBookInfo.length, newBookInfo.readYet);
    document.querySelector('#addBookForm').reset();
    lib.push(newBook);
    let newBookDiv = document.createElement('div');

    let newBookDivTitle = document.createElement('p');
    newBookDivTitle.style.fontWeight = 800;
    newBookDiv.appendChild(newBookDivTitle);
    newBookDivTitle.textContent = newBook.title;

    let newBookDivAuthor = document.createElement('p');
    newBookDiv.appendChild(newBookDivAuthor);
    newBookDivAuthor.textContent = `by ${newBook.author}`;

    let newBookDivLength = document.createElement('p');
    newBookDiv.appendChild(newBookDivLength);
    newBookDivLength.textContent = `${newBook.length} pages long`;

    let newBookDivReadBtn = document.createElement('button');
    if(newBook.readYet){
        newBookDivReadBtn.textContent = 'Read';
        newBookDivReadBtn.style.backgroundColor = 'green';
    }
    else{
        newBookDivReadBtn.textContent = 'Not Read';
        newBookDivReadBtn.style.backgroundColor = 'red';
    }
    newBookDivReadBtn.addEventListener('click', function(){
        if(newBookDivReadBtn.textContent === 'Read'){
            newBookDivReadBtn.textContent = 'Not Read';
            newBookDivReadBtn.style.backgroundColor = 'red';
            newBook.readYet = false;
        }
        else{
            newBookDivReadBtn.textContent = 'Read';
            newBookDivReadBtn.style.backgroundColor = 'green';
            newBook.readYet = true;
        }
    });
    newBookDiv.appendChild(newBookDivReadBtn);

    let newBookDivRemoveBtn = document.createElement('button');
    newBookDivRemoveBtn.textContent = 'Remove';
    newBookDivRemoveBtn.style.backgroundColor = 'pink';
    newBookDivRemoveBtn.addEventListener('click', function(){
        newBookDiv.remove();
        lib.splice(lib.indexOf(newBook), 1);
    });
    newBookDiv.appendChild(newBookDivRemoveBtn);

    bookDisplay.appendChild(newBookDiv);
}
function getNewBookInfo(){
    let newBookTitle = document.getElementById('newBookTitle').value;
    let newBookAuthor = document.getElementById('newBookAuthor').value;
    let newBookLength = document.getElementById('newBookLength').value;
    let newBookReadYet = document.getElementById('newBookReadYet').checked;

    return {
        title: newBookTitle,
        author: newBookAuthor,
        length: newBookLength,
        readYet: newBookReadYet
    };
}
