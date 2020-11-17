class Kd {
    static collection = []
    constructor(kingdom){
        this.id = kingdom.id 
        this.name = kingdom.name 
        this.body_form = kingdom.body_form
        this.mitochondria = kingdom.mitochondria
        this.cell_wall = kingdom.cell_wall 
        this.nutrition = kingdom.nutrition
        this.nervous_system = kingdom.nervous_system
        this.animals = kingdom.animals 
        Kd.collection.push(this)
    }

    static all(){
        return this.collection;
    }
   

    renderKingdomName(){
        return (`<li id="kingdom-${this.id}">
                    <a href="" data-id="${this.id}">${this.name}</a> 
                </li>
               `
                )
    }

    renderAnimals(){
        // const ul = document.querySelector(`li#kingdom-${this.id} #animals`)
        const ul = document.querySelector("div#main ul ul#animals")
        this.animals.forEach(animal => {
            ul.innerHTML += `<li>${animal.name}</li>` 
        })
    }

    displaySingleKingdom(){
        return (`<h2>Kingdom Name : "${this.name}"</h2>
        <h4>Body Type : "${this.body_form}"</h4>
        <h4>Mitochondria : "${this.mitochondria}"</h4>
        <h4>Cell Wall : "${this.cell_wall}"</h4>
        <h4>Nutrition : "${this.nutrition}"</h4>
        <h4>Nervous System : "${this.nervous_system}"</h4>
        <hr>
        <h4>Animals</h4> 
        <ul id="animals">
        </ul>
        `)
    }
}