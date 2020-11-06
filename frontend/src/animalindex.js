// ***** golbal constants so i don't need to repeat myself 
const BASE_URL = 'http://localhost:3000'
const main_animal = document.getElementById("main-animal")
const createAnimalFormDiv = document.getElementById("animal-form")


// ***** startup routine => make fetch to get initial data
document.addEventListener("DOMContentLoaded", () => {
    clickableLinks()
})

// ****** requests to backend

function fetchSingleAnimal(){
    event.preventDefault()
    const id = event.target.dataset.id 
    clearContent()
    createAnimalFormDiv.innerHTML = ''
    fetch(BASE_URL +  '/animals/' + id)
    .then(response => response.json())
    .then(ani => {
        const an = new An(ani)
        main_animal.querySelector("ul").innerHTML += an.displaySingleAnimal()
        // kd.renderAnimals()

    })
}

function fetchAllAnimal(){
    createAnimalFormDiv.innerHTML = ""
    clearContent()
    fetch(BASE_URL + '/animals')
    .then(response => response.json())
    .then(animals => {
        animals.forEach(ani => { 
            const an =  new An(ani)
            main_animal.querySelector("ul").innerHTML += an.renderAnimalName()
            // kd.renderAnimals()
        })
         clickableLinks()
        })  

}

function createNewAnimal(){
    event.preventDefault()
    clearContent()
    const animal = {
        name: document.getElementById("name").value,
        phylum: document.getElementById("phylum").value,
        order: document.getElementById("order").value,
        species: document.getElementById("species").value,
        kingdom_id: document.getElementById("kingdom_id").value
    }

    const configobj = {
        method: 'POST',
        body: JSON.stringify(animal),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    fetch(BASE_URL + '/animals', configobj)
    .then(response => response.json())
    .then(animal => {
        const an = new An(animal)
        main_animal.querySelector("ul").innerHTML += an.displaySingleAnimal()
        clickableLinks()
        createAnimalFormDiv.innerHTML = ""
        
    })
}


// ******* Helpers for generating HTML and adding event listeners 
function clickableLinks(){
    const an = document.querySelectorAll("#main-animal li a")
    an.forEach((element => { element.addEventListener('click', fetchSingleAnimal )})) 
    document.getElementById("add-animal-form").addEventListener('click', displayFormAnimal)
    document.getElementById("animals").addEventListener('click', fetchAllAnimal)
}

function clearContent(){
    const animalUl = document.querySelector("#main-animal ul")
    animalUl.innerHTML = ""
}

function displayFormAnimal(){
    clearContent() 
    createAnimalFormDiv.innerHTML = ""
    const html = makeAnimalForm()
    createAnimalFormDiv.innerHTML += html 
    document.querySelector("form").addEventListener("submit", createNewAnimal)
}

function makeAnimalForm(){
 return (`
        <form>
            Animal Name : <input type="text" id="name">
            <br>
            <br>
            Phylum : <input type="text" id="phylum">
            <br>
            <br>
            Order : <input type="text" id="order">
            <br>
            <br>
            Species : <input type="text" id="species">
            <br>
            <br>
            Kingdom : <input type="text" id="kingdom_id">
            <br>
            <br>
            <input type="submit">
        </form> 
 
    `)
}
