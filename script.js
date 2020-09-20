var button = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;

// Handling clicks on all the buttons.
for (var i =0; i< button.length; i++ ) {
    //  for every button we have to add a AudioListener, this is an array
    button[i].addEventListener('click', function() {
        // all the calculator logic is within this function
        var value= this.getAttribute('data-value');
        if (value == "+") { // if an operator is clicked
            operator = "+";
            operand1 = parseFloat(display.textContent)
        } else if(value == '=') {
            operand2 = parseFloat(display.textContent);
            // use eval to ge result
            // show result on display
        }
    });
} 