const animalSimple = ["Fox", "Bear", "Eagle", "Snake", "Wolf", "Salmon"];

const animalList = document.querySelector("#animalList");
const animalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");

const displayAnimals = (animalArray) => {
  // we put animalArray in the (), when introduced the filtered search
  animalList.innerHTML = ""; // will clean the ul
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  // this = () => is an arrow function (methods in the onject do not work with arrow functions)
  const nameInput = document.querySelector("#newAnimalName").value.trim(); // trim is to protect the data, it deletes the spacing before the inputted data if there is any
  animalSimple.push(nameInput);
  displayAnimals(animalSimple);
  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimal = animalSimple.filter((animal) =>
    animal.toLowerCase().includes(searchText)
  );

  displayAnimals(filteredAnimal);
};

const sortAnimal = () => {
  animalSimple.sort();
  displayAnimals(animalSimple);
}; // sorting function A-Z

animalButton.addEventListener("click", addAnimal); // if w eput () after the function addAnimal, it wont wait for the click but performs on the load of teh page
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);

displayAnimals(animalSimple); // we put it in the very end so the browser reads the whole file and prepares all  before launching the function (initially the () were empty, we put it for filtered search)
