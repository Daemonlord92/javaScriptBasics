document.getElementById("just").innerHTML = "Look Ma I'm Roadkill, Hahaha";

document.getElementById("horror").innerHTML = "As the kids came upon the cabin, their worst fears came to life";

document.getElementById("jumping").innerHTML = "I'm going be jumping soon";


document.getElementById("killmonger").style.backgroundColor = "purple";
document.getElementById("killmonger").style.width = "10rem";
document.getElementById("killmonger").style.height = "10rem";

function outOfScope() {

}

let cc = document.getElementById("killmonger");

function colorChanger() {
    getter.backgroundColor = "red";
    if(cc.style.backgroundColor === "purple"){
        cc.style.backgroundColor = "red";
    } else {
        cc.style.backgroundColor = "purple";
    }
}

document.getElementById("killmonger").addEventListener("click", colorChanger);

//const
// cannot be change once init
//var
// global variable
//let
//reassignable and scoped to the body it's declared in

//Math Operators
// + - * / %
console.log(4+4);
console.log(4*4);
console.log(4/4);
console.log(4-4);
console.log(4%4);
console.log(4**4);
let a = 4+4;
console.log(a)

