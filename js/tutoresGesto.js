/**
 * Created by Lucas on 23/05/2017.
 */

var json =
    '{' +
        '"tutores":[' +
        '{"nome":"Samarílio","sobrenome":"Samarago"},' +
        '{"nome":"Mafra","sobrenome":"Boy"},' +
        '{"nome":"Victolino","sobrenome":"Chapolithoovenetsmile"},' +
        '{"nome":"Gile","sobrenome":"Kel"},' +
        '{"nome":"Safatraia","sobrenome":"Safadijkstra"}' +
        ']' +
    '}';

function printTutorInfo(inputID){
    var tutorPos = document.getElementById(inputID);
    var jsObj = JSON.parse(json);
    var posicaoDoTutor = parseInt(tutorPos.value) - 1;

    try {
        if (posicaoDoTutor < jsObj.tutores.length) {
            var tutor = jsObj.tutores[posicaoDoTutor];
            window.alert("A pessoa em questão é:" + tutor.nome + " " + tutor.sobrenome);
        } else {
            throw "Posição inválida. Digite outra!";
        }
    } catch(error){
        window.alert(error);
    }

}

function printTutorName(){
    var xablau = [];
    var x = $.getJSON('./js/tutores.json', function (data){
        xablau = data.tutores;
        window.alert(data.tutores[0].nome);
    });


}

function printTutorNames(){
    $.getJSON('./js/tutores.json', function (data){
        var xablau = data;
        window.alert(xablau.tutores[0].nome + " " + xablau.tutores[0].sobrenome);
    });
    //window.alert(xablau[0].name + " " + xablau[0].sobrenome);

}
