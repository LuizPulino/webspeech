const text = document.getElementById('text');
const start = document.getElementById('start');
const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance(text.innerText);
utterance.lang = 'pt-BR';
utterance.rate = 1;
utterance.speed = 1;
start.addEventListener('click', () => {
  synth.speak(utterance);
});