// expose.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  
  const element = document.querySelector('#horn-select');
  var icon = document.querySelector('img');
  const buttons = document.querySelectorAll("button");
  const audioAir = new Audio('assets/audio/air-horn.mp3');
  const audioCar = new Audio('assets/audio/car-horn.mp3');
  const audioParty = new Audio('assets/audio/party-horn.mp3');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  
  const jsConfetti = new JSConfetti();


  element.addEventListener('change', () => {
    if (element.value == "air-horn") {
      icon.src = 'assets/images/air-horn.svg';
    }
    if (element.value == "car-horn") {
      icon.src = 'assets/images/car-horn.svg';
    }
    if (element.value == "party-horn") {
      icon.src = 'assets/images/party-horn.svg';
    }
  });

//play sound based on value of selected element
  
  buttons.forEach(button => {
    button.addEventListener("click", () =>
    {
      if (element.value == "air-horn") {
        audioAir.play();
      }
      if (element.value == "car-horn") {
        audioCar.play();
      }
      if (element.value == "party-horn") {
        audioParty.play();
        jsConfetti.addConfetti()
      }
    });
  });

  function updateVolumeIcon(volume){
    volume = parseFloat(volume);
    if(volume === 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if( volume < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }

  updateVolumeIcon(volumeSlider.value);

  volumeSlider.addEventListener('input', () =>{
    const volume = volumeSlider.value;
    updateVolumeIcon(volume);

    audioAir.volume = volume/100;
    audioCar.volume = volume/100;
    audioParty.volume = volume/100;
  });

  updateVolumeIcon(volumeSlider.value);

  



}
