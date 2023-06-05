
function appendValue(value) {
    document.getElementById("accumulator").value += value;

    if (value == '+' || value == '-' || value == '*' || value == '/') {
        disabling();
    } else {
        enabling();
    }
}

function disabling() {
    document.getElementById("addition").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("division").disabled = true;
}

function enabling() {
    document.getElementById("addition").disabled = false;
    document.getElementById("subtract").disabled = false;
    document.getElementById("multiply").disabled = false;
    document.getElementById("division").disabled = false;
}

function clearButton() {
    document.getElementById("accumulator").value = "";
}

function equals() {
    var result;
    //getting text
    var gee = document.getElementById("accumulator").value;
    //seperating text
    var numbers = gee.match(/[+\-*/]|\d+/g);

    while (numbers.length > 1) {
        var index = -1;
        for (var i = 0; i < numbers.length; i ++) {
            if (numbers[i] === "*") {
                index = i;
                var result = parseFloat(numbers[index - 1]) * parseFloat(numbers[index + 1]);
                numbers.splice(index - 1, 3, result);
            }
        }
        for (var i = 0; i < numbers.length; i ++) {
             if (numbers[i] === "/") {
                index = i;
                var result = parseFloat(numbers[index - 1]) / parseFloat(numbers[index + 1]);
                numbers.splice(index - 1, 3, result);
            }
        }

        for (var i = 0; i < numbers.length; i ++) {
             if (numbers[i] === "+") {
                index = i;
                var result = parseFloat(numbers[index - 1]) + parseFloat(numbers[index + 1]);
                numbers.splice(index - 1, 3, result);
            }

        }

        for (var i = 0; i < numbers.length; i ++) {
             if (numbers[i] === "-") {
                index = i;
                var result = parseFloat(numbers[index - 1]) - parseFloat(numbers[index + 1]);
                numbers.splice(index - 1, 3, result);
            }
        }
    }
    
    var lastValue = numbers[0];
    document.getElementById("accumulator").value = lastValue;
    
    }
   

