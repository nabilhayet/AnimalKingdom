class An {
    static collection = []
    constructor(animal){
        this.id = animal.id 
        this.name = animal.name 
        this.phylum = animal.phylum
        this.order = animal.order
        this.species = animal.species
        this.kingdom = animal.kingdom
        An.collection.push(this)
    }
   


// static all(){
//     return this.collection;
// }

    renderAnimalName(){
        return (`<li id="animal-${this.id}">
                    <a href="" data-id="${this.id}">${this.name}</a> 
                    <button id="delete" data-id="${this.id}">Delete</button>
                    <button id="update" data-id="${this.id}">Update</button>
                </li>`
                )
    }

    displaySingleAnimal(){
        return (`<h2>Animal Name : "${this.name}"</h2>
        <h4>Phylum : "${this.phylum}"</h4>
        <h4>Order : "${this.order}"</h4>
        <h4>Species : "${this.species}"</h4>
        <h4>Kingdom Name : "${this.kingdom.name}"</h4>
        `)
    }
}