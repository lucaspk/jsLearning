/**
 * Created by Lucas on 31/05/2017.
 */

// we use closures to make global var local(private)
var numb = 2;
function addVarGlobal(elemID){
    elem = document.getElementById(elemID);
    numb *= 2;
    elem.innerText = numb;
}
function addVarLocal(elemID){
    elem = document.getElementById(elemID);
    var numb = 2;
    numb *= 2;
    elem.innerText = numb;
}

function addWithClosure(elemID){
    elem = document.getElementById(elemID);
    elem.innerText = add();
}

var add = (function () {
    var cnt = 0;
    return function () {return cnt++;}
})();
