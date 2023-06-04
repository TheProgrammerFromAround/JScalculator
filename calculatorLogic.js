
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
    /* var gee=document.getElementById("accumulator").value;
     const points = new Array();
 const sep = str.match(/[-+/*]?[\d]+/g);
 points.push(sep);
     document.getElementById("demo").value= points; 
      */

    // const arr = ["2", "+", "67", "-", "5"];
    const arr = document.getElementById("accumulator").value;
    sep = arr.match(/[+\-*/]|\d+/g);
    const outputElement = document.getElementById("demo");
    outputElement.textContent = sep.join(',');
}
