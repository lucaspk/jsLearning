/**
 * Created by Lucas on 12/05/2017.
 */

/** Search the text from whatSearchID element in the whereSearchID value.
 *
 * */
function searchForTxtIn(whatSearchID, whereSearchID) {
    var whatSearch = document.getElementById(whatSearchID);
    var txtToFind = whatSearch.value;

    var whereSearch = document.getElementById(whereSearchID);
    var providedTxt = whereSearch.value;

    var posOfTxtToFind = providedTxt.toLowerCase().search(txtToFind);

    if (providedTxt == null || providedTxt == "") {
        window.alert("Nada foi digitado no seguinte input: " + whereSearch.name );
    } else if(posOfTxtToFind != -1) {
        window.alert("Substring \"" + txtToFind + "\" encontrada no texto:" + providedTxt + " a partir da posição '" + posOfTxtToFind + "'");
    } else {
        window.alert("Substring \"" + txtToFind + "\" não encontrada no texto:" + providedTxt);
    }
}

function getFirstCharOfTxt(inputID) {
    var elem = document.getElementById(inputID);
    txt = elem.value;
    if (txt != null && txt != "") {
        window.alert("A primeira letra do " + elem.name + " digitado é: " + txt.charAt(0));
    } else {
        window.alert("Nada foi digitado no seguinte input:" + elem.name );
    }
}
