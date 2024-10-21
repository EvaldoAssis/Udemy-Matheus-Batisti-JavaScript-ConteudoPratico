function* idCreator() {
    let id = 10;
    while (true) {
        yield id++;
    }
}

let newId = idCreator();

console.log(newId.next().value);
console.log(newId.next().value);
console.log(newId.next());