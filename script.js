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
 arr.push(document.getElementById("book-pages").value);
 arr.push(document.querySelector('input[name="status"]:checked').value);
 console.log(arr)
}

let book1 = new Book( "josia", "josia auth", 10, "yes" );
myLibrary = addBookToLibrary( book1, myLibrary );
console.log( myLibrary[ 0 ] );
let book2 = new Book( "edie", "edie auth", 10, "yes" );
myLibrary = addBookToLibrary( book2, myLibrary );
console.log( myLibrary[ 1 ] );
let book3 = new Book( "test", "test auth", 10, "yes" );
myLibrary = addBookToLibrary( book3, myLibrary );
console.log( myLibrary[ 2 ] );
removeBookToLibrary( 0, myLibrary );
console.log( "after delete" );
console.log( myLibrary );
