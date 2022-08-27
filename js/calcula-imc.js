var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido){
        console.log("Peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValido){
        console.log("Altura invalido");
        alturaEhValido = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValido) {
        var imc = caculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }

}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}

function caculaImc(peso,altura) {

    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}

/*exmplo
titulo.addEventListener("click",function (){console.log("Clicou");});*/

