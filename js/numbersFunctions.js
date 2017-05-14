/**
 * Created by Lucas on 11/05/2017.
 */

/***/
function getMaxNumber(inputID) {
    var elem = document.getElementById(inputID);
    var txt = elem.value;
    if(txt != null && txt != ""){
        var numbers = txt.split(",");
        var max = parseInt(numbers[0]);
        if(isNaN(max)){
            window.alert("Você não digitou um número!!!");
        }
        else{
            for(var i = 1; i < numbers.length; i++){
                var currentNumber = parseInt(numbers[i]);
                if(currentNumber > max){
                    max = currentNumber;
                }
            }
            window.alert("maior número digitado foi: " + max);
        }
        elem.value = ""; /*assim que pegar os números, apaga eles do input, para o caso de querer digitar outros.*/
    }
    else{
        window.alert("Nada foi digitado no seguinte input: " + elem.name);
    }
}

function sortDescendNumbersFrom(inputID) {
    var elem = document.getElementById(inputID);
    var txt = elem.value;
    if(txt != null && txt != ""){
        var numbers = txt.split(",");
        var totalNumbers = numbers.length;
        var i;
        for(i = 0; i < totalNumbers; i++){
            numbers[i] = parseInt(numbers[i]);
        }
        sortDescendNumericArray(numbers);
        window.alert("numeros ordenados descendentemente:" + numbers);
    }
    else{
        window.alert("Nada foi digitado no seguinte input: " + elem.name);
    }
}



function sortAscendNumbersFrom(inputID) {
    var elem = document.getElementById(inputID);
    var txt = elem.value;
    if(txt != null && txt != ""){
        var numbers = txt.split(",");
        var totalNumbers = numbers.length;
        var i;
        for(i = 0; i < totalNumbers; i++){
            numbers[i] = parseInt(numbers[i]);
        }
        sortAscendNumericArray(numbers); // realiza a - b: se for (-), a < b; se for == 0, a==b; se for +, a > b
        window.alert("numeros ordenados ascendentemente:" + numbers);
    }
    else{
        window.alert("Nada foi digitado no seguinte input: " + elem.name);
    }
}

function isTodayDateTypedIn(inputID){
    var elem = document.getElementById(inputID);
    var dateTyped = elem.value;
    var dateTypedSplitted = dateTyped.split("/");
    var dayTyped = parseInt(dateTypedSplitted[0]);
    var monthTyped = parseInt(dateTypedSplitted[1]) - 1; // -1 pq javascript conta janeiro como 0, fevereiro como 1...
    var yearTyped = parseInt(dateTypedSplitted[2]);
    var shortDateTyped = new Date(yearTyped, monthTyped, dayTyped).toLocaleDateString();
    var todayDate = new Date();
    var shortTodayDate = todayDate.toLocaleDateString(); // criar uma função para checar se a data é válida

    if(shortDateTyped === shortTodayDate){
        window.alert("Você digitou a data de hoje!");
    }
    else if(dateTyped != shortDateTyped){ /** ao transforma p/ date, a classe ajusta o tempo. Exemplo: se você digitar o
     mês 12, ele vai para janeiro do próximo ano, já que os meses em date são entre 0 e 11, independentemente do ano ou dia digitados.
     Como sofrerá um ajuste, então a data mudará, sendo diferente da que eu digitei. Logo, isso quer dizer que é uma data inválida.*/
    window.alert("Você digitou uma data inválida!");
    }
    else{
        window.alert("Você não digitou a data de hoje!");
    }
}

//to do: nesse remove, criar uma função para verificar se um número existe naquele array para retornar um bool usando indexOf
var myNumbers = [3, 9, 1];

//criar um check box pra decidir se é ascendente ou descendente a ordenação.
function sortAscendNumericArray(numbers) {
    numbers.sort(function (a, b) {
        return a - b
    });
}

function sortDescendNumericArray(numbers){
    numbers.sort(function (a, b) {
        return b - a
    });
}

function addNumbers(inputID){
    var elem = document.getElementById(inputID);
    var txtTyped = elem.value;
    var numsTyped = txtTyped.split(",");
    var totalOfNumberTyped = numsTyped.length;

    function addSeveralNumbers() {
        var i;
        for (i = 0; i < totalOfNumberTyped; i++) {
            var myNumber = parseInt(numsTyped[i]);
            if(myArrayContains(myNumber)){
                window.alert("O array não aceita elementos duplicados. Talvez algum número que você digitou já tenha sido add.");
            }
            else{
                myNumbers.push(myNumber);
                sortAscendNumericArray(myNumbers);
            }
        }
        window.alert("Os números foram add com sucesso. Veja como o array está atualmente:" + myNumbers);
        elem.value = "";
    }

    if(totalOfNumberTyped == 1){
        addNumber(inputID);
    }
    else if(totalOfNumberTyped > 1){
        addSeveralNumbers();
    }
    else{
        window.alert("Nada foi digitado no seguinte input: " + elem.name);
    }
}

