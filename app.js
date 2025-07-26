let produtosCarrinho = [];
let somaTotal = 0;

function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //usamos split para dividir em duas strings a partir do "-", no caso o "0" diz que estamos acessando o que vem antes do ífen
    let valorProduto = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // Validação: verificar se quantidade é válida
    if (!quantidade || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida!');
        return; // sai da função sem fazer nada
    }

    if (quantidade > 999) {
        alert('Quantidade máxima: 999');
        return;
}

    // Verificar se produto já existe no array
    let produtoExistente = produtosCarrinho.find(item => item.nome === nomeProduto);
    
    if (produtoExistente) {
        // Se existe, somar quantidade
        produtoExistente.quantidade += quantidade;
    } else {
        // Se não existe, adicionar novo
        produtosCarrinho.push({
            nome: nomeProduto,
            valor: valorProduto,
            quantidade: quantidade
        });
    }
        
    // Atualizar o HTML do carrinho
    atualizarCarrinho();

}

function limpar() {
    if (produtosCarrinho.length > 0) {
        if (confirm('Tem certeza que deseja limpar o carrinho?')) {
            produtosCarrinho = [];
            document.getElementById('quantidade').value = '';
            atualizarCarrinho();
        }
    }
}

function atualizarCarrinho() {
    let carrinhoCompras = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    document.getElementById('quantidade').value = 0;
    
    // Limpar o carrinho
    carrinhoCompras.innerHTML = '';
    somaTotal = 0;
    
    // Adicionar cada produto do array no HTML
    produtosCarrinho.forEach(produto => {
        carrinhoCompras.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${produto.quantidade}x</span> ${produto.nome} 
            <span class="texto-azul">R$${produto.valor}</span>
        </section>`;
        
        // Somar ao total
        somaTotal += produto.quantidade * produto.valor;
    });
    
    // Atualizar valor total
    valorTotal.innerHTML = `R$${somaTotal}`;
}
