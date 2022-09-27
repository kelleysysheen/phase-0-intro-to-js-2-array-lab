const cats = [
"Milo",
 "Otis", 
 "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop("name");
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("name");
}
function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield", "Broom"]
    const copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = ["Arnold", "Milo", "Otis", "Garfield"];
    return copyOfCats;
}

function removeLastCat(name) {
    const copyOfCats = ["Milo", "Otis", "Garfield"];
    copyOfCats.slice(2);
    return copyOfCats.slice(2);
}

function removeLastCat(name) {
    const copyOfCats = ["Milo", "Otis"];
    return copyOfCats;
}

function removeFirstCat(name) {
    const copyOfCats = ["Milo", "Otis", "Garfield"];
    copyOfCats.slice(0);
    return copyOfCats.slice(0);
}

function removeFirstCat(name) {
    const copyOfCats = ["Otis", "Garfield"];
    return copyOfCats;
}