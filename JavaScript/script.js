//ik or FetchAPI self written try 

const waeterAPI = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
 async function mosamDekhoBro(){
    try {
        let mosam = await fetch(waeterAPI);
        let mosamData = await mosam.json();
        console.log(mosamData.current);
        let currentMosam = mosamData.current;
        let city = document.getElementById("city");
        let time = document.getElementById("time");
        let temp = document.getElementById("temp");
        city.textContent = `Current Temperature: ${currentMosam.temperature_2m}°C`;
        temp.textContent = `Current Wind Speed: ${currentMosam.wind_speed_10m} m/s`;
        time.textContent = `Current Time: ${new Date().toLocaleTimeString()}`;
    }
    catch (error) {
        console.error(`Error fetching weather data:${mosam.status}`, error);
    }
}

mosamDekhoBro();

//An Animation that trigers upon scrol

// let body = document.getElementsByTagName("body");
// body.addEventListener("scroll" , ()=>{
//     body.style.
// })


let opnBtn = document.getElementById("opnpop");

let addBtn = document.getElementById("addBtn");
let popup = document.getElementById("popup");
let list = document.getElementById("items");
opnBtn.addEventListener("click", () => {

    popup.style.display = "block";
});


addBtn.addEventListener("click", () => {

    let list = document.getElementById("items");

    let item = document.getElementById("item").value;

    let li = document.createElement("li");
    let remBtn = document.createElement("button");
    remBtn.textContent = "remove"
    remBtn.classList.add("remBtn");

    li.textContent = item;

    list.appendChild(li);
    list.appendChild(remBtn);

    popup.style.display = "none";
});

let remBtn = document.getElementsByClassName("remBtn");
remBtn.addEventListener("click" , ()=>{
    li.remove();    
})

