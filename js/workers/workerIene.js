async function conectarApi(){
    const resposta = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL');
    const dado = await resposta.json();
    
    postMessage(dado.JPYBRL);
}

addEventListener('message', () => {
    conectarApi()
    setInterval(() => conectarApi(), 5000);
})