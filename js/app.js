let carrinhDecompra = [];
let total = 0;
let aux = 1;

function adicionar() {        
    let valorQuantidade = document.getElementById('quantidade').value;
    let quantidade = parseInt(valorQuantidade, 10);    
    let nomePrecoProduto = document.getElementById('produto').value;
    let nomes = nomePrecoProduto.split(' ');
    let valor = nomes.pop().split('');
    let descricao = nomes.join(' ')  
    
    valor.splice(0, 2);
    let preco = parseInt(valor.join(''), 10);
    total = (total + (preco * quantidade));    
    if (quantidade < 1) {
        alert('Por favor selecione a quantidade');
    } else {
        if (carrinhDecompra.some(nome => nome.includes(descricao))) { //verificando se um trecho do texto existe na lista.            
            
            let indece = carrinhDecompra.findIndex( item => item.includes(descricao)) // encontrando o indece da lista por um trecho do testo
            carrinhDecompra.splice(indece, 1); //escluindo o elmento da lista atraves do indece encontrado.                      
            aux = aux + quantidade;
              
            console.log(aux)          
            carrinhDecompra.push(inserirTextoNaTela(aux, nomes, preco)); //colocando o elemento na lista a com aquantidade atualizada é sem repetir o elemto  
          
        } else {
            carrinhDecompra.push(inserirTextoNaTela(quantidade, nomes, preco));
            aux = quantidade;
           
        }
        
        document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto').innerHTML = carrinhDecompra;
        document.getElementById('valor-total').innerHTML = total;
    }

}

function limpar() {
    let valorQuantidade = document.getElementById('quantidade').value;
    let quantidade = parseInt(valorQuantidade, 10);
    carrinhDecompra = [];
    total = 0;
    aux = quantidade;
    document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto').innerHTML = carrinhDecompra;
    document.getElementById('valor-total').innerHTML = '';
}

function inserirTextoNaTela(quantidade, nomes, preco) {
    let produto = `<span class="texto-azul"> <p> ${quantidade}</span> ${nomes.join(' ')} <span class="texto-azul"> R$ ${preco}</p> </span>`;
    return produto;
}

