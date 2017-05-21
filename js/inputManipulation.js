/**
 * Created by Lucas on 12/05/2017.
 */

/**For the inputs related to the given id's, get theirs values and alert in a dialog. */
function alertValuesOf(id1, id2) {
    window.alert(id1.value + " " + id2.value);
}

/**Clear the input related to the given id.*/
function clearInput(id) {
    var input = document.getElementById(id);
    input.value = "";
}

/**Function with a variable number of parameters.*/
function clearInputs() {
    for (var input = 0; input < arguments.length; input++ ) {
        var txtInput = document.getElementById(arguments[input]);
        txtInput.value = "";
    }
}
