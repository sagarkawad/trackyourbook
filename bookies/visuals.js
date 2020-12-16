console.log("visuals working");

// ////////////////////////////////////////////////////////////////
//Selectors
const addbook = document.getElementById("add-book");
const addit = document.getElementById("add");
const adduserbook = document.getElementById("add-user-book");
const vreadlist = document.getElementById("read-list");
const vcancel = document.getElementById("cancel");
const veditthisbook = document.getElementById("edit-user-book");
const veilldoitlater = document.getElementById("cancel-edit");
const vdeleter = document.getElementById("delete");
////////////////////////////////////////////////////////////////
//Functions
const easein = () => {
  // addbook.style.transform = "translateX(100%)"
  addbook.style.transition = "500ms";
  addbook.style.visibility = "visible";
  addbook.style.transform = "translateX(0%)";

  //    setTimeout(() => {
  //     addbook.style.transition = "0ms";
  //     addbook.style.transform = "translateX(100%)";
  //    }, 1000);
};

const easeout = () => {
  addbook.style.transition = "500ms";
  addbook.style.visibility = "hidden";
  addbook.style.transform = "translateX(100%)";
};

const editeasein = (e) => {
  //accessing the clicked element
  clicked = e.target.closest(".book-info");

  //guard clause.
  if (!clicked) return;

  //enabling visibility of edit-page
  ebooktemp.style.transition = "500ms";
  ebooktemp.style.visibility = "visible";
  ebooktemp.style.transform = "translateX(0%)";
};

editeaseout = () => {
    
  ebooktemp.style.transition = "500ms";
  ebooktemp.style.visibility = "hidden";
  ebooktemp.style.transform = "translateX(-100%)";
};
/////////////////////////////////////////////////////////////////
//Event Listeners
addit.addEventListener("click", easein);
adduserbook.addEventListener("click", easeout);
vcancel.addEventListener("click", easeout);
vreadlist.addEventListener("click", editeasein);
veditthisbook.addEventListener("click", editeaseout);
veilldoitlater.addEventListener("click", editeaseout);
vdeleter.addEventListener("click", editeaseout);
