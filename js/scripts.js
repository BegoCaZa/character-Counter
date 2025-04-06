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
    let text = textAreaElement.value; //contenido a analizar
    //CHARACTERS

    if (excludeSpacesCheckbox.checked) {
        let textWithoutSpaces = text.replaceAll(" ", ''); // Eliminar espacios
        let totalCharacters = textWithoutSpaces.length;

        totalCharactersElement.textContent = totalCharacters; //imprime esos valores SIN ESPACIOS
    } else {
        totalCharactersElement.textContent = text.length; //imprime esos valores CON ESPACIOS
    }
  
    //WORDS 

    const wordsArray = text.split(' '); //(pasar el texto a un array y contar los elementos)
    let wordCount = 0; //empieza e 0

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] !== ' ') { //si el elemento es un espacio, no cuenta
        wordCount++; //incrementa el contador
    }

    wordCountElement.textContent = wordCount;
  
}
    //SENTENCES
    let sentencesCount = 0; //empieza en 0

    for (let i = 0; i < wordsArray.length; i++) {
        
        if (wordsArray[i] === '.') { //si tiene un punto, cuenta como una oración
            sentencesCount++; //incrementa el contador
        }
        
        sentenceCountElement.textContent = sentencesCount; //imprime el valor de las oraciones
    }


}

// EVENTOS
textAreaElement.addEventListener('input', analizeText);
excludeSpacesCheckbox.addEventListener('change', analizeText);