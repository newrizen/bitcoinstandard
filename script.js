const convertButton = document.querySelector(".convert-button")

const currencySelect1 = document.querySelector(".currency-select1")
const currencySelect2 = document.querySelector(".currency-select2")

const currencyValueBTCUSD = document.querySelector(".currency-btcusd"); // valor de 1 Real em BTC
const currencyValueBTCBRL = document.querySelector(".currency-btcbrl"); // valor de 1 Real em sats

const currencyValue1BRLBTC = document.querySelector(".currency-btc");   // valor de 1 Real em BTC
const currencyValue1BRLsats = document.querySelector(".currency-sats"); // valor de 1 Real em sats


async function displayBTCUSD() {
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/BTC-USD").then(element => element.json())
    const BitcoinDolarToday = dataApi.BTCUSD.high
    const btcValueFormatted = (BitcoinDolarToday);              // valor em satoshis com 8 casas decimais
    
    // Exibir valores no HTML
    currencyValueBTCUSD.innerHTML = `${btcValueFormatted}`;                 // Exibe os dolares
    }

async function displayBTCBRL() {
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/BTC-BRL").then(element => element.json())
    const BitcoinRealToday = dataApi.BTCBRL.high
    const btcValueFormatted = (BitcoinRealToday);              // valor em satoshis com 8 casas decimais
    
    // Exibir valores no HTML
    currencyValueBTCBRL.innerHTML = `${btcValueFormatted}`;                 // Exibe os reais
    }

async function displayBTC() {
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/BTC-BRL").then(element => element.json())
    const BitcoinRealToday = dataApi.BTCBRL.high
    const btcValueFormatted = (1 / BitcoinRealToday).toFixed(8);              // valor em satoshis com 8 casas decimais
    
    // Exibir valores no HTML
    currencyValue1BRLBTC.innerHTML = `${btcValueFormatted} btc`;                 // Exibe os satoshis
    }

async function displaySats() {
    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/BTC-BRL").then(element => element.json())
    const BitcoinRealToday = dataApi.BTCBRL.high
    const satsValueFormatted = (1 / BitcoinRealToday * 100000000).toFixed(0); // valor em sats (inteiro)
    
    // Exibir valores no HTML
    currencyValue1BRLsats.innerHTML = `${satsValueFormatted} sats`;                          // Exibe os sats
    }


