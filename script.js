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

const book1 = new Book('Javascript Algorithm', 'by Josia,', `${10} pages,`, 'Read? Yes');
myLibrary = addBookToLibrary(book1, myLibrary);
const book2 = new Book('Ruby on Rails', 'by Edie,', `${20} pages,`, 'Read? Yes');
myLibrary = addBookToLibrary(book2, myLibrary);
const book3 = new Book('Oliver Twist', ' by Mark,', `${30} pages,`, 'Read? No');
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
      displayBooks(myLibrary);
    });

    up.classList.add('update');
    up.textContent = 'Update status';
    up.addEventListener('click', () => {
      displArr[i].upRead();
      displayBooks(myLibrary);
    });

    para.innerHTML = `${displArr[i].title} ${displArr[i].author} ${displArr[i].pages} ${displArr[i].read} <br>`;
    cardBody.appendChild(para);
    cardBody.appendChild(del);
    cardBody.appendChild(up);
  }
  container.appendChild(cardBody);
}

displayBooks(myLibrary);

function formGrab() {
  const form = document.getElementById('myForm');
  const arr = [];
  let flag = false;
  let all = false;
  arr.push(document.getElementById('book-title').value);
  arr.push(`by ${document.getElementById('book-author').value},`);
  arr.push(`${Number.parseInt((document.getElementById('book-pages').value), 10)} pages, Read?`);
  if (document.contains(document.querySelector('input[name="status"]:checked'))) {
    arr.push(document.querySelector('input[name="status"]:checked').value);
  } else {
    arr.push(null);
  }

  const book = new Book(...arr);

  flag = myLibrary.some((currentValue) => currentValue.title == arr[0] && currentValue.author == arr[1]);

  all = arr.every((currentValue) => currentValue !== null && currentValue !== ' ' && currentValue !== NaN);

  if (flag || !all) {
    alert('cannot clone book or all fields should not be empty');
  } else {
    myLibrary = addBookToLibrary(book, myLibrary);
    displayBooks(myLibrary);
    form.reset();
  }
}

