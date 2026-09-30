//Password Toogle Script
let passwordToogle = document.getElementById("passwordToogle")
let pswd = document.getElementById("pswd");
let tooglePswd = document.getElementById("tooglePswd");
let toogleIcon = document.getElementById("toogleIcon");

function pswdToogle() {
    if (pswd.type === "password") {
        pswd.type = "text"
        toogleIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjY5MWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leWUgcHJldmlldy1pY29uIj48cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4="

    } else {
        pswd.type = "password";
        toogleIcon.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMjY5MWUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1leWUtb2ZmIHByZXZpZXctaWNvbiI+PHBhdGggZD0iTTEwLjczMyA1LjA3NmExMC43NDQgMTAuNzQ0IDAgMCAxIDExLjIwNSA2LjU3NSAxIDEgMCAwIDEgMCAuNjk2IDEwLjc0NyAxMC43NDcgMCAwIDEtMS40NDQgMi40OSIvPjxwYXRoIGQ9Ik0xNC4wODQgMTQuMTU4YTMgMyAwIDAgMS00LjI0Mi00LjI0MiIvPjxwYXRoIGQ9Ik0xNy40NzkgMTcuNDk5YTEwLjc1IDEwLjc1IDAgMCAxLTE1LjQxNy01LjE1MSAxIDEgMCAwIDEgMC0uNjk2IDEwLjc1IDEwLjc1IDAgMCAxIDQuNDQ2LTUuMTQzIi8+PHBhdGggZD0ibTIgMiAyMCAyMCIvPjwvc3ZnPg=="
    }

}

tooglePswd.addEventListener("click", pswdToogle);

//POPUP made with plain js 

let loginBtn = document.getElementById("pswdBtn");

// setInterval(function () {element.innerHTML += "Hello"}, 1000);

function popupGen() {
    let popup = document.createElement("div");

    popup.classList.add("popup");

    popup.textContent = "This is the Popup made with the plain Js ! Thanks for Login .. ";

    popup.style.cssText = `
    width: 50vw;
    height: 25vh;
    color: chocolate;
    padding: 20px;
    outline : 2px solid chocolate;
    border-radius : 30px:
    display : block;
`;
    passwordToogle.appendChild(popup);

    setTimeout(function () {
        popup.remove();
    }, 2000)
}

loginBtn.addEventListener("click", popupGen);

//scroll triger Animation script

let bulb = document.getElementById("bulb");

function animate() {
    bulb.style.animation = "bulbGlow";
}

window.addEventListener("scroll", animate);

//Add or remove cards 

let finalAddCard = document.getElementById("finalAddCard");
let cardInputPopup = document.getElementById("cardInputPopup");
let cardsection = document.getElementById("cardsection");
let cards = document.getElementById("cards");
let addCard = document.getElementById("addCard");

function openCardInput() {
    cardInputPopup.style.display = "block";
    addCard.style.display = "none";
}

addCard.addEventListener("click", openCardInput);

//lets now make and add card 

let finalAddCard = document.getElementById("finalAddCard");

function addCard() {

    let idItem = document.getElementById("itemId").value();
    let nameItem = document.getElementById("itemName").value();
    let descItem = document.getElementById("itemDesc").value();
    let imgItem = document.getElementById("itemPic").value();


    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let para = document.createElement("p");

    h2.textContent = nameItem;
    para.textContent = descItem;
    card.style.backgroundImage = imgItem

    card.appendChild(h2);
    card.appendChild(para);

    cards.appendChild(card);

    cardInputPopup.style.display = "none";
    addCard.style.display = "block";

}

finalAddCard.addEventListener("click", addCard);