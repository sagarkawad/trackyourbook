"use strict";
console.log("let's do it!");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//data
let allbooks;
let clicked;
const books = [];
const Objectcreator = function (unid, bname, bpage, totpage) {
  this.uniqueid = unid;
  this.bookname = bname;
  this.bookpage = bpage;
  this.totalpage = totpage;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dom Elements
//add book
const addbtn = document.getElementById("input");

//Add book template
const booktemp = document.getElementById("add-book");
const book = document.getElementById("user-book");
const yourpage = document.getElementById("user-page");
const totalpages = document.getElementById("tot-page");
const addthisbook = document.getElementById("add-user-book");
const illdoitlater = document.getElementById("cancel");

//homescreen
const readlist = document.getElementById("read-list");

//Edit book tab
const ebooktemp = document.getElementById("edit-book");
const ebook = document.getElementById("user-book-edit");
const eyourpage = document.getElementById("user-page-edit");
const etotalpages = document.getElementById("tot-page-edit");
const editthisbook = document.getElementById("edit-user-book");
const eilldoitlater = document.getElementById("cancel-edit");
const deleter = document.getElementById("delete");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Functions
function uiint(x) {
  //removing all the elements
  allbooks = document.querySelectorAll(".book-info");
  allbooks.forEach((el) => {
    el.remove();
  });

  //html creator
  //Adding the elements again to the UI
  books.forEach((ele, i, arr) => {
    console.log(ele);
    let html = `<div id=${ele.uniqueid} class="book-info">
    <div id="book-name">
      <h1 id="b1-name">${ele.bookname}</h1>
    </div>
    <progress id="b1-prog" value="${ele.bookpage / ele.totalpage}"></progress>

    <div id="book-stats">
      <h1 id="b1-stats">${ele.bookpage} of ${ele.totalpage}</h1>
    </div>
  </div>`;

  //Inserting the html
    readlist.insertAdjacentHTML("afterbegin", html);
  });
}

const adder = () => {
  if (
    book.value.length > 0 &&
    book.value.length < 100 &&
    parseInt(yourpage.value) > -1 &&
    parseInt(yourpage.value) < 99999 &&
    parseInt(totalpages.value) > -1 &&
    parseInt(totalpages.value) < 99999 &&
    parseInt(totalpages.value) >= parseInt(yourpage.value)
  ) {
    const obj = new Objectcreator(
      `b${books.length + 1}`,
      book.value,
      parseInt(yourpage.value),
      parseInt(totalpages.value)
    );
    books.push(obj);
    console.log(books);
    console.log(books.length);

    //updating the ui
    uiint();

    //clearing the fields
    book.value = "";
    yourpage.value = "";
    totalpages.value = "";
    booktemp.style.visibility = "hidden";
  } else console.log("error");
};

const addbooktemp = () => {
  // booktemp.style.visibility = "visible";
  book.focus();
  console.log("visible");
};

const homescreen = () => {
  booktemp.style.visibility = "hidden";
};

const homescreen2 = () => {
  ebooktemp.style.visibility = "hidden";
}

function edit(e) {
  //accessing the clicked element
  clicked = e.target.closest(".book-info");

  //guard clause.
  if (!clicked) return;

  //enabling visibility of edit-page
  // ebooktemp.style.visibility = "visible";
 
  books.forEach((el) => {
    if (el.uniqueid == clicked.id) {
      //Adding the values of the homescreen ui to the edit page ui.
      ebook.value = el.bookname;
      eyourpage.value = el.bookpage;
      etotalpages.value = el.totalpage;
      eyourpage.focus();
    }
  });
}

function updateui() {

  //changing the values in the array
  if (
    ebook.value.length > 0 &&
    ebook.value.length < 100 &&
    parseInt(eyourpage.value) > -1 &&
    parseInt(eyourpage.value) < 99999 &&
    parseInt(etotalpages.value) > -1 &&
    parseInt(etotalpages.value) < 99999 &&
    parseInt(etotalpages.value) >= parseInt(eyourpage.value)
  ) {
    books.forEach((el) => {
      if (clicked.id == el.uniqueid) {
        el.bookname = ebook.value;
        el.bookpage = eyourpage.value;
        el.totalpage = etotalpages.value;
        // ebooktemp.style.visibility = "hidden";
        console.log(books);
      }
    });

    //update the ui
    uiint();

    //clear the values
    ebook.value = "";
    eyourpage.value = "";
    etotalpages.value = "";
  }
}

function deletebook() {
  //deleting the element from the array of books
  books.forEach((el, i, arr) => {
    if (el.uniqueid == clicked.id) {
      books.splice(i, 1);
    }
  });

  //hide the current page
  ebooktemp.style.visibility = "hidden";

  //update the ui
  uiint();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Event Handlers
addbtn.addEventListener("click", addbooktemp);
addthisbook.addEventListener("click", adder);
illdoitlater.addEventListener("click", homescreen);
readlist.addEventListener("click", edit);
editthisbook.addEventListener("click", updateui);
deleter.addEventListener("click", deletebook);
eilldoitlater.addEventListener("click", homescreen2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//practice
// const now = new Date();
// console.log(now.getFullYear());

// console.log(10 < 100 ? "good one" : "not good");

// console.log(now);

// // rgb(255,255,255)

// let arr = [{id: "b1", name: "sam"}, {id: "b2", name:"sagar"}];
// console.log (arr);
// arr.splice ("b2", 1);
// console.log (arr);
