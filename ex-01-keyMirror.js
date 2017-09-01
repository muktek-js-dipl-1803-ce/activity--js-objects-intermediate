/**
 * dogFactory()
 *   Create a function that returns the following dog object.
 *   The function should accept 3 arguments, a string for the dog's
 *   name, a string for the breed, and a string for the age
 *
 *   The function should return an object with the properties
 *   shown below. The humanAge should be the age input * 7.
 *
 *
 *   dogFactory('Fido', 'Golden Retriever', 12 )
 *    => {
 *       humanAge: 84, // 12 * 7
 *       breed: 'Golden Retriever',
 *       name: 'Fido',
 *       specie: 'canis familiaris',
 *       legs: 4
 *    }
**/


var dog1 = dogFactory('Schulzty', 'Dachsund', 8)
var dog2 = dogFactory('Mia', 'Pit Bull', 9)
var dog3 = dogFactory('Abby', 'Corgi', 4)

console.assert(dog1.specie === "canis familiaris")
console.assert(dog1.name === "Schulzty")
console.assert(dog1.humanAge === 56)
console.assert(dog1.legs === 4)

//---------
console.assert(dog2.specie === "canis familiaris")
console.assert(dog2.breed === "Pit Bull")
console.assert(dog2.humanAge === 63)
//---------
console.assert(dog3.name === "Abby")
console.assert(dog3.breed === "Corgi")
console.assert(dog3.humanAge === 28)
console.assert(dog1.legs === 4)
