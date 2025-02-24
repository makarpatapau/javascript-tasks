const animalList = document.getElementById("animalList");
//const searchAnimal = document.getElementById("searchAnimal");
//const sortAnimals = document.getElementById("sortAnimals");
const newAnimalName = document.getElementById("newAnimalType"); //input for add
const addAnimal = document.getElementById("addAnimal"); // button to add

let animals = ["Fox", "Bear", "Eagle"];

animals.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  animalList.appendChild(li);
});

function addNew() {
  const newAnimal = document.createElement("li");
  newAnimal.textContent = newAnimalName.value;
  animalList.appendChild(newAnimal);
  newAnimalName.value = "";
}

addAnimal.addEventListener("click", addNew);
