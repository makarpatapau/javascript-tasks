// const animalSimple = ["Fox", "Bear", "Eagle", "Snake", "Wolf", "Salmon"];

const animals = [
  { name: "Fox", type: "Mammal", age: 10, color: "Red" },
  { name: "Bear", type: "Mammal", age: 15, color: "Brown" },
  { name: "Eagle", type: "Bird", age: 7, color: "Black" },
  { name: "Snake", type: "Reptile", age: 5, color: "Green" },
  { name: "Frog", type: "Amphibian", age: 2, color: "Green" },
  { name: "Salmon", type: "Fish", age: 3, color: "Grey" },
];

const animalList = document.querySelector("#animalList"); // selectors
const animalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");
const filterType = document.querySelector("#filterType");

const displayAnimals = (animalArray) => {
  // we put animalArray in the (), when introduced the filtered search
  animalList.innerHTML = ""; // will clean the ul
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal.name}, ${animal.type}, ${animal.age}, ${animal.color}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  // this = () => is an arrow function (methods in the onject do not work with arrow functions)
  const nameInput = document.querySelector("#newAnimalName").value.trim(); // trim is to protect the data, it deletes the spacing before the inputted data if there is any
  animals.push(nameInput);
  displayAnimals(animals);
  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );

  displayAnimals(filteredAnimals);
};

const filterByTypeAnimal = () => {
  const selectedType = filterType.value;
  if (selectedType === "All") {
    displayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    displayAnimals(filteredAnimals);
  }
};

const sortAnimal = () => {
  animals.sort();
  displayAnimals(animals);
}; // sorting function A-Z

animalButton.addEventListener("click", addAnimal); // if w eput () after the function addAnimal, it wont wait for the click but performs on the load of teh page
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
filterType.addEventListener("change", filterByTypeAnimal);

displayAnimals(animals); // we put it in the very end so the browser reads the whole file and prepares all  before launching the function (initially the () were empty, we put it for filtered search)
