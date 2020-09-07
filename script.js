let myLibrary = [];

function Book ( title, author, pages, read ) {
  return {
  title,
  author,
  pages,
  read
  }
}

function addBookToLibrary( newbook, arrLibrary ) {
  let newArrLibrary = arrLibrary.slice( );
  return myLibrary.concat( newbook );
}

function removeBookToLibrary( index, arrLibrary ) {
  return arrLibrary.splice( index, 1 );
}

Book.prototype.upRead = function( ) {
  if ( this.read == "yes" ) {
    this.read = "no";
  }else {
    this.read = "yes";
  }
};

function formGrab() {
let arr = []
 arr.push(document.getElementById("book-title").value);
 arr.push(document.getElementById("book-author").value);
 arr.push(Number.parseInt(document.getElementById("book-pages").value));
 arr.push(document.querySelector('input[name="status"]:checked').value);
 let book = new Book(...arr);
 myLibrary = addBookToLibrary(book, myLibrary);
 console.log(myLibrary)
}

function displayBooks() {
  for(i = 0; i < myLibrary.length; i++) {
    document.write(myLibrary[i].title + ' ' + myLibrary[i].author + ' ' + myLibrary[i].pages + ' ' + myLibrary[i].read + "<br>");
  }
  //document.getElementById("submit").innerHTML = myLibrary;
}


let book1 = new Book( "Javascript Algorithm", "Josia", 10, "yes" );
myLibrary = addBookToLibrary( book1, myLibrary );
console.log( myLibrary[ 0 ] );
let book2 = new Book( "Ruby on Rails", "Edie",  20, "yes" );
myLibrary = addBookToLibrary( book2, myLibrary );
console.log( myLibrary[ 1 ] );
let book3 = new Book( "Oliver Twist", "Mark", 30, "no" );
myLibrary = addBookToLibrary( book3, myLibrary );
console.log( myLibrary[ 2 ] );

