
/* golobal variable */
const outputFelid = document.getElementById('output');
const historyFelid = document.getElementById('history');
let calculation = false;
let oparetor;

/* =====================
 event handelar
 =========================*/

document.getElementById('keybord').addEventListener('click', function (event) {
    if (calculation) {
        outputFelid.innerText = '';
        historyFelid.innerText = '';
        calculation = false;
    }
    inputValue = event.target.value;
    if (inputValue == 'C') {
        /* clear feild */
        outputFelid.innerText = '';
        historyFelid.innerText = '';
    } else if (inputValue == 'D') {
        /* delet wrong key */
        outputFelid.innerText = outputFelid.innerText.slice(0, -1) //'abcde'
    } else if (inputValue == '+' || inputValue == '-' || inputValue == '*' || inputValue == '/' || inputValue == '%') {
        setHistory();
    } else if (inputValue == '=') {

        let priviousValue = parseFloat(historyFelid.innerText);
        let prasentValue = parseFloat(outputFelid.innerText);
        historyFelid.innerText += outputFelid.innerText;

        outputFelid.innerText = getCalculation(priviousValue, prasentValue, oparetor);
        calculation = true;
    }
    else if (inputValue == undefined) {

    } else {
        outputFelid.innerText += event.target.value;
    }

});
/* =====================
    // set historyFelid 
  =========================*/

function setHistory() {
    historyFelid.innerText = outputFelid.innerText + inputValue;
    oparetor = inputValue;
    outputFelid.innerText = '';
}
/* =====================
 calculation function 
 =========================*/
function getCalculation(num1, num2, oparetor) {
    switch (oparetor) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num1 % num2;
    }

}

