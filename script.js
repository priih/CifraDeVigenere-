//alfabeto
var alphabet = "abcdefghijklmnopqrstuvwxyz";

//cifrar palavra
function cipher() {
	var palavra = (document.querySelector('.palavra').value.toLowerCase());
	var chave = (document.querySelector('.chave').value.toLowerCase());
	var numsim = '1234567890!@#$%¨&*()_+,./|';
	console.log(`chave ${chave}`);
	console.log(palavra)
	var j = 0;
	var resultado = ' ';

	for (var i = 0; i < palavra.length; i++) {

        if (j >= chave.length) {
            j = 0;
        }

        if (palavra.charAt(i) === " ") {
            resultado = resultado + " ";
            ++i;
        }

        for (let k = 0; k < numsim.length; k++) {
            if (palavra.charAt(i) === numsim.charAt(k)) {
                resultado = resultado + numsim.charAt(k)
                ++i;
            }
        }

        if (i < palavra.length) {
            var posicaochave = alphabet.indexOf(chave.charAt(j)); //pega posição das letras da chave
            var posicaoletra = alphabet.indexOf(palavra.charAt(i)); //pega posição das letras da palavra
            var novaChave = posicaochave + posicaoletra; //soma os dois de cima para fazer a criptografia

            if (novaChave >= 25) {
                novaChave = novaChave - 26;
            }

            if (novaChave < 0) {
                novaChave = novaChave + 26;
            }

            resultado = resultado + alphabet.charAt(novaChave);

            j++;
        }
	}
	console.log(document.querySelector('.return-cipher'))
	document.querySelector('.return-cipher').innerHTML = resultado;
}

//decifrar palavra
function decipher() {
	var palavra = (document.querySelector('.palavra').value.toLowerCase());
	var chave = (document.querySelector('.chave').value.toLowerCase());
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    var numsim = '1234567890!@#$%¨&*()_+,./|';
    var resultado = "";
    var j = 0;
    for (var i = 0; i < palavra.length; i++) {

        if (j >= chave.length) {
            j = 0;
        }

        if (palavra.charAt(i) === " ") {
            resultado = resultado + " ";
            ++i;
        }

        for (let k = 0; k < numsim.length; k++) {
            if (palavra.charAt(i) === numsim.charAt(k)) {
                resultado = resultado + numsim.charAt(k)
                ++i;
            }
        }

        if (i < palavra.length) {
            var posicaochave = alfabeto.indexOf(chave.charAt(j));
            var posicaoletra = alfabeto.indexOf(palavra.charAt(i));
            var novaChave = posicaoletra - posicaochave;

            if (novaChave >= 25) {
                novaChave = novaChave - 26;
            }

            if (novaChave < 0) {
                novaChave = novaChave + 26;
            }

            resultado = resultado + alfabeto.charAt(novaChave);
            j++;
        }
    }
	console.log(document.querySelector('.return-decipher'))
	document.querySelector('.return-decipher').innerHTML = resultado;
}