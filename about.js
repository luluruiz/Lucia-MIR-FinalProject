document.addEventListener('DOMContentLoaded', function () {
    const buttonCat = document.getElementById('buttonCat');
    let count = 0;
  
    // Function to handle the button click event
    function addNumber() {
      count++;
  
      if (count <= 3) {
          buttonCat.textContent = ` 🐱${count}`;
      }
    }
  
    // Attach the click event to the button
    buttonCat.addEventListener('click', addNumber);
  });

  // DOG BUTTON
  document.addEventListener('DOMContentLoaded', function () {
    const buttonDog = document.getElementById('buttonDog');
    let count = 0;
  
    // Function to handle the button click event
    function addNumber() {
      count++;
  
      if (count <= 2) {
          buttonDog.textContent = ` 🐶 ${count}`;
      }
  
    }
  
    // Attach the click event to the button
    buttonDog.addEventListener('click', addNumber);
  });