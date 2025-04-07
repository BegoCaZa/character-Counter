// Orden en el código.
// 1º Constantes del DOM
// 2º Variables del DOM
// 3º Constantes JS
// 4º Variables JS
// 5º Funciones
// 6º Acciones (código que se tiene que ejecutar al arrancar por primera vez)
// 7º Eventos

// CONSTANTES DEL DOM
const textAreaElement = document.getElementById('text-input');
const excludeSpacesCheckbox = document.getElementById('exclude-spaces');
const readingTimeElement = document.getElementById('reading-time');
const totalCharactersElement = document.getElementById('total-characters');
const wordCountElement = document.getElementById('word-count');
const sentenceCountElement = document.getElementById('sentence-count');

// VARIABLES
// let text = textAreaElement.value; //contenido a analizar

//FUNCIONES

//  const deleteSpaces = text => {
// const textWithoutSpaces='';
//     if (excludeSpacesCheckbox.checked) {
//     textWithoutSpaces = text.replaceAll(" ", ''); // Eliminar espacios
//     }
//  return textWithoutSpaces;
//  }

const analizeText = () => {
  //va a reiniciarlos cada que haya nuevo input
  let text = textAreaElement.value; //contenido a analizar
  let wordsArray = 0;
  let sentencesArray = 0;

  //CHARACTERS
  if (excludeSpacesCheckbox.checked) {
    let textWithoutSpaces = text.replaceAll(' ', ''); // Eliminar espacios
    let totalCharacters = textWithoutSpaces.length;

    totalCharactersElement.textContent = totalCharacters; //imprime esos valores SIN ESPACIOS
  } else {
    totalCharactersElement.textContent = text.length; //imprime esos valores CON ESPACIOS
  }

  //WORDS

  if (textAreaElement.value === '') {
    wordsArray = text.split(' '); //(pasar el texto a un array y contar los elementos)
    wordCountElement.textContent = wordsArray.length;
  } else {
    wordCountElement.textContent = 0;
  }

  //SENTENCES

  if (text.includes('.')) {
    //EMPIEZA A HACERLO HASTA QUE EXISTE UN PUNTO
    sentencesArray = text.split('.');
    console.log(sentencesArray);
    sentenceCountElement.textContent = sentencesArray.length - 1; //imprime el valor de las oraciones
  } else {
    sentenceCountElement.textContent = 0;
  }
};

// EVENTOS
textAreaElement.addEventListener('input', analizeText);
excludeSpacesCheckbox.addEventListener('change', analizeText);
