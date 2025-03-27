class valorC {
    valorF = (tempo, preco) => {
        const valor = Number(document.getElementById("value").value.replace(",","."));
        document.getElementById("retorno").innerText = `O tempo gasto foi de ${tempo} minutos.`;
        const troco = valor - preco;
        if (troco == 0) {
            document.getElementById("troco").innerText = "Troco: Não possui troco.";
        } else {
            document.getElementById("troco").innerHTML = `Troco: R$ ${troco.toFixed([2]).replace(".",",")}`;
        }
    }
    valorP() {
        document.getElementById("retorno").innerHTML = "Valor insuficiente.";
        document.getElementById("troco").innerText = "Troco: Não possui troco.";
    }
}

function calculo() {
    
    const inst = new valorC();
    const valor = Number(document.getElementById("value").value);
    
    if (valor >= 3) {
        inst.valorF(120, 3);
    } else if (valor >= 1.75) {
        inst.valorF(60, 1.75);
    } else if (valor >= 1) {
        inst.valorF(30, 1);
    } else {
        inst.valorP();
    }
}