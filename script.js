let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newbook, arrLibrary) {
  arrLibrary.slice();
  return myLibrary.concat(newbook);
}

function removeBookToLibrary(index, arrLibrary) {
  return arrLibrary.splice(index, 1);
}

function upReadFunc() {
  if (this.read === 'Yes') {
    this.read = 'No';
  } else {
    this.read = 'Yes';
  }
}

Book.prototype.upRead = upReadFunc;

const book1 = new Book('Javascript Algorithm', 'Josia', 10, 'Yes');
myLibrary = addBookToLibrary(book1, myLibrary);
const book2 = new Book('Ruby on Rails', 'Edie', 20, 'Yes');
myLibrary = addBookToLibrary(book2, myLibrary);
const book3 = new Book('Oliver Twist', 'Mark', 30, 'No');
myLibrary = addBookToLibrary(book3, myLibrary);

function displayBooks(arrShow) {
  const displArr = arrShow.slice();
  const container = document.querySelector('#container');
  if (document.contains(document.getElementById('content'))) {
    document.getElementById('content').remove();
  }
  const cardBody = document.createElement('div');
  cardBody.setAttribute('id', 'content');

  for (let i = 0; i < displArr.length; i += 1) {
    const para = document.createElement('p');
    const del = document.createElement('button');
    const up = document.createElement('button');
    del.classList.add('btn-danger', 'btn', 'mr-2', 'btn-sm');
    up.classList.add('btn-success', 'btn', 'mr-2', 'btn-sm');
    para.classList.add('mb-1', 'mt-2');
    del.textContent = 'Remove Book';
    del.addEventListener('click', () => {
      removeBookToLibrary(i, arrShow);
      displayBooks(arrShow);
    });

    up.classList.add('update');
    up.textContent = 'Update status';
    up.addEventListener('click', () => {
      displArr[i].upRead();
      displayBooks(arrShow);
    });

    para.innerHTML = `${displArr[i].title} by ${displArr[i].author} ${displArr[i].pages} pages, Read? ${displArr[i].read} <br>`;
    cardBody.appendChild(para);
    cardBody.appendChild(del);
    cardBody.appendChild(up);
  }
  container.appendChild(cardBody);
}

displayBooks(myLibrary);

const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  const arr = [];
  let flag = false;
  arr.push(document.getElementById('book-title').value);
  arr.push(document.getElementById('book-author').value);
  arr.push(Number.parseInt((document.getElementById('book-pages').value), 10));
  if (document.contains(document.querySelector('input[name="status"]:checked'))) {
    arr.push(document.querySelector('input[name="status"]:checked').value);
  } else {
    arr.push(null);
  }

  const book = new Book(...arr);

  flag = myLibrary.some((curVal) => curVal.title === arr[0] && curVal.author === arr[1]);

  if (flag) {
    alert('cannot clone book'); // eslint-disable-line no-alert
  } else {
    myLibrary = addBookToLibrary(book, myLibrary);
    displayBooks(myLibrary);
    form.reset();
  }
  e.preventDefault();
});
