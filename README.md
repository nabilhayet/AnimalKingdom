![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/Restaurant) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/Restaurant) ![GitHub followers](https://img.shields.io/github/followers/nabilhayet) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/Restaurant)                                          
                                        <h1>:bomb: AnimalKingdom :bomb: </h1>
                                                      
This project lets a user create a new kingdom or an animal. After creating, a user can make see all the existing kingdoms or animals with a link. After clicking on a link, the details of a kingdom/animal can be viewed. Updating or deleting an animal option available to the user.

<a href="https://www.youtube.com/watch?v=qN_K-UsMAEo&t=3s">Demo</a>
<a href="https://github.com/nabilhayet/AnimalKingdom/tree/main/frontend">Frontend</a>
<a href="https://github.com/nabilhayet/AnimalKingdom/tree/main/backend">Backend</a>

Table of Contents
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Installing](#installing)
- [Challenges](#challenges)
- [Future-Implementation](#future-implementation)
- [Code-Snippet](#code-snippet)
                               
## Features
<ul>
<li>Full CRUD capabilities for Animals such as</li>
<li>Add a new animal</li>
<li>View all existing animals on this application</li>
<li>Edit/Delete the animals</li>
<li>Full CRUD capabilities for kingdoms such as</li>
<li>Add a new kingdom</li>
<li>View all existing kingdoms on this application</li>
<li>Edit/Delete the kingdoms</li>
<li>Search a perticular kingdom</li>
<li>Sort the animals in descing order</li>
</ul>

## Add Animal
![add_animal](https://user-images.githubusercontent.com/33500404/109560557-08775780-7aaa-11eb-9ced-fb97ad3e9ae6.gif)

## Animal Details
![animal_details](https://user-images.githubusercontent.com/33500404/109560604-1331ec80-7aaa-11eb-9137-d59aa25585e8.gif)

## Delete Animal
![delete_animal](https://user-images.githubusercontent.com/33500404/109560629-1a58fa80-7aaa-11eb-9dfc-a8ea1171e167.gif)

## Search Kingdom
![search_animal](https://user-images.githubusercontent.com/33500404/109560653-22189f00-7aaa-11eb-9b52-9195717467de.gif)

## Sort Animal
![sort_animal](https://user-images.githubusercontent.com/33500404/109560687-2d6bca80-7aaa-11eb-82e0-c6c73468c135.gif)

## Update Animal
![update_animal](https://user-images.githubusercontent.com/33500404/109560723-38265f80-7aaa-11eb-984e-4b85c4b169c4.gif)

## View Animals
![view_animals](https://user-images.githubusercontent.com/33500404/109560744-3f4d6d80-7aaa-11eb-9992-b7d1b96e9a4e.gif)

## View Kingdoms
![view_kingdoms](https://user-images.githubusercontent.com/33500404/109560774-48d6d580-7aaa-11eb-860f-d5f0652ee1ce.gif)


## Tech-Stack
<p>This web app makes use of the following:</p>

* ruby '2.6.1'
* 'active_model_serializers'
* 'rails', '~> 6.0.3', '>= 6.0.3.4'
* 'sqlite3', '~> 1.4'
* 'puma', '~> 4.1'
* 'rack-cors'
* 'byebug'

## Installing
<ul>
<li> Clone this repo to your local machine git clone <this-repo-url></li>
<li> run bundle install to install required dependencies</li>
<li> run rails db:create to create a database locally.</li>
<li> run rails db:migrate to create tables into the database.</li>
<li> run rails db:seed to create seed data.</li>
<li> run rails s to run the server.</li>
</ul>
        
## Challenges
<ul>
<li> Dropdown menu to select a kingdom was not working while creating a new animal in the beginning.</li>
<li> Once it started to work, the next problem i faced was loading each option twice in dropdown menu</li>
<li> Converting vanila js to OO js</li>
<li> I wasn't able to grab the right item while updatting or deleting</li>
</ul>

## Future-Implementation
<ul>
<li> Add bootstrap to make the UI more appealing</li>
<li> Insert image for each animal</li>
<li> Refactor code to reduce fetch calls to backend and remove duplicacy of code</li>
<li> Add filter method </li>
</ul> 

## Code-Snippet 

```
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
```

```
displaySingleAnimal(){
 return (`<h2>Animal Name : "${this.name}"</h2>
 <h4>Phylum : "${this.phylum}"</h4>
 <h4>Order : "${this.order}"</h4>
 <h4>Species : "${this.species}"</h4>
 <h4>Kingdom Name : "${this.kingdom.name}"</h4>
 `)
}
```

```
def show 
 if @animal 
  render json: @animal
 else 
  render json: {status: "error", code:3000, message: "This id does not exist" }
 end 
end 
```

