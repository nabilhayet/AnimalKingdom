class An {
    constructor(animal){
        this.id = animal.id 
        this.name = animal.name 
        this.phylum = animal.phylum
        this.order = animal.order
        this.species = animal.species
        this.kingdom = animal.kingdom
    }

    renderAnimalName(){
        return (`<li id="animal-${this.id}">
                    <a href="" data-id="${this.id}">${this.name}</a> 
                </li>`
                )
    }

    displaySingleAnimal(){
        return (`<h2>Animal Name : "${this.name}"</h2>
        <h4>Phylum : "${this.phylum}"</h4>
        <h4>Order : "${this.order}"</h4>
        <h4>Species : "${this.species}"</h4>
        <h4>Kingdom Name : "${this.kingdom}"</h4>
        `)
    }
}