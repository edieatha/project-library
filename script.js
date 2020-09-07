let myLibrary = [];

function Book ( title, author, pages, read ) {
  return {
  title,
  author,
  pages,
  read
  };
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

let book1 = new Book( "Javascript Algorithm", "Josia", 10, "yes" );
myLibrary = addBookToLibrary( book1, myLibrary );
console.log( myLibrary[ 0 ] );
let book2 = new Book( "Ruby on Rails", "Edie",  20, "yes" );
myLibrary = addBookToLibrary( book2, myLibrary );
console.log( myLibrary[ 1 ] );
let book3 = new Book( "Oliver Twist", "Mark", 30, "no" );
myLibrary = addBookToLibrary( book3, myLibrary );
console.log( myLibrary[ 2 ] );

displayBooks( myLibrary );

function formGrab() {
  let form = document.getElementById( "myForm" );
let arr = [];
 arr.push( document.getElementById( "book-title" ).value );
 arr.push( document.getElementById( "book-author" ).value );
 arr.push( Number.parseInt( document.getElementById( "book-pages" ).value ) );
 arr.push( document.querySelector( 'input[name="status"]:checked' ).value );
 let book = new Book( ...arr );
 myLibrary = addBookToLibrary( book, myLibrary );
 console.log( myLibrary );
 displayBooks( myLibrary );
 form.reset();
}

function displayBooks( arrShow ) {
  let displArr = arrShow.slice();
  const container = document.querySelector( "#container" );
  if ( document.contains( document.getElementById( "content" ) ) ) {
    document.getElementById( "content" ).remove();
  }
  const cardBody = document.createElement( "div" );
  cardBody.setAttribute( "id", "content" );
  for ( let i = 0; i < displArr.length; i++ ) {
    let para = document.createElement( "p" );
    let del = document.createElement( "button" );
    del.classList.add( "delete" );
    del.textContent = "Remove";
    del.addEventListener( "click", () => {
      removeBookToLibrary( i, arrShow );
      displayBooks( myLibrary );
     } );
    para.innerHTML = `${displArr[ i ].title } ${ displArr[ i ].author } ${ displArr[ i ].pages } ${displArr[ i ].read } <br>`;
    cardBody.appendChild( para );
    cardBody.appendChild( del );
  }
  container.appendChild( cardBody );
  //Document.getElementById("submit").innerHTML = myLibrary;
}
