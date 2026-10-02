//=====================Password Toogle Script=========================
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

//=================================POPUP made with plain js================================ 

let loginBtn = document.getElementById("pswdBtn");
let pswdContainer = document.getElementById("pswdContainer");
// setInterval(function () {element.innerHTML += "Hello"}, 1000);

function popupGen() {

    pswdContainer.style.display = "none";

    // Create a popup prent div and set its attributes and styles
    let popup = document.createElement("div");
    popup.setAttribute("id", "popup");
    popup.textContent = "Hurrrrraaahhhhh........! We Have Magically Made a Popup for you ! Its Made with Plain JS and CSS. It will Disappear in 5 Seconds !";

    // Create a timer element and set its initial value and styles
    let timer = document.createElement("span");
    let seconds = 5;
    timer.textContent = ` (${seconds}s)`;
    timer.style.color = "#ef4444";
    timer.style.fontWeight = "bold";
    timer.style.marginLeft = "8px";

    let interval = setInterval(function () {
        seconds--;
        timer.textContent = seconds > 0 ? ` (${seconds}s)` : " (Done!)";
        if (seconds <= 0) {
            clearInterval(interval);
        }
    }, 1000);

    popup.appendChild(timer);
    passwordToogle.appendChild(popup);

    // Set a timeout to remove the popup after 5 seconds
    setTimeout(function () {
        clearInterval(interval);
        popup.remove();
        pswdContainer.style.display = "flex";
    }, 5000);
}

loginBtn.addEventListener("click", popupGen);

//=======================scroll triger Animation script==============================

let bulb = document.getElementById("bulb");

function animate() {
    bulb.style.animation = "bulbGlow";
}

window.addEventListener("scroll", animate);

//====================================================================================
// ===========================Cards Section==============================================
// ======================================================================================

// ================= Task List =================

let taskList = [];


// ================= Elements =================

let finalAddCard = document.getElementById("finalAddCard");
let cardInputPopup = document.getElementById("cardInputPopup");
let cards = document.getElementById("cards");
let addCard = document.getElementById("addCard");

let search = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");


// ================= ID Generator =================

let itemId = 0;


// ================= Open Card Popup =================

function openCardInput() {

    cardInputPopup.style.display = "block";
    addCard.style.display = "none";

    // Generate ID
    let idOfItem = `task-${++itemId}`;

    // Put generated ID into input
    document.getElementById("itemId").value = idOfItem;
}

addCard.addEventListener("click", openCardInput);


// ================= Create Card =================

function createCard(event) {

    // Stop form from refreshing page
    event.preventDefault();


    // ================= Get Input Values =================

    let idItem = document.getElementById("itemId").value;
    let nameItem = document.getElementById("itemName").value.trim();
    let descItem = document.getElementById("itemDesc").value.trim();
    let imgItem = document.getElementById("itemPic").value.trim();


    // Don't create empty card
    if (!nameItem) {
        alert("Please enter an item name.");
        return;
    }


    // ================= Create Task Object =================

    let task = {
        id: idItem,
        name: nameItem,
        description: descItem,
        image: imgItem
    };


    // ================= Add Task To Array =================

    taskList.push(task);


    // ================= Create Card =================

    let card = document.createElement("div");

    let h2 = document.createElement("h2");

    let para = document.createElement("p");

    let removeBtn = document.createElement("button");


    // Give card its ID
    card.setAttribute("id", idItem);

    // Card dimensions layout
    card.style.width = "280px";
    card.style.minHeight = "260px";
    card.style.display = "flex";
    card.style.flexDirection = "column";

    // Add background image
    if (imgItem) {
        card.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("${imgItem}")`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
    }

    // ================= Card Content =================

    h2.textContent = nameItem;
    para.textContent = descItem;
    removeBtn.textContent = "Remove Task";



    // ================= Add Elements To Card =================

    card.appendChild(h2);
    card.appendChild(para);
    card.appendChild(removeBtn);


    // ================= Add Card To Page =================

    cards.appendChild(card);


    // ================= Remove Card =================

    removeBtn.addEventListener("click", function () {

        // Remove from taskList
        taskList = taskList.filter(function (task) {
            return task.id !== idItem;
        });


        // Remove card from browser
        card.remove();


        console.log(taskList);
    });


    // ================= Close Popup =================

    cardInputPopup.style.display = "none";

    addCard.style.display = "block";


    // ================= Clear Inputs =================

    document.getElementById("itemId").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("itemDesc").value = "";
    document.getElementById("itemPic").value = "";


    console.log(taskList);
}


// ================= Add Card =================

finalAddCard.addEventListener("click", createCard);


// =====================================================
// ================= SEARCH FUNCTION ====================
// =====================================================

function searchTasks() {

    let searchValue = search.value.toLowerCase().trim();


    // Get all cards
    let allCards = cards.children;


    for (let card of allCards) {

        let task = taskList.find(function (task) {
            return task.id === card.id;
        });


        if (!task) {
            continue;
        }


        let taskName = task.name.toLowerCase();

        let taskDescription = task.description.toLowerCase();


        // Search name OR description
        if (
            taskName.includes(searchValue) ||
            taskDescription.includes(searchValue)
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }
    }
}


// Search while typing
search.addEventListener("input", searchTasks);


// Search button
searchBtn.addEventListener("click", searchTasks);


//====================Strings here =======================================

// split, trim, replace, toLowerCase, toUpperCase

let str = "InvexTech";

let uprCaseStr = str.toUpperCase;
console.log(uprCaseStr);

let lwrCaseStr = str.toLowerCase;
console.log(lwrCaseStr);

// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// Propert access is read only, but str[0] = "A" gives no error in "sloppy mode".

let newStr = new String("InvextTech Company");

// Do not create String objects.
// The new keyword complicates the code and slows down execution speed.
// String objects can produce unexpected results:
// there is big promblem in comparing primitivr and object string using == & ====
// both == and === gives different output



// String Templates
// Template Strings
// Template Literals
// Beloved child has many names

// templete strings allow single and double quotes in it without escape sequnence characters , 
// these are made with  backticks 
// and allow interploation of js and js expressions using ${}


//=========================Strings usedd to make JS elements======================
// <!DOCTYPE html>
// <html>
// <body>
// <h1>JavaScript Template Strings</h1>

// <p id="demo"></p>

// <script>
// let header = "Template Strings";
// let tags = ["template strings", "javascript", "es6"];

// let html = `<h2>${header}</h2><ul>`;

// for (const x of tags) {
//   html += `<li>${x}</li>`;
// }

// html += `</ul>`;
// document.getElementById("demo").innerHTML = html;
// </script>

// </body>
// </html>

// =================String Methods=========================

// trip() -> removes white spaces from both the the start aand end of the string 
// there are also trimStart() and trimEnd()

//padStart() and padEnd() --> padStart(4 , "X")
// toString() method converts numbers to string Data type (used to pad a number)

// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.
//repaet(n)

// The replace() method replaces a specified value with another value in a string:
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "InvexTech");
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
//replace() metho is case sensitive

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// let text = "Please visit Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");

// Regular expressions are written without quotes.
// To replace all matches, use a regular expression with a /g flag (global match):
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");


// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// not supported by INternetExplorer

