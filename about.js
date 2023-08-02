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


  document.addEventListener('DOMContentLoaded', function () {
    const arrowleft = document.getElementById('arrowleft');
  
    function goToIndex() {
      const newIndex = 'indexlu.html'; 
      window.location.href = newIndex;
    }
  
    // Attach the click event to the button
    arrowleft.addEventListener('click', goToIndex);
  });



  document.addEventListener('DOMContentLoaded', function () {
    const arrowright = document.getElementById('arrowright');
  
    function goToIndex() {
      const newIndex = 'indexlu.html'; 
      window.location.href = newIndex;
    }
  
    // Attach the click event to the button
    arrowright.addEventListener('click', goToIndex);
  });
