const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")     //valor em Real Brasileiro
    const currencyValueConverted = document.querySelector(".currency-value")                //valor em outras moedas
    const currencyValueConverted1 = document.querySelector(".currency-value-1")             //valor de 1 Real em BTC
    const currencyValueConverted2 = document.querySelector(".currency-value-2")             //valor de 1 Real em sats

    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(element => element.json())

    const bitcoinToday = dataApi.BTCBRL.high
    const dolarToday = dataApi.USDBRL.high
    const euroToday = dataApi.EURBRL.high
    const libraToday = dataApi.GBPBRL.high


    // Exibir diretamente o valor de satoshis (1 BRL em satoshis)
    const satoshisValueFormatted = (1 / bitcoinToday).toFixed(8);      // formata o valor do bitcoin com 8 casas decimais
    satoshisValueElement.innerHTML = `Satoshis: ${satoshisValueFormatted}`; // Exibe diretamente o valor em satoshis

    // Exibir diretamente o valor em sats (1 BRL em sats)
    const satsValueFormatted = (1 / bitcoinToday * 100000000).toFixed(0);   // formata o valor para números inteiros
    satsValueElement.innerHTML = `Sats: ${satsValueFormatted}`; // Exibe diretamente o valor em sats

    
    if (currencySelect.value == "bitcoin") {
    const bitcoinValueFormatted = (inputCurrencyValue / bitcoinToday).toFixed(8); // formata o valor com 8 casas decimais
    currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
    }

//    if(currencySelect.value == "bitcoin"){
//        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
//            style: "currency",
//            currency: "BTC"
//        }).format(inputCurrencyValue / bitcoinToday).                          //valor convertido => valor escrito / valor do Bitcoin hoje
//    }
    
    
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)                               //valor convertido => valor escrito / valor do Dólar hoje
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)                               //valor convertido => valor escrito / valor do Euro hoje
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)                             //valor convertido => valor escrito / valor da Libra hoje 
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)                                            //repetir o valor que está no input
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currancyImage = document.querySelector(".currency-img")

    
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currancyImage.src = "./assets/bitcoin.png"
    }
    
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currancyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currancyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currancyImage.src = "./assets/libra.png"
    }


    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
