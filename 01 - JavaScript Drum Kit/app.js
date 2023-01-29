// by Lambersonistaken

    // function for playing the sound
    function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing'); // add the class playing to the key

    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    // function for removing the transition
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; // skip it if it's not a transform
        this.classList.remove('playing');
    }



    window.addEventListener("keydown", playSound );