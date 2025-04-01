function coletaNumero1() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    return numero1;
}

function coletaNumero2() {
    let numero2 = parseFloat(document.getElementById('numero2').value);
    return numero2;
}

function somar() {
    
    let resultado = coletaNumero1() + coletaNumero2();

    document.getElementById('resultado').innerText = resultado
}


function dividir() {
    
    if(numero2 === 0){
        document.getElementById('resultado').innerText = "divisão por zero.";
    }else{
        let resultado = coletaNumero1() / coletaNumero2() ;
        document.getElementById('resultado').innerText = resultado
    }
}