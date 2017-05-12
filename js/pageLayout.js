/**
 * Created by Lucas on 12/05/2017.
 */

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
