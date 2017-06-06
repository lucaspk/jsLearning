/**
 * Created by Lucas on 28/05/2017.
 */

/**Brincando com objetos em JavaScript.*/
function tutor(firstName, lastName, nickName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.changeFirstName = function (newFirstName) { // equivalente ao set em java.
        this.firstName = newFirstName;
    }
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
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

/** Implementação feita utilizando addEventListener no botão referente ao id passado. */
function mostrarTutores(elemID){
    var uiElem = document.getElementById("zaza");
    var tutores = createTutores();
    document.getElementById(elemID).addEventListener('click', function () { // element.addEventListener(event, function, useCapture);
        // um elemento pode ter mais de um EventListener. addEventListener serve justamente para tornar possível um elemento poder ter vários event handlers.
        for (var i = 0, tutorAtual ; tutorAtual = tutores[i]; i++) {
            var liElement = document.createElement('li'); // create element = create an html element
            liElement.innerText = tutorAtual.fullName() + " - Apelido:" + tutorAtual.nickName + ' ';
            if(tutorAtual.nickName === 'Clatara'){
                tutorAtual.sexo = "Feminino"; // add um novo atributo ao objeto. Para deletar, basta: delete tutorAtual.sexo;
                //também é possível add novos métodos ao objeto: tutorAtual.xablau = function () {...};
                liElement.innerText += "- Sexo: " + tutorAtual.sexo;
            }
            uiElem.appendChild(liElement); // appendChild - Add an HTML element; tb existe: removeChild e replaceChild
        }
    });
}

/** Implementação feita sem usar addEventListener.*/
function mostrarTutoress(elemID){
    var uiElem = document.getElementById("zaza");
    var tutores = createTutores();
        for (var i = 0, tutorAtual ; tutorAtual = tutores[i]; i++) {
            var liElement = document.createElement('li'); // create element = create an html element
            liElement.innerText = tutorAtual.fullName() + " - Apelido:" + tutorAtual.nickName + ' ';
            if(tutorAtual.nickName === 'Clatara'){
                tutorAtual.sexo = "Feminino";
                liElement.innerText += "- Sexo: " + tutorAtual.sexo;
            }
            uiElem.appendChild(liElement); // appendChild - Add an HTML element; tb existe: removeChild e replaceChild
        }
}
