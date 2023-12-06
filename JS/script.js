// document.addEventListener('DOMContentLoaded', function () {
//     obterPessoasAfetadas()
// })
exibirResultado = (pessoasAfetadas) => {
    const resultadoTable = document.getElementById('resultado')

    pessoasAfetadas.forEach(pessoaAfetada => {
        const pessoaLinha = document.createElement('tr')
        resultadoTable.innerHTML += `
            <td>${pessoaAfetada.nomePessoa}</td>
            <td>${pessoaAfetada.tempoSintomas}</td>
            <td>${pessoaAfetada.quantidadePessoas}</td>
            <td>${pessoaAfetada.exameImagem}</td>`
            resultadoTable.appendChild(pessoaLinha)
    })
}

obterPessoasAfetadas = () => {
    const apiUrl = "https://localhost:7263/api/PessoaAfetada"

    fetch(apiUrl).then((response) => response.json()).then((data) => {
        exibirResultado(data)
    })
}

function adicionarPessoaAfetada() {
    const apiUrl = "https://localhost:7263/api/PessoaAfetada"

    const nomePessoa = document.getElementById('nomePessoa').value
    const tempoSintomas = document.getElementById('tempoSintomas').value
    const quantidadePessoas = document.getElementById('quantidadePessoas').value
    const exameImagem = document.getElementById('exameImagem').value

    const pessoaAfetada = {
        nomePessoa: nomePessoa,
        tempoSintomas: tempoSintomas,
        quantidadePessoas: quantidadePessoas,
        exameImagem: exameImagem
    }

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoaAfetada)
    }).then((response) => response.json()).then((data) => {
    })
}