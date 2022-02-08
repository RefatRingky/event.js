  // js for red button//
  function makeRed() {
    document.body.style.backgroundColor = "Red";
}

//  js for blue button//
const blueButton = document.getElementById("makeBlueButton");
//   just set the name of the function without()
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "Blue";
}

// for green button with using direct function
const greenButton = document.getElementById("make-Green-Button");
greenButton.onclick = function () {
    document.body.style.backgroundColor = "Green";
}

// handle add eventlistener
const goldenRod = document.getElementById("make-Gplden-Button");
        goldenRod.addEventListener('click', makeGoldenButton);
        function makeGoldenButton() {
            document.body.style.backgroundColor = "GoldenRod";
        }

// handle add eventlistener with own function inside the addeventlisetener
const hotPink = document.getElementById("hot-pink-button");
hotPink.addEventListener('click', function() {
    document.body.style.backgroundColor ='hotpink';
})
// adding direct addeventlistener
document.getElementById("light-blue-button").addEventListener('click',function () {
    document.body.style.backgroundColor ='lightblue';
})

// just function use
function handleJustFunction() {
    const p = document.getElementById("clicking-method");
    p.innerText='set add event lisetener'; 
}

// direct add event
ocument.getElementById("handle-event").addEventListener('click',function () {
    const p = document.getElementById("clicking-method");
    p.innerText='set by direct add event lisetener';
   })

// input fields usin add event lisetener
