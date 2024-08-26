let person = {
    "name": "Baltazar",
    "age": 2,
    "position": "Salesforce Developer",
    "languages": ["Apex", "Java", "JavaScript"],
    "hobbies": ["gym", "learning", "soccer"]
};

console.log(person);

// Convertendo um JSON para STRING
let personText = JSON.stringify(person);
console.log(personText);
// Convertendo uma STRING para JSON
let personJSON = JSON.parse(personText);
console.log(personJSON);

console.log(personJSON.hobbies[0]); //Isto não seria possível se fosse uma STRING