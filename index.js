function getById(name) {
  return document.getElementById(name);
}

document.addEventListener("DOMContentLoaded", () => {
  getById("percent").addEventListener("change", validate);
  function validate(e) {
    console.log(this);
    var value = e.target.value;
    if (value > 100 || value < 0) {
      alert("you can't do that");
    }
  }
});

function log (arg){
    console.log(arg)
}

// IIFE way for private variables
var bicycle = (function(){
    var intWheels = 0
    function setWheels(arg){
        intWheels = arg
    }

    // The object you return here can be frozen to ensure it can't be modified with additional properties.
    return Object.freeze({
        getWheels(){
            return intWheels
        },
        modify(arg){
            setWheels(arg)
        }
    })
})()


// Factory way for making Bicycles
const makeBike = function(){
    var wheels = 0;
    function setWheels(arg){
        wheels = arg
    }

    return {
        getWheels(){
            return wheels
        },
        modWheels(arg){
            setWheels(arg)
        }
    }
}

const secondBike = makeBike()
const thirdBike = makeBike()

// Let's move on to some other stuff like "this"
// This is the global window most of the time 
// log(this);

// When its in a function at the top level it refers to the window.
function letsTryThis(){
    var test = 'hello'
    log(this)
}
letsTryThis();


// Now this refers to what's in the brackets.
var letsTryThisAgain = {
    test: true,
    getThis(){
        log(this)
    }
}

letsTryThisAgain.getThis() // now its referrign to whats in the brackets

var unboundGetThis = letsTryThisAgain.getThis

var anotherPlaceToBindAHome = {
    notTest: false,
    getThis(){
        log(this)
    }
}

// In this case, we can pull a function out from one spot, and bind it to a new home. It's kinda wild.
var newlyBoundGetThis = unboundGetThis.bind(anotherPlaceToBindAHome)
newlyBoundGetThis()



