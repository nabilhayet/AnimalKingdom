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



// ******* Helpers for generating HTML and adding event listeners 

function displayForm(){
    event.preventDefault()
    
}

function attachClickToLinks(){
    const kingdoms = document.querySelector("li a")
    kingdoms.forEach((element => {
        element.addEventListener('click', displaySingleKingdom())
    }));
    document.getElementById("add-kingdom-form").addEventListener('click', displayForm)
    document.getElementById("kingdoms").addEventListener('click', getKingdoms())
}

function displayKingdoms(kingdom){
    return (`
        <li>
        <a href="" data-id="${kingdom.id}">${kingdom.Body_Form}</a> 
        </li>
    `)

}