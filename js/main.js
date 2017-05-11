
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


