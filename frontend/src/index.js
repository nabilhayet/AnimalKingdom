// ***** golbal constants so i don't need to repeat myself 
const BASE_URL = 'http://localhost:3000'
const main = document.getElementById("main")
const createKingdomFormDiv = document.getElementById("kingdom-form")

const ulAnimal = document.querySelector("#main-animal ul")
const divFormAnimal = document.getElementById("animal-form")


// ***** startup routine => make fetch to get initial data
document.addEventListener("DOMContentLoaded", () => {
    clickableLinks()
    // getSelectOptions()
})

// ****** requests to backend

function fetchSingleKingdom(){
    event.preventDefault()
    const id = event.target.dataset.id 
    clearContent()
    createKingdomFormDiv.innerHTML = ''
    fetch(BASE_URL +  '/kingdoms/' + id)
    .then(response => response.json())
    .then(kingd => {
        const kd = new Kd(kingd)
        main.querySelector("ul").innerHTML += kd.displaySingleKingdom()
        kd.renderAnimals()

    })
}

function fetchAllKingdom(){
    createKingdomFormDiv.innerHTML = ""
    clearContent()
    fetch(BASE_URL + '/kingdoms')
    .then(response => response.json())
    .then(kingdoms => {
        Kd.all().length=0 
        kingdoms.forEach(kingd => { 
            const kd =  new Kd(kingd)
            main.querySelector("ul").innerHTML += kd.renderKingdomName()
            
        })
        const html = `<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">`
        createKingdomFormDiv.innerHTML = html 
         clickableLinks()
        })  

}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector("div#main ul");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function createNewKingdom(){
    event.preventDefault()
    clearContent()
    const kingdom = {
        name: document.getElementById("name").value,
        body_form: document.getElementById("body_form").value,
        mitochondria: document.getElementById("mitochondria").value,
        cell_wall: document.getElementById("cell_wall").value,
        nutrition: document.getElementById("nutrition").value,
        nervous_system: document.getElementById("nervous_system").value
    }

    const configobj = {
        method: 'POST',
        body: JSON.stringify(kingdom),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    fetch(BASE_URL + '/kingdoms', configobj)
    .then(response => response.json())
    .then(kingdom => {
        const kd = new Kd(kingdom)
        main.querySelector("ul").innerHTML += kd.displaySingleKingdom()
        clickableLinks()
        createKingdomFormDiv.innerHTML = ""
        
    })
}


// ******* Helpers for generating HTML and adding event listeners 
function clickableLinks(){
    const kdoms = document.querySelectorAll("#main li a")
    kdoms.forEach((element => { element.addEventListener('click', fetchSingleKingdom )})) 
    document.getElementById("add-kingdom-form").addEventListener('click', displayForm)
    document.getElementById("kingdoms").addEventListener('click', fetchAllKingdom)
}

function clearContent(){
    ulAnimal.innerHTML = ''
    divFormAnimal.innerHTML = ''
    const kingdomUl = document.querySelector("#main ul")
    kingdomUl.innerHTML = ""
}

function displayForm(){
    clearContent() 
    createKingdomFormDiv.innerHTML = ""
    const html = makeKingdomForm()
    createKingdomFormDiv.innerHTML += html 
    document.querySelector("form").addEventListener("submit", createNewKingdom)
}

function makeKingdomForm(){
 return (`
        <form>
            Kingdom Name : <input type="text" id="name">
            <br>
            <br>
            Body Form : <input type="text" id="body_form">
            <br>
            <br>
            Mitochondria : <input type="text" id="mitochondria">
            <br>
            <br>
            Cell_Wall : <input type="text" id="cell_wall">
            <br>
            <br>
            Nutrition : <input type="text" id="nutrition">
            <br>
            <br>
            Nervous_System : <input type="text" id="nervous_system">
            <br>
            <br>
            <button class="btn">submit</button> 
        </form> 
        `)
}
