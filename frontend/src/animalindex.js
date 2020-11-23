// ***** golbal constants so i don't need to repeat myself 
const BASE_URLS = 'http://localhost:3000'
const main_animal = document.getElementById("main-animal")
const createAnimalFormDiv = document.getElementById("animal-form")

const main_kingdom = document.querySelector("#main ul")
const divKingdomForm = document.getElementById("kingdom-form")


// ***** startup routine => make fetch to get initial data
document.addEventListener("DOMContentLoaded", () => {
    // fetchAllKingdoms()
    clickableLinksAnimals()
    
})

// ****** requests to backend

// function fetchAllKingdoms(){
//     fetch(BASE_URLS + '/kingdoms')
//     .then(response => response.json())
//     .then(kingdoms => {
//         Kd.all().length=0 
//         kingdoms.forEach(k => { 
//             const an = new Kd(k)
//         })
//    })
// }

function removeAnimal(){
    event.preventDefault()
    const id =  event.target.dataset.id 
    const configobj = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    fetch(BASE_URLS +  '/animals/' + id, configobj)
    .then(event.target.parentElement.remove())
}

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

    })
}

function fetchAllAnimal(){
    createAnimalFormDiv.innerHTML = ""
    clearContentAnimal()
    fetch(BASE_URLS + '/animals')
    .then(response => response.json())
    .then(animals => {
        An.collection.length=0 
        animals.forEach(ani => { 
            const an =  new An(ani)
            main_animal.querySelector("ul").innerHTML += an.renderAnimalName()
        })
        const html = `<button id="sort">sort</button>`
        createAnimalFormDiv.innerHTML = html 
        document.getElementById("sort").addEventListener('click', myFunc)
         clickableLinksAnimals()
        })  

}

function myFunc(){
    createAnimalFormDiv.innerHTML = ""
    clearContentAnimal()
    An.collection.sort(compare)
    An.collection.forEach(a => {
        main_animal.querySelector("ul").innerHTML += a.renderAnimalName()
 })
}

function compare(a,b){
    const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison * -1;
}

function createNewAnimal(){
    const e = document.querySelector("select#king")
    event.preventDefault()
    clearContentAnimal()
    const animal = {
        name: document.querySelector("form#animal #name").value,
        phylum: document.querySelector("form#animal #phylum").value,
        order: document.querySelector("form#animal #order").value,
        species: document.querySelector("form#animal #species").value,
        kingdom_id: e.options[e.selectedIndex].id
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
        const anm = new An(animal)
        main_animal.querySelector("ul").innerHTML += anm.displaySingleAnimal()
        clickableLinksAnimals()
        createAnimalFormDiv.innerHTML = ""
    })
}


// ******* Helpers for generating HTML and adding event listeners 

function editAnimal(){
    const e = document.querySelector("select#king")
    createAnimalFormDiv.innerHTML= ''
    event.preventDefault()
    clearContentAnimal()
    const id = event.target.dataset.id
    const animal = {
        name: event.target.querySelector("#name").value,
        phylum: event.target.querySelector("#phylum").value,
        order: event.target.querySelector("#order").value,
        species: event.target.querySelector("#species").value,
        kingdom_id: e.options[e.selectedIndex].id
    }
    const configobj = {
        method: "PATCH",
        body: JSON.stringify(animal),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    fetch(BASE_URLS +  '/animals/' + id, configobj)
    .then(response => response.json())
    .then(animal => {
        const an = new An(animal)
        main_animal.querySelector("ul").innerHTML += an.displaySingleAnimal()
        clickableLinksAnimals()

    })

}

function updateAnimal(){
    event.preventDefault()
    const id = event.target.dataset.id 
    clearContentAnimal()
    createAnimalFormDiv.innerHTML = ''
        fetch(BASE_URLS + `/animals/${id}`)
        .then(response => response.json())
        .then(animal => {
            const html = updateAnimalForm(animal)
            createAnimalFormDiv.innerHTML = html 
            fetch(BASE_URLS + '/kingdoms')
            .then(response => response.json())
            .then(kingdoms => {
                Kd.all().length=0 
                kingdoms.forEach(k => { 
                    const an = new Kd(k)
                })
            const allKing = Kd.all()
            const v = document.querySelector("select#king")
            const c = v.options[v.selectedIndex].value 

        for(let i=0;i<allKing.length;i++){
            const b = allKing[i]

            if(b.name !== c){
                const option =  document.createElement("option")
                option.textContent = b.name 
                option.value = b.name 
                option.id = i+1 
                v.appendChild(option)
            }
        }
    })
    document.querySelector("form").addEventListener('submit', editAnimal)
   })
}

function updateAnimalForm(animal){
    return (` <form data-id=${animal.id}>
        Animal Name : <input type="text" id="name" value=${animal.name}>
        <br>
        <br>
        Phylum : <input type="text" id="phylum" value=${animal.phylum}>
        <br>
        <br>
        Order : <input type="text" id="order" value=${animal.order}>
        <br>
        <br>
        Species : <input type="text" id="species" value=${animal.species}>
        <br>
        <br>
        Kingdom : <select id="king" name="king">
                <option value="${animal.kingdom.name}" id="${animal.kingdom.id}">${animal.kingdom.name}</option>
              </select>
        <br>
        <br>
        <input type="submit">
        </form>
        `)
}

function clickableLinksAnimals(){
    const an = document.querySelectorAll("#main-animal li a")
    an.forEach((element => { element.addEventListener('click', fetchSingleAnimal )})) 
    document.getElementById("add-animal-form").addEventListener('click', displayFormAnimal)
    document.getElementById("animals").addEventListener('click', fetchAllAnimal)
    document.querySelectorAll("#delete").forEach(animal => animal.addEventListener('click', removeAnimal))
    document.querySelectorAll("#update").forEach(animal => animal.addEventListener('click', updateAnimal))
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
    getOptions()
    document.querySelector("form#animal").addEventListener("submit", createNewAnimal)
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
                      </select>
            <br>
            <br>
            <button class="btn">submit</button> 
        </form> 
 
    `)
}

function getOptions(){
    fetch(BASE_URLS + '/kingdoms')
    .then(response => response.json())
    .then(kingdoms => {
        Kd.all().length=0 
        kingdoms.forEach(k => { 
            const an = new Kd(k)
        })
    const allKing = Kd.all()
    const v = document.querySelector("select#king")
        for(let i=0; i < allKing.length; i++){
            const b = allKing[i]
            const option =  document.createElement("option")
            option.textContent = b.name 
            option.value = b.name 
            option.id = i+1 
            v.appendChild(option)
        }
    })
}

  