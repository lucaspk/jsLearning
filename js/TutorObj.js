/**
 * Created by Lucas on 28/05/2017.
 */

function tutor(firstName, lastName, nickName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
}

// http://jsfiddle.net/rgthree/ccyo77ep/

function createTutores(){
    A = [
        new tutor("Arthur","Vinicius","Samarílio Samarago Safacake"),
        new tutor("Arthur","Emanuel","Safatraia"),
        new tutor("Wesley","Santos", "SafaDAO"),
        new tutor("Clara","Morais", "Clatara"),
        new tutor("Victor","Almeida", "Victolino Chapolithoveenetsmile"),
        new tutor("João Victor", "Mafra", "Mafraboy"),
        new tutor("Gileade", "Kelvin", "Gilekel"),
        new tutor("Iaron", "Araújo","Liu Kang"),
        new tutor("Benardi", "Nunes", "BEARnardi"),
        new tutor("Ronaldo", "Medeiros","Ronaaaaaaaaaldo"),
        new tutor("Lucas","Lima","Mitológico"),
        new tutor("João","Lucas","Gordo Mzr"),
        new tutor("Gustavo","Ribeiro","Rapadura")
    ];
    return A;
}


function mostrarTutores(){
    var element = document.getElementById("zaza");
    var tutores = createTutores();
    document.getElementById('zz').addEventListener('click', function () {
        for (var i = 0, tutorAtual ; tutorAtual = tutores[i]; i++) {
            var liElement = document.createElement('li');
            liElement.innerText = tutorAtual.firstName + " " + tutorAtual.lastName + " - Apelido:" + tutorAtual.nickName + ' ';
            element.appendChild(liElement);
        }
    });

}
