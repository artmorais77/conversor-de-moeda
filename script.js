const button = document.querySelector(".button");
const select = document.querySelector(".select");

async function converterValor() {
    const input = parseFloat(document.querySelector(".input").value);
    const valorParaConverter = document.querySelector(".valor-converter");
    const moedaConvertida = document.querySelector(".valor-convertido");

    if (isNaN(input) || input <= 0) {
        moedaConvertida.innerHTML = "Insira um valor válido!";
        return;
    }

    const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL")
        .then(res => res.json());

    const taxas = {
        dolar: { convert: data.USDBRL.bid, locale: "en-US", currency: "USD", name: "Dólar", img: "./assets/dolar.png" },
        real: { convert: 1, locale: "pt-BR", currency: "BRL", name: "Real", img: "./assets/real.png" },
        euro: { convert: data.EURBRL.bid, locale: "de-DE", currency: "EUR", name: "Euro", img: "./assets/euro.png" },
        libra: { convert: data.GBPBRL.bid, locale: "en-GB", currency: "GBP", name: "Libra", img: "./assets/libra.png" },
        bitcoin: { convert: data.BTCBRL.bid, locale: "en-US", currency: "BTC", name: "Bitcoin", img: "./assets/bitcoin.png" }
    };

    const moedaSelecionada = taxas[select.value];

    if (moedaSelecionada) {
        moedaConvertida.innerHTML = new Intl.NumberFormat(moedaSelecionada.locale, {
            style: "currency",
            currency: moedaSelecionada.currency
        }).format(input / moedaSelecionada.convert);
    }

    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input);
}

function mudarMoeda() {
    const nomeMoeda = document.querySelector("#nome-moeda");
    const imgConvertido = document.querySelector(".img-convertido");

    const moedas = {
        dolar: { name: "Dólar", img: "./assets/dolar.png" },
        real: { name: "Real", img: "./assets/real.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        libra: { name: "Libra", img: "./assets/libra.png" },
        bitcoin: { name: "Bitcoin", img: "./assets/bitcoin.png" }
    };

    const moedaSelecionada = moedas[select.value];

    if (moedaSelecionada) {
        nomeMoeda.innerHTML = moedaSelecionada.name;
        imgConvertido.src = moedaSelecionada.img;
    }

    converterValor();
}

select.addEventListener("change", mudarMoeda);
button.addEventListener("click", converterValor);
