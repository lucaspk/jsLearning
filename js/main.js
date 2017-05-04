
/*variável de escopo global*/
var msgInicial;
var bgInicial;
var corFonteInicial;

/**/
function changeLayoutTo(bgColor, fontColor) {
    if(bgInicial == null){
        bgInicial = document.body.style.backgroundColor;
    }
    if(corFonteInicial == null){
        corFonteInicial = document.body.style.color;
    }
    document.body.style.background = bgColor;
    document.getElementById("demo").style.color = fontColor;
    document.body.style.color = fontColor;
}

function changeMsgTo(newMsg){
    if(msgInicial == null){
        msgInicial = document.getElementsByTagName('p')[0].innerHTML;
    }
    document.getElementById("demo").innerHTML = newMsg;
}

/**
 * Each click increment the fontsize of the text related to the given id by increaseFactor pixels.
 *
 * */
function increaseFontSize(id, increaseFactor){
    changeFontSize(id, increaseFactor);
}

/**
 * Each click decrement the fontsize of the text related to the given id by decreaseFactor pixels.
 *
 * */
function decreaseFontSize(id, decreaseFactor){
    changeFontSize(id, decreaseFactor * (-1));
}

/**
 * Each click change the fontsize of the text related to the given id by changeFactor pixels.
 * You can use this function either to increase or to decrease the fontsize.
 * - To increase, you pass a positive number as the changeFactor.
 * - To decrease, you multiply the change factor to (-1).
 *
 * */
function changeFontSize(id, changeFactor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt,null).getPropertyValue('font-size'); /*variável criada sem 'var' terá escopo global automaticamente*/
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + changeFactor) + 'px';
}

/**
 * Each click increment one pixel in the fontsize of the text related to the given id.
 * */
function increaseFontSizeOnePixel(id){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt,null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
}

/**
 * Each click decrement one pixel in the fontsize of the text related to the given id.
 * */
function decreaseFontSizeOnePixel(id){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt,null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
}

function resetChange(){
    changeMsgTo(msgInicial);
    changeLayoutTo(bgInicial, corFonteInicial);
}

/**
 * Hide the element related to the given id.
 * */
function hideElement(id) {
    document.getElementById(id).style.display = "none";
}

/**
 * Show the hidden elements related to the given id.
 * */
function recoverElement(id){
    document.getElementById(id).style.display = "block";
}

/**For the elements related to the given id's, get theirs values and alert in a dialog. */
function alertValuesOf(id1, id2){
    window.alert(id1.value + " " + id2.value);
}

function clearInput(id){
    var input = document.getElementById(id);
    input.value = "";
}

/**Function with a variable number of parameters.*/
function clearInputs(){
    for(var input=0; input < arguments.length; input++ ){
        var txtInput = document.getElementById(arguments[input]);
        txtInput.value = "";
    }
}

function alertPersonInfo(firstNameInputID,lastNameInputID) {
    var firstName = document.getElementById(firstNameInputID); /*variável de escopo local*/
    var lastName = document.getElementById(lastNameInputID);
    var person = {name:firstName.value, lastname: lastName.value, age:20, completeName: function(){
        return person.name + " " + person.lastname;
    }};
    window.alert(">>> Brincando com objetos em JS: nome e sobrenome passados no input. Acessando função" +
        " do objeto <<<" + "\n\n" +
        "Meu nome é: " + person.completeName());
    window.alert(">>> Alternativa - Brincando com objetos em JS: nome e sobrenome passados no input <<<" + "\n\n" +
        "Meu nome é: " + person.name + " " + person.lastname);
    if(person.name.toString().charAt(0).toLowerCase() == "l"){
        window.alert(">>> Nome da pessoa que começa com 'L', veja: <<<" + "\n\n" +
            "O nome é: " + person.name + " e veja também as 3 primeiras letras: " + person.name.slice(0,3));
    }
}

/** Search the text from whatSearchID element in the whereSearchID value.
 *
 * */
function searchForTxtIn(whatSearchID, whereSearchID) {

    var whatSearch = document.getElementById(whatSearchID);
    var txtToFind = whatSearch.value;

    var whereSearch = document.getElementById(whereSearchID);
    var providedTxt = whereSearch.value;

    if(providedTxt == null || providedTxt == ""){
        window.alert("Nada foi digitado no seguinte input: " + whereSearch.name );
    }
    else if(providedTxt.toLowerCase().search(txtToFind)!= -1){
        window.alert("Substring \"" + txtToFind + "\" encontrada no texto:" + providedTxt);
    }
    else{
        window.alert("Substring \"" + txtToFind + "\" não encontrada.");
    }
}

function getFirstCharOfTxt(inputID){
    var elem = document.getElementById(inputID);
    txt = elem.value;
    if(txt != null && txt != ""){
        window.alert("A primeira letra do " + elem.name + " digitado é: " + txt.charAt(0));
    }
    else{
        window.alert("Nada foi digitado no seguinte input:" + elem.name );
    }
}

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

function isTodayDateTypedIn(inputID){
    var elem = document.getElementById(inputID);
    var txtTyped = elem.value;
    var dateTyped = txtTyped.split("/");
    var dayTyped = parseInt(dateTyped[0]);
    var monthTyped = parseInt(dateTyped[1]) - 1; // -1 pq javascript conta janeiro como 0, fevereiro como 1...
    var yearTyped = parseInt(dateTyped[2]);
    var shortTypedDate = new Date(yearTyped, monthTyped, dayTyped).toLocaleDateString();
    var todayDate = new Date();
    var shortTodayDate = todayDate.toLocaleDateString(); // criar uma função para checar se a data é válida

    if(shortTypedDate === shortTodayDate){
        window.alert("Você digitou a data de hoje!");
    }
    else if(txtTyped != shortTypedDate){ /** ao transforma p/ date, a classe ajusta o tempo. Exemplo: se você digitar o
     mês 12, ele vai para janeiro do próximo ano, já que os meses em date são entre 0 e 11, independentemente do ano ou dia digitados.
     Como sofrerá um ajuste, então a data mudará, sendo diferente da que eu digitei. Logo, isso quer dizer que é uma data inválida.*/
        window.alert("Você digitou uma data inválida!");
    }
    else{
        window.alert("Você não digitou a data de hoje!");
    }



}
