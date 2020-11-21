
1. Project title : The name of this project is AnimalKingdom. This project lets a user to create a new kingdom or an animal. After creating, a user can make see all the existing kingdoms or animals with a link. After clicking on a link, the details of a kingdom/animal can be viewed. Updating or deleting an animal option available to the user.

2. Motivation : This project was created to provide a platform which will allow the user to have the classification of animal world on a single page.Instead of creating two separate application for both, i decided to build something that would connect the both classes.

3. Tech/framework used Built with 1.Ruby 2.HTML 3.CSS 4.OO JS 5. SQL

4. Features --A user can create a kingdom. --A user can view all the kingdoms. --Display details of the kingdom. --A user can create an animal. --A user can view all the animals. --Display details of the animal. Search for a particular kingdom using search box.
--Update an animal from the existing ones. --Delete an animal. 

5. For this project, activerecord, active_model_serializers, puma, sqlite3, rake, rack-cors, byebug, listen, spring-watcher-listen gems were used.

6. Code Snippet :

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

displaySingleAnimal(){
        return (`<h2>Animal Name : "${this.name}"</h2>
        <h4>Phylum : "${this.phylum}"</h4>
        <h4>Order : "${this.order}"</h4>
        <h4>Species : "${this.species}"</h4>
        <h4>Kingdom Name : "${this.kingdom.name}"</h4>
        `)
}

def show 
        if @animal 
            render json: @animal
        else 
            render json: {status: "error", code:3000, message: "This id does not exist" }
        end 
end 

class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :phylum, :order, :species, :kingdom_id 
  belongs_to :kingdom 
end

 
7. Installation -- https://github.com/nabilhayet/AnimalKingdom.git

8. Reference
-- https://learn.co/tracks/online-software-engineering-structured/front-end-web-programming/manipulating-the-dom/changing-the-dom-with-dev-tools-and-javascript
 -- https://learn.co/tracks/online-software-engineering-structured/front-end-web-programming/recognizing-javascript-events/acting-on-events
 -- https://learn.co/tracks/online-software-engineering-structured/front-end-web-programming/communication-with-the-server/use-fetch

9. Tests -- Go to backend folder using cd from parent directory. -- Type 'rails s' to run the server -- open index.html in the browser either by clicking on it or use command 'open index.html' in the terminal. -- To create a kingdom click on 'create kingdom' link in the browser. -- To create an animal click on 'create animal' link in the browser. -- To view all kingdoms click on kingdoms.  -- To view all animals click on animals. -- To view details of a kingdom/animal click on the link name of kingdom/animal.-- To update/delete any particular animal click on 'update/delete' button.

10. Credits -- https://learn.co/tracks/online-software-engineering-structured/front-end-web-programming/rails-as-an-api/new-pokemon-teams-project

