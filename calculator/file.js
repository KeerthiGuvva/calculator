// Append clicked button value to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete the last character from display
function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Calculate the expression in the display
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
