let carrinhDecompra = [];
let historicoQuantidade = [];
let compararTexto = [];
let total = 0;
let aux = 1;
let aux2; 
let contador = 0; 

function adicionar() {        
    let valorQuantidade = document.getElementById('quantidade').value;
    let quantidade = parseInt(valorQuantidade, 10);    
    let nomePrecoProduto = document.getElementById('produto').value;
    let nomes = nomePrecoProduto.split(' ');
    let valor = nomes.pop().split('');
    let descricao = nomes.join(' ');
     
    
    
    valor.splice(0, 2);
    let preco = parseInt(valor.join(''), 10);
    total = (total + (preco * quantidade));    
    if (quantidade < 1) {
        alert('Por favor selecione a quantidade');
    } else {
        
        if (carrinhDecompra.some(nome => nome.includes(descricao))) { //verificando se um trecho do texto existe na lista.           
           contador++;                 
            let indece = carrinhDecompra.findIndex( item => item.includes(descricao)) // encontrando o indece da lista por um trecho do testo
            carrinhDecompra.splice(indece, 1); //escluindo o elmento da lista atraves do indece encontrado.
                                       
           
            let texto = nomes[0];
            let texto2 = JSON.stringify(texto)
            let indece2 = historicoQuantidade.findIndex(item => item.hasOwnProperty(texto2));
            aux2 = historicoQuantidade[indece2].Fone;
            console.log(historicoQuantidade); 
            historicoQuantidade.splice(indece, 1);
           
            
            console.log(texto);
            console.log(indece2);
            console.log(aux2)
            
            let texto1 = nomes[0];
            compararTexto.push(texto1)           
            if (contador> 2) {
                compararTexto.splice(0,1);    
            }            
            historicoQuantidade.push(aux);                     
            
            
            if (compararTexto[0] !=compararTexto[1]) {
                
            }
            aux = aux + quantidade;                  
            
            carrinhDecompra.push(inserirTextoNaTela(aux, nomes, preco)); //colocando o elemento na lista a com aquantidade atualizada é sem repetir o elemto  
            // aux2 = historicoQuantidade.at(-1);
                          
            
             
        } else {
            carrinhDecompra.push(inserirTextoNaTela(quantidade, nomes, preco));
            aux = quantidade;
            aux2 = 0
            
           
        }
        
        document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto').innerHTML = carrinhDecompra;
        document.getElementById('valor-total').innerHTML = total;
    }

}

function limpar() {
    let valorQuantidade = document.getElementById('quantidade').value;
    let quantidade = parseInt(valorQuantidade, 10);
    carrinhDecompra = [];
    compararTexto = [];
    total = 0;
    aux = quantidade;
    document.getElementById('lista-produtos').querySelector('.carrinho__produtos__produto').innerHTML = carrinhDecompra;
    document.getElementById('valor-total').innerHTML = '';
}

function inserirTextoNaTela(quantidade, nomes, preco) {
    let produto = `<span class="texto-azul"> <p> ${quantidade}</span> ${nomes.join(' ')} <span class="texto-azul"> R$ ${preco}</p> </span>`;
    return produto;
}

