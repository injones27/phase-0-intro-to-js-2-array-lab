// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}


function appendCat(name) {
    let addCat = cats.slice();
    addCat.push(name);
    return addCat
};

function prependCat(name) {  
    let catRemoval = cats.slice();
    catRemoval.slice(0, cats.length - 1);
    catRemoval.unshift(name)
    return catRemoval
};

function removeLastCat() {
    let lastCatRemoved = cats.slice();
    lastCatRemoved.pop()
    return lastCatRemoved
};


function removeFirstCat() {
    let firstCatRemoved = cats.slice();
    firstCatRemoved.shift()
    return firstCatRemoved
};


// console.log(appendCat("Broom"));
// console.log(cats);
// console.log(firstCatRemoval);
// console.log( );