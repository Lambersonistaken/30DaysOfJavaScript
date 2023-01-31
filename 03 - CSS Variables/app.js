
// getting all the inputs
const inputs = document.querySelectorAll('.controls input');

//  function to handle the change
function handleUpdate() {

    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

//  looping through the inputs and adding event listener
inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));