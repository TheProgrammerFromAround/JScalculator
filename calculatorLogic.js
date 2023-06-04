
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
   
    //getting text
    gee = document.getElementById("accumulator").value;
    //seperating text
    numbers = gee.match(/[+\-*/]|\d+/g);

    // document.getElementById("demo").textContent=numbers.join(',');
    while(numbers.includes("*") || numbers.includes("/") || numbers.includes("+") || numbers.includes("-")){
    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i].includes('*')) {
            index = i
            result = parseInt(numbers[index - 1]) * parseInt(numbers[index + 1]);
            numbers.splice(index - 1, 3, parseInt(result));
            
            
        }

        if (numbers[i].includes('/')) {
            index = i
            result = parseInt(numbers[index - 1]) / parseInt(numbers[index + 1]);
            numbers.splice(index - 1, 3, parseInt(result));
           
            
        }

        if (numbers[i].includes('+')) {
            index = i
            result = parseInt(numbers[index - 1]) + parseInt(numbers[index + 1]);
            numbers.splice(index - 1, 3, parseInt(result));
           
            
        }

        if (numbers[i].includes('-')) {
            index = i
            result = parseInt(numbers[index - 1]) - parseInt(numbers[index + 1]);
            numbers.splice(index - 1, 3, parseInt(result));
         
            
        }
      
    }
    document.getElementById("accumulator").value = numbers;
}
document.getElementById("demo").textContent = result;
}//2+2*3-5 

