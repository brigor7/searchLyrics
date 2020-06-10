let artista = null;
let musica = null;
let button = null;
let error = null;
let headerLyrics = null;
let bodyLyrics = null;

window.addEventListener('load', (start) => {
  artista = document.querySelector('#artist');
  musica = document.querySelector('#music');
  button = document.querySelector('a');
  msgError = document.querySelector('#error');
  headerLyrics = document.querySelector('#headerLyrics');
  bodyLyrics = document.querySelector('#bodyLyrics');
  buscarDados();
});

function buscarDados() {
  button.addEventListener(
    'click',
    () => {
      if (!isCampoVazio(artista.value, musica.value)) {
        msgError.innerText = 'Informe o artista e a música!';
      } else {
        headerLyrics.innerText = artista.value + ' - ' + music.value;
        limparCampos();
        limparMsgError();
      }
    },
    false
  );
}

async function fetchLyrics() {
  try {
    console.log(artista + ' - ' + musica);
    let json = await fetch(
      `https://api.lyrics.ovh/v1/${artista.value}/${musica.value}`
    );
    console.log('json');
    let letra = await json.json();
    console.log(letra.lyrics);
    //bodyLyrics.innerText = letra.lyrics;
    limparMsgError();
  } catch (error) {
    msgError.innerText = 'Ocorreu um erro na busca da música:' + error.message;
  }
}

function isCampoVazio(artist, music) {
  if (artista.value !== '' && musica.value !== '') {
    return true;
  }
  return false;
}

function limparCamposLyrics() {
  headerLyrics.innerText = '';
  bodyLyrics.innerText = '';
}

function limparCampos() {
  artista.value = '';
  musica.value = '';
}

function limparMsgError() {
  msgError.innerText = '';
}
