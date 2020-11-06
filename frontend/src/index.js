// ***** golbal constants so i don't need to repeat myself 
const BASE_URL = 'http://localhost:3000'
const main = document.getElementById("main")
const kingdomFormDiv = document.getElementById("kingdom-form")


// ***** startup routine => make fetch to get initial data
document.addEventListener("DOMContentLoaded", () => {
    // getKingdoms()
    attachClickToLinks()
})

// ****** requests to backend

function displaySingleKingdom(){
    event.preventDefault()
    const id = event.target.dataset.id 
    clearul()
    kingdomFormDiv.innerHTML = ''
    fetch(BASE_URL +  '/kingdoms/' + id)
    .then(response => response.json())
    .then(kingdom => {
        const kd = new Kd(kingdom)
        main.querySelector("ul").innerHTML += kd.renderKingdom()
        kd.renderULs()

    })
}

function getKingdoms(){
    kingdomFormDiv.innerHTML = ""
    clearul()
    fetch(BASE_URL + '/kingdoms')
    .then(response => response.json())
    .then(kingdoms => {
        kingdoms.forEach(kingdom => { 
            const kd =  new Kd(kingdom)
            main.querySelector("ul").innerHTML += kd.renderKingdom()
            kd.renderULs()
        })
        // main.querySelector("ul").innerHTML += kingdoms.map((kingdom) => displayKingdoms(kingdom)).join("")
        attachClickToLinks()
        })  

}

function createKingdom(){
    event.preventDefault()
    clearul()
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
        main.querySelector("ul").innerHTML += kd.renderKingdom()
        attachClickToLinks()
        kingdomFormDiv.innerHTML = ""
        
    })
}


// ******* Helpers for generating HTML and adding event listeners 

// function addKingdomAnimals(kingdom){
//     const ul = document.querySelector(`li#kingdom-${kingdom.id} #animals`)
//     kingdom.animals.forEach(animal => {
//         ul.innerHTML += `<li>${animal.name}</li>`
//     })
// }

function clearul(){
    const kingdomUl = document.querySelector("#main ul")
    kingdomUl.innerHTML = ""
}

function displayForm(){
    clearul() 
    kingdomFormDiv.innerHTML = ""
    const html = makeKingdomForm()
    kingdomFormDiv.innerHTML += html 
    document.querySelector("form").addEventListener("submit", createKingdom)
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
            <input type="submit">
        </form> 
 
    `)
}

function showKingdom(kingdom){
   return(`
   <h3>Kingdom Name : ${kingdom.name}</h3> 
   <h4>Body_Form : ${kingdom.body_form}</h4> 
   <h4>Mitochondria : ${kingdom.mitochondria}</h4> 
   <h4>Cell_Wall : ${kingdom.cell_wall}</h4> 
   <h4>Nutrition : ${kingdom.nutrition}</h4> 
   <h4>Nervous_System : ${kingdom.nervous_system}</h4>
        `) 
}

function attachClickToLinks(){
    const kingdoms = document.querySelectorAll("li a")

    kingdoms.forEach((element => { element.addEventListener('click', displaySingleKingdom )})) 
    document.getElementById("add-kingdom-form").addEventListener('click', displayForm)
    document.getElementById("kingdoms").addEventListener('click', getKingdoms)
}

// function displayKingdoms(kingdom){
//     return (`<li id="kingdom-${kingdom.id}">
//                 <a href="" data-id="${kingdom.id}">${kingdom.name}</a> 
//                 <ul id="animals">
//                 </ul>
//             </li>`
//             )

// }

// Classes 
class Kd {
    constructor(kingdom){
        this.id = kingdom.id 
        this.name = kingdom.name 
        this.body_form = kingdom.body_form
        this.mitochondria = kingdom.mitochondria
        this.nutrition = kingdom.nutrition
        this.nervous_system = kingdom.nervous_system
        this.animals = kingdom.animals 
    }

    renderKingdom(){
        return (`<li id="kingdom-${this.id}">
                     <a href="" data-id="${this.id}">${this.name}</a> 
                     <ul id="animals">
                       </ul>
                    </li>`
                )
    }

    renderULs(){
        const ul = document.querySelector(`li#kingdom-${this.id} #animals`)
        this.animals.forEach(animal => {
            ul.innerHTML += `<li>${animal.name}</li>` 
        })
    }
}