![GitHub Repo stars](https://img.shields.io/github/stars/nabilhayet/Restaurant) ![GitHub forks](https://img.shields.io/github/forks/nabilhayet/Restaurant) ![GitHub followers](https://img.shields.io/github/followers/nabilhayet) ![Bitbucket open issues](https://img.shields.io/bitbucket/issues/nabilhayet/Restaurant)                                          
                                        <h1>:bomb: AnimalKingdom :bomb: </h1>
                                                      
This project lets a user to create a new kingdom or an animal. After creating, a user can make see all the existing kingdoms or animals with a link. After clicking on a link, the details of a kingdom/animal can be viewed. Updating or deleting an animal option available to the user.

<a href="https://www.youtube.com/watch?v=qN_K-UsMAEo&t=3s">Demo</a>

Table of Contents
<ol>
   <li><a id="user-content-features" href="#features">Features</a></li>
    <li><a id="user-content-tech-stack" href="#tech stack">Tech Stack</a></li>
    <li><a id="user-content-installing" href="#installing">Installing</a></li>
    <li><a id="user-content-challenges" href="#challenges">Challenges</a></li>
    <li><a id="user-content-future-implementation" href="#future-implementation">Future Implementation</a></li>
    <li><a id="user-content-code-snippet" href="#code-snippet">Code Snippet</a></li>
</ol>
                               
<h3><a class="anchor" aria-hidden="true" href="#features"></a>Features</h3>
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

## Signup 

![dem](https://user-images.githubusercontent.com/33500404/109376302-97f5ee00-7891-11eb-89aa-6fdfd054c8c9.gif)


<h3><a id="user-content-tech-stack" class="anchor" aria-hidden="true" href="#tech-stack"></a>Tech Stack</h3>
<p>This web app makes use of the following:</p>

* ruby '2.6.1'
* 'active_model_serializers'
* 'rails', '~> 6.0.3', '>= 6.0.3.4'
* 'sqlite3', '~> 1.4'
* 'puma', '~> 4.1'
* 'rack-cors'
* 'byebug'

<h3><a id="user-content-installing" class="anchor" aria-hidden="true" href="#installing"></a>Installing</h3>
<ul>
<li> Clone this repo to your local machine git clone <this-repo-url></li>
<li> run bundle install to install required dependencies</li>
<li> run rails db:create to create a database locally.</li>
<li> run rails db:migrate to create tables into the database.</li>
<li> run rails db:seed to create seed data.</li>
<li> run rails s to run the server.</li>
</ul>
        
<h3><a id="user-content-challenges" class="anchor" aria-hidden="true" href="#challenges"></a>Challenges</h3>
<ul>
<li> Dropdown menu to select a kingdom was not working while creating a new animal in the beginning.</li>
<li> Once it started to work, the next problem i faced was loading each option twice in dropdown menu</li>
<li> Converting vanila js to OO js</li>
<li> I wasn't able to grab the right item while updatting or deleting</li>
</ul>

<h3><a id="user-content-future-implementation" class="anchor" aria-hidden="true" href="#future-implementation"></a>Future-Implementation</h3>
<ul>
<li> Add bootstrap to make the UI more appealing</li>
<li> Insert image for each animal</li>
<li> Refactor code to reduce fetch calls to backend and remove duplicacy of code</li>
<li> Add filter method </li>
</ul> 
<h3><a id="user-content-code-snippet" class="anchor" aria-hidden="true" href="#code-snippet"></a>Code-Snippet</h3>

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

