const button = document.querySelector(".button")
const select = document.querySelector(".select")

function converterValor() {
    const input = document.querySelector(".input").value
    const valorParaConverter = document.querySelector(".valor-converter")
    const moedaConvertida = document.querySelector(".valor-convertido")

    const dolarHoje = 5.2
    const realHoje = 1
    const euroHoje = 6.2
    const libraHoje = 5.5
    const bitcoinHoje = 353167.89


    if (select.value == "dolar") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / dolarHoje)
    }

    if (select.value == "real") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input / realHoje)
    }

    if (select.value == "euro") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("eu-EN", {
            style: "currency",
            currency: "EUR"
        }).format(input / euroHoje)
    }

    if (select.value == "libra") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(input / libraHoje)
    }

    if (select.value == "bitcoin") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(input / bitcoinHoje)
    }


    valorParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input)

}

function mudarMoeda() {

    const nomeMoeda = document.querySelector("#nome-moeda")
    const imgConvertido = document.querySelector(".img-convertido")

    if (select.value == "dolar") {
        nomeMoeda.innerHTML = "Dolar"
        imgConvertido.src = "./assets/dolar.png"
    }

    if (select.value == "real"){
        nomeMoeda.innerHTML = "Real"
        imgConvertido.src = "./assets/real.png"
    }

    if (select.value == "euro"){
        nomeMoeda.innerHTML = "Euro"
    imgConvertido.src = "./assets/euro.png"
    }

    if (select.value == "libra"){
        nomeMoeda.innerHTML = "Libra"
        imgConvertido.src = "./assets/libra.png"
    }

    if (select.value == "bitcoin"){
        nomeMoeda.innerHTML = "BitCoin"
        imgConvertido.src = "./assets/bitcoin.png"
    }

    converterValor()
}

select.addEventListener("change", mudarMoeda)
button.addEventListener("click", converterValor)