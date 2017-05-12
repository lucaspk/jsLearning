/**
 * Created by Lucas on 12/05/2017.
 */

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
