/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/
function getAnimalDescription(favoriteAnimal) {
  switch (favoriteAnimal.toLowerCase()) {
    case "fox":
      return "Foxes are sly and smart!";
    case "dog":
      return "Dogs are loyal friends.";
    case "cat":
      return "Cats are curious and independent.";
    default:
      return "All animals are awesome!";
  }
}

// Example calls
console.log(getAnimalDescription("fox")); // Foxes are sly and smart!
console.log(getAnimalDescription("dog")); // Dogs are loyal friends.
console.log(getAnimalDescription("cat")); // Cats are curious and independent.
console.log(getAnimalDescription("rabbit")); // All animals are awesome!
