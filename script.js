var button = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator3 = null;

// Handling clicks on all the buttons.
for (var i =0; i< button.length; i++ ) {
    //  for every button we have to add a AudioListener, this is an array
    button[i].addEventListener('click', function() {
        // all the calculator logic is within this function
        var value= this.getAttribute('data-value');
        if (value == "+") {
            operator = "+";
            operand1 = parseFloat(display.textContent)
        }
    });
} 