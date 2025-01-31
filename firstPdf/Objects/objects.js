// 1. Write a JavaScript function that receives an object as a parameter and returns an array of the
// object's properties. Use the Object.keys() method to get an array of the object's properties
function getObjectProperties(obj) {
    return Object.keys(obj);
}

let student = {
    name: "Basil",
    age: 26,
    email: "basil@a.com",
};

console.log(getObjectProperties(student)); 


// 2. Create a JavaScript function that receives an object as a parameter and returns the number of
// properties in the object. Use the Object.keys() method to get an array of the object's
// properties and then use the length property of the array to get the number of properties.
console.log(getObjectProperties(student).length); 


// 3. Write a JavaScript function that receives two objects as parameters and returns a new object
// that combines the properties of both objects. Use the Object.assign() method to merge the
// objects.
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let objA = { name: "basil", age: 26 };
let objB = { email: "basil@a.com", city: "irbid" };

let mergedObject = mergeObjects(objA, objB);
console.log(mergedObject);
