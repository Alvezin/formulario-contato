function validarTxt(elemento){
    let valor = document.getElementById(elemento).value;
    try{
        if (valor === undefined) throw "Digite algo válido"
        if (Number(valor) === Number(valor)) throw "Válido somente valores do tipo texto";

    } catch(erro){
        alert(erro)
    }
}
