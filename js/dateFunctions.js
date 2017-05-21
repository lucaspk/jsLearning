/**
 * Created by Lucas on 15/05/2017.
 */

function isTodayDateTypedIn(inputID) {
    var elem = document.getElementById(inputID);
    var dateTyped = elem.value;
    var dateTypedSplitted = dateTyped.split("/");
    var dayTyped = parseInt(dateTypedSplitted[0]);
    var monthTyped = parseInt(dateTypedSplitted[1]) - 1; // -1 pq javascript conta janeiro como 0, fevereiro como 1...
    var yearTyped = parseInt(dateTypedSplitted[2]);
    var shortDateTyped = new Date(yearTyped, monthTyped, dayTyped).toLocaleDateString();
    var todayDate = new Date();
    var shortTodayDate = todayDate.toLocaleDateString(); // criar uma função para checar se a data é válida

    if (shortDateTyped === shortTodayDate) {
        window.alert("Você digitou a data de hoje!");
    } else if (dateTyped != shortDateTyped) { /** ao transforma p/ date, a classe ajusta o tempo. Exemplo: se você digitar o
     mês 12, ele vai para janeiro do próximo ano, já que os meses em date são entre 0 e 11, independentemente do ano ou dia digitados.
     Como sofrerá um ajuste, então a data mudará, sendo diferente da que eu digitei. Logo, isso quer dizer que é uma data inválida.*/
    window.alert("Você digitou uma data inválida!");
    } else {
        window.alert("Você não digitou a data de hoje!");
    }
}

function isWeekend() {
    var msg;
    switch (new Date().getDay()){
        case 0:
        case 6:
            msg = "is weekend, oh yeeeeeeah!";
            break;
        default:
            msg = "oh no!!! isn't the weekend :(!!!";
    }
    window.alert(msg);
}


