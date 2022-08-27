var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    //cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    //adicionado o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro){
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: caculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacientTr = document.createElement("tr");
    pacientTr.classList.add("paciente");

    pacientTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacientTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacientTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacientTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacientTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacientTr;
}

function montaTd(dado,classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome nao pode ser em branco.");
    }

   if(!validaPeso(paciente.peso)) erros.push("Peso e invalido");

   if (!validaAltura(paciente.altura)) erros.push("A altura e invalido");

   if(paciente.gordura.length == 0){
       erros.push("A gordura nao pode ser em branco.");
   }

   if(paciente.peso.length == 0){
       erros.push("O peso nao pode ser em branco.");
   }

    if(paciente.altura.length == 0){
        erros.push("A altura nao pode ser em branco.");
    }

   return erros;
}