async function convertValues() {
    let rawValue = document.querySelector(".input-currency").value.replace(/[^\d,.-]/g, "");
    // Substitui vírgulas por pontos e remove todos os pontos menos o último, que será o separador decimal
    rawValue = rawValue.replace(/,/g, '.');

    if (rawValue.includes('.')) {
        const parts = rawValue.split('.');
        const decimal = parts.pop();
        const integer = parts.join('');
        inputCurrencyValue = Number(integer + '.' + decimal);
    } else {
        // trata como número inteiro, ex: 6000 → 6000.00
        inputCurrencyValue = Number(rawValue);
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");    // valor em moedas 1 - antes BRL
    const currencyValueConverted = document.querySelector(".currency-value");               // valor em outras moedas 2


    const dataApi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BTC-USD,BTC-EUR,EUR-USD,GBP-USD,GBP-EUR").then(element => element.json())

    const BitcoinRealToday = dataApi.BTCBRL.high
    const DolarRealToday = dataApi.USDBRL.high
    const EuroRealToday = dataApi.EURBRL.high
    const LibraRealToday = dataApi.GBPBRL.high
    
    const BitcoinDolarToday = dataApi.BTCUSD.high
    const EuroDolarToday = dataApi.EURUSD.high
    const LibraDolarToday = dataApi.GBPUSD.high

    const BitcoinEuroToday = dataApi.BTCEUR.high
    const LibraEuroToday = dataApi.GBPEUR.high 

    //const BitcoinLibraToday = dataApi.BTCGBP.high
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)                                               //repetir o valor que está no input
    
    if(currencySelect1.value == "real1"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)                                         //repetir o valor que está no input
    }

        else if (currencySelect1.value == "bitcoin1") {
            const bitcoinValueFormatted = (inputCurrencyValue).toFixed(8); // formata o valor com 8 casas decimais
            currencyValueToConvert.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }
        
        else if (currencySelect1.value == "dolar1") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)                                        //repetir o valor que está no input
        }
        
        else if (currencySelect1.value == "euro1") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)                                       //repetir o valor que está no input
        }
    
        else if(currencySelect1.value == "libra1"){
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)                                      //repetir o valor que está no input
        }

        else if (currencySelect1.value == "satoshi1") {
            const bitcoinValueFormatted = (inputCurrencyValue).toFixed(0); // formata o valor sem casas decimais
            currencyValueToConvert.innerHTML = "sat " + bitcoinValueFormatted;             // exibe o valor sem casas decimais
        }
            
        else {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
        }).format(inputCurrencyValue)                                               //repetir o valor que está no input
        }
    
    if (currencySelect1.value == "dolar1" && currencySelect2.value == "bitcoin2") {
            const bitcoinValueFormatted = (inputCurrencyValue / BitcoinDolarToday).toFixed(8); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
    }

        else if (currencySelect1.value == "euro1" && currencySelect2.value == "bitcoin2") {
            const bitcoinValueFormatted = (inputCurrencyValue / BitcoinEuroToday).toFixed(8); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }

        else if (currencySelect1.value == "libra1" && currencySelect2.value == "bitcoin2") {
            const bitcoinValueFormatted = (inputCurrencyValue * LibraDolarToday / BitcoinDolarToday).toFixed(8); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }
            
        else if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "bitcoin2") {
            const bitcoinValueFormatted = (inputCurrencyValue).toFixed(8); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }
            
        else if (currencySelect2.value == "bitcoin2") {
            const bitcoinValueFormatted = (inputCurrencyValue / BitcoinRealToday).toFixed(8); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "₿ " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }
            
        else if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "dolar2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * BitcoinDolarToday)                               //valor convertido => valor escrito / valor do Dólar hoje
        }

        else if (currencySelect1.value == "libra1" && currencySelect2.value == "dolar2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * LibraDolarToday)                               //valor convertido => valor escrito / valor do Dólar hoje
        }
            
        else if (currencySelect1.value == "dolar1" && currencySelect2.value == "dolar2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)                               //valor convertido => valor escrito / valor do Dólar hoje
        }
            
        else if (currencySelect2.value == "dolar2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / DolarRealToday)                               //valor convertido => valor escrito / valor do Dólar hoje
        }

        else if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "real2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * BitcoinRealToday)                               //valor convertido => valor escrito / valor do Dólar hoje
        }   

        else if(currencySelect1.value == "dolar1" && currencySelect2.value == "real2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * DolarRealToday)                                               //repetir o valor que está no input
        }

        else if(currencySelect1.value == "euro1" && currencySelect2.value == "real2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * EuroRealToday)                                               //repetir o valor que está no input
        }

        else if(currencySelect1.value == "libra1" && currencySelect2.value == "real2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * LibraRealToday)                                               //repetir o valor que está no input
        }
            
        else if(currencySelect2.value == "real2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)                                               //repetir o valor que está no input
        }

        else if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * BitcoinEuroToday)                               //valor convertido => valor escrito / valor do Dólar hoje
        }   
            
        else if(currencySelect1.value == "dolar1" && currencySelect2.value == "euro2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / EuroDolarToday)                                               //repetir o valor que está no input
        }
            
        else if (currencySelect1.value == "libra1" && currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * LibraEuroToday)                             //valor convertido => valor escrito / valor do Euro hoje
        }

        else if (currencySelect1.value == "euro1" && currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)                             //valor convertido => valor escrito / valor do Euro hoje
        }
            
        else if (currencySelect2.value == "euro2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / EuroRealToday)                             //valor convertido => valor escrito / valor do Euro hoje
        }

        else if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * BitcoinDolarToday / LibraDolarToday)                               //valor convertido => valor escrito / valor do Dólar hoje
        }   

        else if (currencySelect1.value == "dolar1" && currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / LibraDolarToday)                             //valor convertido => valor escrito / valor do Euro hoje
        }
            
        else if (currencySelect1.value == "euro1" && currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / LibraEuroToday)                             //valor convertido => valor escrito / valor do Euro hoje
        }
            
        else if(currencySelect1.value == "libra1" && currencySelect2.value == "libra2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)                           //valor convertido => valor escrito / valor da Libra hoje 
        }

        else if (currencySelect1.value == "satoshi1" && currencySelect2.value == "libra2") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "GBP"
            }).format((inputCurrencyValue * BitcoinDolarToday / LibraDolarToday) / 100000000)                 //valor convertido => valor escrito / valor do Dólar hoje
        }   

            
        else if(currencySelect2.value == "libra2"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / LibraRealToday)                           //valor convertido => valor escrito / valor da Libra hoje 
        }

        else if (currencySelect1.value == "euro1" && currencySelect2.value == "satoshi2") {
            const bitcoinValueFormatted = (inputCurrencyValue / BitcoinEuroToday).toFixed(0); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "sat " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }

        else if (currencySelect1.value == "libra1" && currencySelect2.value == "satoshi2") {
            const bitcoinValueFormatted = (inputCurrencyValue * LibraDolarToday / BitcoinDolarToday).toFixed(0); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "sat " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }
            
        else if (currencySelect1.value == "bitcoin1" && currencySelect2.value == "satoshi2") {
            const bitcoinValueFormatted = (inputCurrencyValue * 100000000).toFixed(0); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "sat " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }

        else if (currencySelect1.value == "satoshi1" && currencySelect2.value == "satoshi2") {
            const bitcoinValueFormatted = (inputCurrencyValue).toFixed(0); // formata o valor com 8 casas decimais
            currencyValueConverted.innerHTML = "sat " + bitcoinValueFormatted;             // exibe o valor com 8 casas decimais
        }
            
        else if (currencySelect2.value == "satoshi2") {
            const bitcoinValueFormatted = (inputCurrencyValue / BitcoinRealToday).toFixed(0); // formata o valor sem casas decimais
            currencyValueConverted.innerHTML = "sat " + bitcoinValueFormatted;             // exibe o valor sem casas decimais
        }
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

    if (currencySelect1.value == "satoshi1") {
        currencyName1.innerHTML = "Satoshi"
        currancyImage1.src = "./assets/bitcoin.png"
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
    
    if (currencySelect1.value == "satoshi2") {
        currencyName1.innerHTML = "Satoshi"
        currancyImage1.src = "./assets/bitcoin.png"
    }
    
    convertValues()
}

function setUpEvents(){
    displayBTCUSD();
    displayBTCBRL();
    displayBTC();
    displaySats();
}

//Executa a função quando a página estiver carregada
window.onload = function() {
    setUpEvents();
};

currencySelect1.addEventListener("change", changeCurrency1)
currencySelect2.addEventListener("change", changeCurrency2)
convertButton.addEventListener("click", convertValues)
