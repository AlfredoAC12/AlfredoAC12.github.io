document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById("playBtn");
    const audio = document.getElementById("audio");

    playButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play(); // Reproduce el audio
            playButton.textContent = "💛"; // Cambia el texto del botón a pausa
        } else {
            audio.pause(); // Pausa el audio
            playButton.textContent = "🤍"; // Cambia el texto del botón a reproducir
        }
    });
});
