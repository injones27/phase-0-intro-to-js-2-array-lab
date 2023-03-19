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


let addCat = cats.slice();
function appendCat(name) {
    return addCat.push(name);
};

const catRemoval = cats.slice();
function removeLastCat() {  
    catRemoval.slice(0, cats.length - 1);
};

const firstCatRemoval = cats.slice;
function removeFirstCat() {
    firstCatRemoval.slice(0,1);
};
console.log(appendCat("Broom"));
// console.log(cats);
// console.log(firstCatRemoval);
// console.log( );