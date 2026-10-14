var resp = window.document.getElementById('saida');

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'

    const pi =3.14;

    let a = prompt("Informe um número");
    if (a != "6") {
        resp.innerHTML += '<h1>Diferente de 6</h1>';
    } else {
        resp.innerHTML += '<h1>Igual a 6</h1>';
    }
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>'

    switch(prompt("Como está o tempo use chuvoso, ensolarado ou nublado."))
    {
        case "chuvoso":
            resp.innerHTML += '<h1>Lembresse de trazer guarda-chuva!</h1>';
            break;
        case "ensolarado":
            resp.innerHTML += '<h1>Vista roupas leves</h1>';
            break;
        case "nublado":
            resp.innerHTML += '<h1>Vá lá fora!!!</h1>';
            break;
        default:
            resp.innerHTML += '<h1>Tempo desconhecido</h1>';            
    }
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'

    let numero = prompt("Informe um número");
    for (i = 0; i < numero; i++) {
        resp.innerHTML += '<p>Paragrafo ' + i + '</p>';
    }
}