
async function conectarApi(){
    const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const dados = await response.json();

    let moeda = dados.USDBRL;
    postMessage(moeda)
}

addEventListener('message', () => {
    conectarApi();
    setInterval(() => conectarApi(), 5000)
})