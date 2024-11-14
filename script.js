const convertButton = document.querySelector(".convert-button")

const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")

const currencyValueConverted1 = document.querySelector(".currency-value-1"); // valor de 1 Real em BTC
const currencyValueConverted2 = document.querySelector(".currency-value-2"); // valor de 1 Real em sats


function convertValues0() {
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/BTC-BRL").then(element => element.json())
    const bitcoinToday = dataApi.BTCBRL.high


    // Função para exibir satoshis e sats diretamente
    function displaySatoshisAndSats() {
        const satoshisValueFormatted = (1 / bitcoinToday).toFixed(8);       // valor em satoshis com 8 casas decimais
        const satsValueFormatted = (1 / bitcoinToday * 100000000).toFixed(0); // valor em sats (inteiro)
        
        // Exibir valores no HTML
        currencyValueConverted1.innerHTML = `${satoshisValueFormatted} BTC (Satoshis)`;   // Exibe os satoshis
        currencyValueConverted2.innerHTML = `${satsValueFormatted} sats`;                 // Exibe os sats
    }

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")       //valor em moedas 1 - antes BRL
    const currencyValueConverted = document.querySelector(".currency-value-2")                //valor em outras moedas 2

    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(element => element.json())

    const bitcoinToday = dataApi.BTCBRL.high
    const dolarToday = dataApi.USDBRL.high
    const euroToday = dataApi.EURBRL.high
    const libraToday = dataApi.GBPBRL.high

    
    if(currencySelect1.value == "real1"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)                                         //repetir o valor que está no input
    }

    if(currencySelect1.value == "bitcoin1"){
       currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue).                                        //repetir o valor que está no input
    }
    
    if (currencySelect1.value == "dolar1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)                                        //repetir o valor que está no input
    }
    
    if (currencySelect1.value == "euro1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)                                       //repetir o valor que está no input
    }

    if(currencySelect1.value == "libra1"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)                                      //repetir o valor que está no input
    }
    
//    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
//        style: "currency",
//        currency: "BRL"
//    }).format(inputCurrencyValue)                                            //repetir o valor que está no input
//}


    
    if (currencySelect2.value == "bitcoin") {
    const bitcoinValueFormatted = (inputCurrencyValue / bitcoinToday).toFixed(8); // formata o valor com 8 casas decimais
    currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
    }

//    if(currencySelect.value == "bitcoin"){
//        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
//            style: "currency",
//            currency: "BTC"
//        }).format(inputCurrencyValue / bitcoinToday).                          //valor convertido => valor escrito / valor do Bitcoin hoje
//    }
    
    if (currencySelect2.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)                               //valor convertido => valor escrito / valor do Dólar hoje
    }
    
    if (currencySelect2.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)                               //valor convertido => valor escrito / valor do Euro hoje
    }

    if(currencySelect2.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)                             //valor convertido => valor escrito / valor da Libra hoje 
    }
    
//    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
//        style: "currency",
//        currency: "BRL"
//    }).format(inputCurrencyValue)                                            //repetir o valor que está no input
//}


// Executa a função quando a página estiver carregada
//window.onload = function() {
//    convertValues0();
//};

    //moeda fonte de conversão
//function changeCurrency0() {
//    const currencyName = document.getElementById("currency-name")
//
//    if (currencySelect0.value == "bitcoin0") {
//        currencyName.innerHTML = "Bitcoin"
//    }
//
//    convertValues0()
//}
    
    //moeda fonte de conversão
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currancyImage = document.querySelector(".currency-img")

    if (currencySelect1.value == "bitcoin1") {
        currencyName.innerHTML = "Bitcoin"
        currancyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect1.value == "real1") {
        currencyName.innerHTML = "Real"
        currancyImage.src = "./assets/real.png"
    }
    
    if (currencySelect1.value == "dolar1") {
        currencyName.innerHTML = "Dólar Americano"
        currancyImage.src = "./assets/dolar.png"
    }

    if (currencySelect1.value == "euro1") {
        currencyName.innerHTML = "Euro"
        currancyImage.src = "./assets/euro.png"
    }

    if (currencySelect1.value == "libra1") {
        currencyName.innerHTML = "Libra"
        currancyImage.src = "./assets/libra.png"
    }
    
    if (currencySelect2.value == "real2") {
        currencyName.innerHTML = "Real"
        currancyImage.src = "./assets/real.png"
    }

    if (currencySelect2.value == "dolar2") {
        currencyName.innerHTML = "Dólar Americano"
        currancyImage.src = "./assets/dolar.png"
    }
    
    if (currencySelect2.value == "euro2") {
        currencyName.innerHTML = "Euro"
        currancyImage.src = "./assets/euro.png"
    }
    
    if (currencySelect2.value == "bitcoin2") {
        currencyName.innerHTML = "Bitcoin"
        currancyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect2.value == "libra2") {
        currencyName.innerHTML = "Libra"
        currancyImage.src = "./assets/libra.png"
    }

    convertValues()
}

currencySelect1.addEventListener("change", changeCurrency)
currencySelect2.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