function addNumber(inputID){
    var elem = document.getElementById(inputID);
    var numTyped = parseInt(elem.value);
    if(!isNaN(numTyped)){
        if(myArrayContains(numTyped)) {
            window.alert("O número" + numTyped + " já foi add. Por favor, digite outro!");
        }
        else{
            myNumbers.push(numTyped);
            sortAscendNumericArray(myNumbers);
            window.alert("O número " + numTyped + " foi add com sucesso. Veja como o array está atualmente:" + myNumbers);
        }
    }
    else {
        window.alert("Nada foi digitado no seguinte input: " + elem.name);
    }
    elem.value = "";
}

function changeNumberToOther(inputID) {
    var elem = document.getElementById(inputID);
    var txtTyped = elem.value.split(" ");
    var oldNumber = parseInt(txtTyped[0]);
    var newNumber = parseInt(txtTyped[2]);
    var oldNumberIndex = myNumbers.indexOf(oldNumber);
    if(oldNumberIndex != -1){
        myNumbers[oldNumberIndex] = newNumber;
        window.alert("O numero " + newNumber + " agora faz parte do array, veja:" + myNumbers);
    }
    else{
        window.alert("O número " + oldNumber + " não existe no array, veja:" + myNumbers);
    }

}

function slicingNumbers(inputID) {
    var elem = document.getElementById(inputID);
    var numTyped = elem.value;
    var numTypedValue = parseInt(numTyped) - 1;
    if(numTypedValue >= 0 && numTypedValue < myNumbers.length){
        window.alert("Os número a partir da " + numTyped + " posição são:" + myNumbers.slice(numTypedValue));
    }
    else{
        window.alert("posição inexistente");
    }
    elem.value = "";

}

// acho que dá pra fazer sem esse remove pra um número só
function removeNumbers(inputID){
    var elem = document.getElementById(inputID);
    var txtTyped = elem.value;
    var numsTyped = txtTyped.split(",");
    var totalOfNumberTyped = numsTyped.length;

    function removeSeveralNumbers() {
        var i;
        var outputMsg;
        var myNumber;
        var myNumberIndex;
        for (i = 0; i < totalOfNumberTyped; i++) {
            myNumber = parseInt(numsTyped[i]);
            myNumberIndex = myNumbers.indexOf(myNumber);
            if(myNumberIndex != -1){
                myNumbers.splice(myNumberIndex,/* howManyElems = */ 1);
                outputMsg = "Os números foram removidos com sucesso. Veja como o array está atualmente:" + myNumbers;
            }
            else{
                outputMsg = "Algum dos números digitados não consta no array. Por favor, digite apenas números que constam no array!";
            }
        }
        window.alert(outputMsg);
        elem.value = "";
    }

    if(totalOfNumberTyped == 1){
        removeNumber(inputID);
    }
    else if(totalOfNumberTyped > 1){
        removeSeveralNumbers();
    }
    else{
        window.alert("Nada foi digitado no seguinte input: " + elem.name);
    }
}

function removeNumber(inputID){
    var elem = document.getElementById(inputID);
    var numTyped = parseInt(elem.value);
    var outputMsg;
    if(!isNaN(numTyped)){
        var myNumberIndex = myNumbers.indexOf(numTyped);
        if(myNumberIndex != -1){
            myNumbers.splice(myNumberIndex,1);
            outputMsg = "O número " + numTyped + " foi removido com sucesso. Veja como o array está atualmente:" + myNumbers;
        }
        else{
            outputMsg = "O número digitado não foi encontrado. Por favor, digite outro!";
        }
    }
    else {
        outputMsg = "Nada foi digitado no seguinte input: " + elem.name;
    }
    window.alert(outputMsg);
    elem.value = "";
}

function myArrayContains(number){
    containsTheNumber = false;
    var totalOfNumbers = myNumbers.length;
    var i;
    for(i = 0; i < totalOfNumbers; i++){
        if(myNumbers[i] == number) {
            containsTheNumber = true;
            break;
        }
    }
    return containsTheNumber;
}
