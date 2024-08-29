let carrinhDecompra = [];
let total = 0;


function adicionar() {
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade < 1) {
        alert('Por favor selecione a quantidade')
    } else {
        let nomePrecoProduto = document.getElementById('produto').value;
        let nome = nomePrecoProduto.split(' ');
        let valor = nome.pop().split('');

        valor.splice(0, 2);
        let preco = parseInt(valor.join(''), 10);
        total = total + preco;
        console.log(total);

        let produto = `<span class="texto-azul"> <p> ${quantidade}</span> ${nome.join(' ')} <span class="texto-azul"> R$ ${preco}</p> </span>`;
        carrinhDecompra.join('')
        carrinhDecompra.push(produto);

        document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto').innerHTML = carrinhDecompra;
        document.getElementById('valor-total').innerHTML = total;
    }
}

function limpar() {
    carrinhDecompra = [];
    total = 0;
    document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto').innerHTML = carrinhDecompra;
    document.getElementById('valor-total').innerHTML = '';
}