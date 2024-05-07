// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let talk = new SpeechSynthesisUtterance();
  let voiceSelect = document.querySelector("#voice-select");
  var icon = document.querySelector('img');

  window.speechSynthesis.onvoiceschanged = () => {
    const voices = speechSynthesis.getVoices();
    talk.voice = voices[0];

    voices.forEach((voice) =>{
      voiceSelect.options.add(new Option(voice.name, voice.name));
    });
  };
  
  voiceSelect.addEventListener("change", () =>{
    const voices = speechSynthesis.getVoices();
    talk.voice = voices.find(voice => voice.name === voiceSelect.value);
  });

  document.querySelector("button").addEventListener("click",() => {
    talk.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(talk);

  // Update the icon
    if (speechSynthesis.speaking) {
        icon.src = 'assets/images/smiling-open.png';
        
    }
    talk.addEventListener('end', () => {
      // Update the icon to closed mouthed
      icon.src = 'assets/images/smiling.png';
    });
  });
 
  
  
}