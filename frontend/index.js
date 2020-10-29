// ***** golbal constants so i don't need to repeat myself 
const BASE_URL = 'http://localhost:3000'
const main = document.getElementById("main")
const kingdomFormDiv = document.getElementById("kingdom-form")



// ***** startup routine => make fetch to get initial data
document.addEventListener("DOMContentLoaded", () => {
    getKingdoms()
})



// ****** requests to backend

function displaySingleKingdom(){
    event.preventDefault()
    const id = event.target.dataset.id 
    main.innerHTML = ""
    fetch(BASE_URL +  '/kingdoms/' + id)
    .then(response => response.json())
    .then(kingdom => {
        main.innerHTML += showKingdom(kingdom)

    })
}

function getKingdoms(){
    kingdomFormDiv.innerHTML = " "
    main.innerHTML = ""
    fetch(BASE_URL + '/kingdoms')
    .then(response => response.json())
    .then(kingdoms => {
        main.innerHTML += kingdoms.map((kingdom) => displayKingdoms(kingdom)).join("")
        attachClickToLinks()
        })  

}

function createKingdom(){
    event.preventDefault()

    const kingdom = {
        name: document.getElementById("name").value,
        Body_Form: document.getElementById("Body_Form").value,
        Mitochondria: document.getElementById(" Mitochondria").value,
        Cell_Wall: document.getElementById("Cell_Wall").value,
        Nutrition: document.getElementById("Nutrition").value,
        Nervous_System: document.getElementById("Nervous_System").value
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
        main.innerHTML += displayKingdoms(kingdom)
        kingdomFormDiv = ""
    })
}



// ******* Helpers for generating HTML and adding event listeners 

function displayForm(){
    kingdomFormDiv.innerHTML = ""
    main.innerHTML = ""
    const html = makeKingdomForm()
    kingdomFormDiv.innerHTML += html 
    document.querySelector("form").addEventListener("submit", createKingdom)
}

function makeKingdomForm(){
 return (`
        <form>
            Kingdom Name : <input type="text" id="name">
            <br>
            Body Form : <input type="text" id="Body_Form">
            <br>
            Mitochondria : <input type="text" id="Mitochondria">
            <br>
            Cell_Wall : <input type="text" id="Cell_Wall">
            <br>
            Nutrition : <input type="text" id=" Nutrition">
            <br>
            Nervous_System : <input type="text" id="Nervous_System ">

 
    `)
}

function showKingdom(kingdom){
   return(`
   <h3>Kingdom Name : ${kingdom.name}</h3> 
   <h4>Body_Form : ${kingdom.Body_Form}</h4> 
   <h4>Mitochondria : ${kingdom.Mitochondria}</h4> 
   <h4>Cell_Wall : ${kingdom.Cell_Wall}</h4> 
   <h4>Nutrition : ${kingdom.Nutrition}</h4> 
   <h4>Nervous_System : ${kingdom.Nervous_System}</h4>
        `) 
}

function attachClickToLinks(){
    const kingdoms = document.querySelectorAll("li a")

    kingdoms.forEach((element => { element.addEventListener('click', displaySingleKingdom )})) 
    document.getElementById("add-kingdom-form").addEventListener('click', displayForm)
    document.getElementById("kingdoms").addEventListener('click', getKingdoms)
}

function displayKingdoms(kingdom){
    return (`
        <li>
        <a href="" data-id="${kingdom.id}">${kingdom.name}</a> 
        </li>
    `)

}