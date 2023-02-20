const lista = document.querySelectorAll('[data-lista]');

function imprimeCotacao(elemento, nome, valor){
    elemento.innerHTML = '';

    for(let n = 1; n <= 1000; n*=10){
        const item = document.createElement('li')
        const plurais = {
            'dolar': 'dolares',
            'iene': 'ienes'
        }
        item.innerHTML = `${n} ${n==1 ? nome : plurais[nome]}: R$ ${(n*valor).toFixed(2)}`;
        elemento.appendChild(item);
    }
}

function selecionaCotacao(nome, valor){
    lista.forEach(item => {

        if (item.id == nome){
            imprimeCotacao(item, nome, valor)
        }
    })
}


export default selecionaCotacao;
