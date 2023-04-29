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

    return {
        getWheels(){
            return intWheels
        },
        modify(arg){
            setWheels(arg)
        }
    }
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