const prompt = require("prompt-sync")();

let playlist = [
    "Numb",
    "In The End",
    "Enter Sandman",
    "Fear of the Dark",
    "Breaking the Law",
    "Master of Puppets",
    "The Trooper",
    "Paranoid"
];

alert ("Playlist atual: " + playlist.join(", "));
alert ("Opções:");
alert (" 1 - Pesquisar música")
alert (" 2 - Criar seleção")
alert (" 3 - Remover música")
alert (" 4 - Inserir música")
alert (" 5 - Ordenar A-Z")
alert (" 6 - Inverter playlist")
alert (" 7 - Exibir playlist")
alert (" 8 - Exibir playlist completa")
alert (" 0 - Sair")

let opcao = 1


if (opcao = 1) {alert ("Qual músicsa você quer ouvir? Digiet abaixo..");

if (playlist.includes("Fear of the Dark")) {
    alert ("Música encontrada! Na posição: " + playlist.indexOf("Fear of the Dark"));
} 

else {
    alert ("Música não encontrada!");
}
}

else if (opcao = 2) { 
    alert ("Informe duas posições da playlist para criar uma nova playlist:")

        let posicoes = playlist.slice(1, 4);

    alert ("Nova playlist criada: " + posicoes);
}

else if (opcao = 3) {
    alert ("Vamos remover uma música da playlist. Digite a música que deseja remover: ");

        playlist.splice("Breaking the Law", 1);
    
    alert ("Playlist atualizada: " + playlist);
}

else if (opcao = 4) {
        alert ("vamos adicionar uma música. Digite o nome da música que deseja adicionar: ");

    let novamusica = "Billie jean";

        alert ("Informe a posição que deseja adicionar a música: ");

    playlist.splice(2, 0, novamusica);

        alert ("Playlist atualizada: " + playlist);
}

else if (opcao = 5) {
    alert ("Playlist em ordem alfabética:");
    alert (playlist.sort());
}

else if (opcao = 6) {
    alert ("Playlist invertida:");
    alert (playlist.reverse());
}

else if (opcao = 7) {
    alert ("transformando em string:");
    alert (playlist.join("|"));
}

else if (opcao = 8) {
    alert ("==== Minha Playlist ====");
    alert (playlist.join(", "));
}

else {
    alert ("Você saiu")
}

