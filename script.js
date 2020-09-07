let myLibrary = [];

function Book( title, author, pages, read ) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
