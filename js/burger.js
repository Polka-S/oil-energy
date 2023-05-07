const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup-menu');
const body = document.body;
const menu = document.querySelector('#menu').cloneNode(1);
// const logo = document.querySelector('#header-logo').cloneNode(1);
// const btns = document.querySelector('#header__btns').cloneNode(1);

burger.addEventListener("click", burgerHandler);
function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
    renderPopupTwo();
    checkLinks();
}

function renderPopup() {
    popup.appendChild(menu);
}

// function renderPopupTwo() {
//     popup.appendChild(btns);
// }

const links = Array.from(menu.children);
// const tabs = Array.from(btns.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// tabs.forEach((tab) => {
//     tab.addEventListener("click", closeOnClick);
// })

function closeOnClick() {
    popup.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("noscroll");
}