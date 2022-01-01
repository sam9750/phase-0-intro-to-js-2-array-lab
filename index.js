const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat() {
     cats.push("Ralph") 
}


function destructivelyRemoveLastCat() {
     cats.pop()
}

function destructivelyPrependCat() {
     cats.unshift("Bob")
}

function destructivelyRemoveFirstCat() {
     cats.shift("Bob")
}


function appendCat() {
     var newArray = cats.slice();
     newArray.push("Broom")
     return newArray
}

function prependCat() {
     var newArray1 = cats.slice();
     newArray1.push("Broom")
     
     var newArray2 = ["Arnold", ...cats];
          var newArray3 = newArray2.concat();
          return newArray3 }


function removeLastCat() {
     var newArray1 = cats.slice();
     newArray1.pop("Broom")
     return newArray1 }


function removeFirstCat() {
     var newArray1 = cats.slice(1);
     return newArray1 }     