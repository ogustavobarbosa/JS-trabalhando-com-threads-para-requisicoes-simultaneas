import selecionaCotacao from "./imprimeCotacao.js";

const graficoDolar = document.getElementById('graficoDolar');
const graficoIene = document.getElementById('graficoIene');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data:{
        labels: [],
        datasets:[{
            label: 'Dólar',
            data: [],
            borderWidth: 1
        }]
    },
    options:{
        scales:{
            x: {
                type: 'time',     
                time: {
                    displayFormats: {
                        millisecond: 'hh:mm:ss'
                    }
                }      
            }
         }
    }
       
});


const graficoParaIene = new Chart(graficoIene, {
    type:'line',
    data:{
        labels: [],
        datasets: [{
            label: 'Iene',
            data: [],
            borderWidth: 1
        }]
    },
    options:{
        scales:{
            x: {
                type: 'time',
                time: {
                    displayFormats: {
                        millisecond: 'hh:mm:ss'
                    }
                }     
            }
         }
    }
})


function atualizaDados(grafico, legenda, moeda){
    grafico.data.labels.push(legenda);
    grafico.data.datasets.forEach(dataset => {
        dataset.data.push(moeda);
    })
    grafico.update();
}







const workerDolar = new Worker('./js/workers/workerDolar.js');
workerDolar.postMessage('usd');


workerDolar.addEventListener('message', e => {
    let moeda = e.data.ask;
    let tmp = gerarHorario();
    atualizaDados(graficoParaDolar, tmp, moeda);
    selecionaCotacao('dolar', moeda)
})

const workerIene = new Worker('./js/workers/workerIene.js');
workerIene.postMessage('jpy');

workerIene.addEventListener('message', e => {
    let valor = e.data.ask;
    let tempo = gerarHorario();

    atualizaDados(graficoParaIene, tempo, valor);
    selecionaCotacao('iene', valor)
})



function gerarHorario(){
    const tempo = new Date();
    // return tempo.getHours() + ':' + tempo.getMinutes() + ':' + tempo.getSeconds();
    return tempo
}



