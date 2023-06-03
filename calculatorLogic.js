var gee = "";

function clearButton() {
    document.getElementById("accumulator").innerHTML = "";
    gee = "";
}

function numbers() {
    //makes array with all buttons
    var buttons = document.getElementsByClassName("button");
    var operators = document.getElementsByClassName("operator");

    //loops through 'buttons' array
    for (var i = 0; i < buttons.length; i++) {
        //checks which button clicked from array
        buttons[i].addEventListener("click", function () {
            //gets the text on button clicked
            var buttonValue = this.innerHTML;
            //adds to accumulator
            document.getElementById("accumulator").innerHTML = buttonValue;
        })
    }
    for (var i = 0; i < operators.length; i++) {
        //checks which button clicked from array
        operators[i].addEventListener("click", function () {
            //gets the text on button clicked
            var operatorValue = this.innerHTML;
            //adds to accumulator
            document.getElementById("accumulator").innerHTML = operatorValue;
        })
    }
}