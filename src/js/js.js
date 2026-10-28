function validarTexto(mensagem) {
    let valor = prompt(mensagem);
    
    while (valor === "" || valor === null) {
        alert("O campo não pode ficar em branco!");
        valor = prompt(mensagem);
    }
    
    return valor;
}

function validarNumero(mensagem) {
    let valor = parseInt(prompt(mensagem));
    
    while (isNaN(valor) || valor <= 0) {
        alert("Digite um número válido maior que zero!");
        valor = parseInt(prompt(mensagem));
    }
    
    return valor;
}

function verificarEstoqueBaixo(quantidade) {
    if (quantidade < 5) {
        return true;
    } else {
        return false;
    }
}

function classificarVinho(anoSafra) {
    let anoAtual = 2026;
    let idade = anoAtual - anoSafra;
    
    if (idade <= 3) {
        return "Jovem";
    } else {
        if (idade <= 10) {
            return "Amadurecido";
        } else {
            return "Antigo";
        }
    }
}

function exibirNoConsole(numero, nome, safra, quantidade, classificacao) {
    console.log("--- Vinho " + numero + " ---");
    console.log("Nome: " + nome);
    console.log("Safra: " + safra);
    console.log("Quantidade: " + quantidade);
    console.log("Classificação: " + classificacao);
}

function iniciarSistema() {
    alert("Bem-vindo ao Sistema da Vinheria Agnello!");

    let totalCadastrados = 0;
    let totalEstoqueBaixo = 0;
    
    let safraMaisAntiga = 9999;
    let nomeVinhoMaisAntigo = "";

    let nome1 = "", safra1 = 0, quant1 = 0;
    let nome2 = "", safra2 = 0, quant2 = 0;
    let nome3 = "", safra3 = 0, quant3 = 0;
    let nome4 = "", safra4 = 0, quant4 = 0;
    let nome5 = "", safra5 = 0, quant5 = 0;

    let continuar = "S";

    while (continuar === "S" && totalCadastrados < 5) {
        totalCadastrados = totalCadastrados + 1;

        let nomeAtual = validarTexto("Digite o nome do vinho #" + totalCadastrados + ":");
        let safraAtual = validarNumero("Digite o ano da safra do vinho #" + totalCadastrados + ":");
        let quantAtual = validarNumero("Digite a quantidade em estoque do vinho #" + totalCadastrados + ":");

        let estoqueBaixo = verificarEstoqueBaixo(quantAtual);
        if (estoqueBaixo === true) {
            totalEstoqueBaixo = totalEstoqueBaixo + 1;
            alert("Atenção: O estoque do vinho " + nomeAtual + " está baixo do recomendado (" + quantAtual + " unidades)!");
        }

        let classificacao = classificarVinho(safraAtual);

        if (safraAtual < safraMaisAntiga) {
            safraMaisAntiga = safraAtual;
            nomeVinhoMaisAntigo = nomeAtual;
        }

        if (totalCadastrados === 1) {
            nome1 = nomeAtual; safra1 = safraAtual; quant1 = quantAtual;
        } else if (totalCadastrados === 2) {
            nome2 = nomeAtual; safra2 = safraAtual; quant2 = quantAtual;
        } else if (totalCadastrados === 3) {
            nome3 = nomeAtual; safra3 = safraAtual; quant3 = quantAtual;
        } else if (totalCadastrados === 4) {
            nome4 = nomeAtual; safra4 = safraAtual; quant4 = quantAtual;
        } else if (totalCadastrados === 5) {
            nome5 = nomeAtual; safra5 = safraAtual; quant5 = quantAtual;
        }

        exibirNoConsole(totalCadastrados, nomeAtual, safraAtual, quantAtual, classificacao);

        if (totalCadastrados < 5) {
            continuar = prompt("Deseja cadastrar outro vinho? Digite S para Sim ou N para Não:").toUpperCase();
        } else {
            alert("Limite máximo de 5 cadastros atingido!");
            continuar = "N";
        }
    }

    let relatorioFinal = "=== RELATÓRIO FINAL ===\n" +
                         "Total de cadastros feitos: " + totalCadastrados + "\n" +
                         "Vinhos com estoque baixo (< 5): " + totalEstoqueBaixo + "\n" +
                         "Vinho com a safra mais antiga: " + nomeVinhoMaisAntigo + " (Safra " + safraMaisAntiga + ")";

    alert(relatorioFinal);
    console.log(relatorioFinal);
}

iniciarSistema();