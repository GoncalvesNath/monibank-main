const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaoIniciarCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video: true, audio: false})

    botaoIniciarCamera.computedStyleMap.display = "none";
    campoCamera.computedStyleMap.display = "block";

    video.srcObject = iniciarVideo;
})