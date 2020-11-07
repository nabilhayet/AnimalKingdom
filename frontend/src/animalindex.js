// ***** golbal constants so i don't need to repeat myself 
const BASE_URLS = 'http://localhost:3000'
const main_animal = document.getElementById("main-animal")
const createAnimalFormDiv = document.getElementById("animal-form")

const main_kingdom = document.querySelector("#main ul")
const divKingdomForm = document.getElementById("kingdom-form")


// ***** startup routine => make fetch to get initial data
document.addEventListener("DOMContentLoaded", () => {
    clickableLinksAnimals()
})

// ****** requests to backend

function fetchSingleAnimal(){
    event.preventDefault()
    const id = event.target.dataset.id 
    clearContentAnimal()
    createAnimalFormDiv.innerHTML = ''
    fetch(BASE_URLS +  '/animals/' + id)
    .then(response => response.json())
    .then(ani => {
        const an = new An(ani)
        main_animal.querySelector("ul").innerHTML += an.displaySingleAnimal()
        // kd.renderAnimals()

    })
}

function fetchAllAnimal(){
    createAnimalFormDiv.innerHTML = ""
    clearContentAnimal()
    fetch(BASE_URLS + '/animals')
    .then(response => response.json())
    .then(animals => {
        animals.forEach(ani => { 
            const an =  new An(ani)
            main_animal.querySelector("ul").innerHTML += an.renderAnimalName()
            // kd.renderAnimals()
        })
         clickableLinksAnimals()
        })  

}

function createNewAnimal(){
    event.preventDefault()
    clearContentAnimal()
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

    fetch(BASE_URLS + '/animals', configobj)
    .then(response => response.json())
    .then(animal => {
        const an = new An(animal)
        main_animal.querySelector("ul").innerHTML += an.displaySingleAnimal()
        clickableLinksAnimals()
        createAnimalFormDiv.innerHTML = ""
        
    })
}


// ******* Helpers for generating HTML and adding event listeners 
function clickableLinksAnimals(){
    const an = document.querySelectorAll("#main-animal li a")
    an.forEach((element => { element.addEventListener('click', fetchSingleAnimal )})) 
    document.getElementById("add-animal-form").addEventListener('click', displayFormAnimal)
    document.getElementById("animals").addEventListener('click', fetchAllAnimal)
}

function clearContentAnimal(){
    main_kingdom.innerHTML = ''
    divKingdomForm.innerHTML = ''
    const animalUl = document.querySelector("#main-animal ul")
    animalUl.innerHTML = ""
}

function displayFormAnimal(){
    clearContentAnimal() 
    createAnimalFormDiv.innerHTML = ""
    const html = makeAnimalForm()
    createAnimalFormDiv.innerHTML += html 
    document.querySelector("form#animal").addEventListener("submit", createNewAnimal)
}

function getOptions(){
    fetch(BASE_URLS + '/kingdoms')
    .then(response => response.json())
    .then(animals => {
        animals.forEach(ani => { 
            // const an =  new An(ani)
            return (`
            <option value="ani.name">${ani.name}</option>
            `)
          
        })
        clickableLinksAnimals()
       })  
    }

function makeAnimalForm(){
 return (`
        <form id="animal">
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
            Kingdom : <select id="king" name="king">
                        "${getOptions()}"
                      </select>
            <br>
            <br>
            <input type="submit">
        </form> 
 
    `)
}
