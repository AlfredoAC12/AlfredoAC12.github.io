// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Look at the stars", time: 32 },
  { text: "Look how they shine for you", time: 33 },
  { text: "And everything you do", time: 41 },
  { text: "Yeah, they were all yellow", time: 46 },
  { text: "I came along", time: 49 },
  { text: "I wrote a song for you", time: 52 },
  { text: "And all the things you do", time: 58 },
  { text: "And it was called Yellow", time: 63 },
  { text: "So, then, I took my turn", time: 70 },
  { text: "Oh, what a thing to have done", time: 74 },
  { text: "And it was all yellow", time: 79 },
  { text: "Your skin", time: 88 },
  { text: "Oh, yeah, your skin and bones", time: 91 },
  { text: "Turn into something beautiful", time: 95 },
  { text: "Do you know", time: 99 },
  { text: "You know I love you so?", time: 101 },
  { text: "You know I love you so?", time: 107 },
  { text: "I swam across", time: 132 },
  { text: "I jumped across for you", time: 135 },
  { text: "Oh, what a thing to do", time: 140 },
  { text: "Cause you were all yellow", time: 146 },
  { text: "I drew a line", time: 148 },
  { text: "I drew a line for you", time: 152 },
  { text: "Oh, what a thing to do", time: 158 },
  { text: "And it was all yellow", time: 163 },
  { text: "And your skin", time: 170 },
  { text: "Oh, yeah, your skin and bones", time: 173 },
  { text: "Turn into something beautiful", time: 178 },
  { text: "Do you know", time: 181 },
  { text: "For you, I'd bleed myself dry?", time: 186 },
  { text: "For you, I'd bleed myself dry", time: 191 },
  { text: "It's true", time: 212 },
  { text: "Look how they shine for you", time: 220 },
  { text: "Look how they shine for you", time: 225 },
  { text: "Look how they shine for", time: 229 },
  { text: "Look how they shine for you", time: 235 },
  { text: "Look how they shine for you", time: 240 },
  { text: "Look how they shine", time: 246 },
  { text: "Look at the stars", time: 248 },
  { text: "Look how they shine for you", time: 252 },
  { text: "And all the things that you do", time: 256 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 270 segundos (270,000 milisegundos)
setTimeout(ocultarTitulo, 270000);