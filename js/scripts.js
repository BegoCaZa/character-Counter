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


//FUNCIONES


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

  
    wordsArray = text.split(' '); //(pasar el texto a un array y contar los elementos)
    wordCountElement.textContent = wordsArray.length;
    if (textAreaElement.value === '') {
      wordCountElement.textContent = 0; //si no hay nada en el textarea, el contador de palabras se pone a 0
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

  calculateReadingTime(wordsArray.length); //aqui llamo la cuenta de minutos con ese array
//porque no lo necesito?  return wordsArray.length; //devuelve el número de palabras
 
};

const calculateReadingTime = (words) => { //regla de tres

    let readingTime = Math.floor(words / 250); //redondear hacia abajo
    readingTimeElement.textContent = readingTime;
  
    console.log(readingTime);
  }




// EVENTOS
textAreaElement.addEventListener('input', analizeText);
excludeSpacesCheckbox.addEventListener('change', analizeText);
