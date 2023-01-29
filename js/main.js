const coll = document.getElementsByClassName("collapsible");
const changeTheme = document.querySelector(".change-theme")
const scroll = document.querySelector(".scroll")
const justBtn= document.querySelector(".just-btn")

let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


changeTheme.addEventListener('click', function(e){
  document.body.classList.toggle('back-color');
})


/*justBtn.addEventListener("click", function(event) {
  console.log(event.type + " на " + event.currentTarget);
  console.log("Координаты: " + event.clientX + ":" + event.clientY)
})*/

const searchBtn = document.querySelector(".header__search");
const searchField = document.querySelector(".form__input-mobile");
searchBtn.addEventListener("click", function() {
  searchField.classList.toggle('hidden-class');
})

const burgerBtn = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const menu = document.querySelector(".header__list").cloneNode(1);

burgerBtn.addEventListener("click", openPopup);

function openPopup (e) {
  e.preventDefault();
  popup.classList.toggle('open');
  renderPopUp();
  document.body.classList.toggle("noscroll");
}

function renderPopUp() {
  popup.appendChild(menu);
}
