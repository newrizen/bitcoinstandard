const convertButton = document.querySelector(".convert-button")

const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")

const currencyValueFixed1 = document.querySelector(".currency-value-1"); // valor de 1 Real em BTC
const currencyValueFixed2 = document.querySelector(".currency-value-2"); // valor de 1 Real em sats


async function convertValues0() {
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/BTC-BRL").then(element => element.json())
    const BitcoinRealToday = dataApi.BTCBRL.high
    }
    
    // Função para exibir satoshis e sats diretamente
async function displayBTC() {
    const currencyValueConverted = document.querySelector(".currency-value-1")             //valor em outras moedas 2
    const btcValueFormatted = (1 / BitcoinRealToday).toFixed(8);              // valor em satoshis com 8 casas decimais
    
    // Exibir valores no HTML
    currencyValueFixed1.innerHTML = `${btcValueFormatted} BTC (Satoshis)`;                 // Exibe os satoshis
    }

async function displaySats() {
    const currencyValueConverted = document.querySelector(".currency-value-2")             //valor em outras moedas 2
    const satsValueFormatted = (1 / BitcoinRealToday * 100000000).toFixed(0); // valor em sats (inteiro)
    
    // Exibir valores no HTML
    currencyValueFixed2.innerHTML = `${satsValueFormatted} sats`;                          // Exibe os sats
    }


async function convertValues() {
    //const inputCurrencyValue = document.querySelector(".input-currency").value
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value.replace(/[^\d,-]/g, "").replace(",", "."));
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")    //valor em moedas 1 - antes BRL
    const currencyValueConverted = document.querySelector(".currency-value")             //valor em outras moedas 2

    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(element => element.json())

    const BitcoinRealToday = dataApi.BTCBRL.high
    const DolarRealToday = dataApi.USDBRL.high
    const EuroRealToday = dataApi.EURBRL.high
    const LibraRealToday = dataApi.GBPBRL.high

    
    if(currencySelect1.value == "real1"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)                                         //repetir o valor que está no input
    }

    if (currencySelect1.value == "bitcoin1") {
        const bitcoinValueFormatted = (inputCurrencyValue).toFixed(8); // formata o valor com 8 casas decimais
        currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
    }
    
    if (currencySelect1.value == "dolar1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)                                        //repetir o valor que está no input
    }
    
    if (currencySelect1.value == "euro1") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)                                       //repetir o valor que está no input
    }

    if(currencySelect1.value == "libra1"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)                                      //repetir o valor que está no input
    }

    
    if (currencySelect2.value == "bitcoin2") {
        const bitcoinValueFormatted = (inputCurrencyValue / BitcoinRealToday).toFixed(8); // formata o valor com 8 casas decimais
        currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
    }
    
    if (currencySelect2.value == "dolar2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarRealToday)                               //valor convertido => valor escrito / valor do Dólar hoje
    }
    
    if(currencySelect2.value == "real2"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)                                               //repetir o valor que está no input
    }
    
    if (currencySelect2.value == "euro2") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroRealToday)                             //valor convertido => valor escrito / valor do Euro hoje
    }

    if(currencySelect2.value == "libra2"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraRealToday)                           //valor convertido => valor escrito / valor da Libra hoje 
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)                                               //repetir o valor que está no input
}

    //moeda fonte de conversão
function changeCurrency1() {
    const currencyName1 = document.getElementById("currency-name1")
    const currancyImage1 = document.querySelector(".currency-img1")

    if (currencySelect1.value == "bitcoin1") {
        currencyName1.innerHTML = "Bitcoin"
        currancyImage1.src = "./assets/bitcoin.png"
    }

    if (currencySelect1.value == "real1") {
        currencyName1.innerHTML = "Real Brasileiro"
        currancyImage1.src = "./assets/real.png"
    }
    
    if (currencySelect1.value == "dolar1") {
        currencyName1.innerHTML = "Dólar Americano"
        currancyImage1.src = "./assets/dolar.png"
    }

    if (currencySelect1.value == "euro1") {
        currencyName1.innerHTML = "Euro"
        currancyImage1.src = "./assets/euro.png"
    }

    if (currencySelect1.value == "libra1") {
        currencyName1.innerHTML = "Libra"
        currancyImage1.src = "./assets/libra.png"
    }
    
    convertValues()
}
    
    //moeda fonte de conversão
function changeCurrency2() {
    const currencyName2 = document.getElementById("currency-name2")
    const currancyImage2 = document.querySelector(".currency-img2")

    if (currencySelect2.value == "real2") {
        currencyName2.innerHTML = "Real Brasileiro"
        currancyImage2.src = "./assets/real.png"
    }

    if (currencySelect2.value == "dolar2") {
        currencyName2.innerHTML = "Dólar Americano"
        currancyImage2.src = "./assets/dolar.png"
    }
    
    if (currencySelect2.value == "euro2") {
        currencyName2.innerHTML = "Euro"
        currancyImage2.src = "./assets/euro.png"
    }
    
    if (currencySelect2.value == "bitcoin2") {
        currencyName2.innerHTML = "Bitcoin"
        currancyImage2.src = "./assets/bitcoin.png"
    }

    if (currencySelect2.value == "libra2") {
        currencyName2.innerHTML = "Libra"
        currancyImage2.src = "./assets/libra.png"
    }

    convertValues()
}

//Executa a função quando a página estiver carregada
window.onload = function() {
    displayBTC();
    displaySats();
};

currencySelect1.addEventListener("change", changeCurrency1)
currencySelect2.addEventListener("change", changeCurrency2)
convertButton.addEventListener("click", convertValues)
