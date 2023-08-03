document.addEventListener('DOMContentLoaded', function () {
    const buttonCat = document.getElementById('buttonCat');
    let count = 0;
  
    function addNumber() {
      count++;
  
      if (count <= 3) {
          buttonCat.textContent = ` 🐱${count}`;
      }
    }
  
    buttonCat.addEventListener('click', addNumber);
  });

  // DOG BUTTON
  document.addEventListener('DOMContentLoaded', function () {
    const buttonDog = document.getElementById('buttonDog');
    let count = 0;
  
    function addNumber() {
      count++;
  
      if (count <= 2) {
          buttonDog.textContent = ` 🐶 ${count}`;
      }
  
    }
  
    buttonDog.addEventListener('click', addNumber);
  });

  // arrow index

  document.addEventListener('DOMContentLoaded', function () {
    const arrowleft = document.getElementById('arrowleft');
  
    function goToIndex() {
      const newIndex = 'indexlu.html'; 
      window.location.href = newIndex;
    }
  
    arrowleft.addEventListener('click', goToIndex);
  });


  // arrow projects

  document.addEventListener('DOMContentLoaded', function () {
    const arrowright = document.getElementById('arrowright');
  
    function goToIndex() {
      const newIndex = 'projects.html'; 
      window.location.href = newIndex;
    }
  
    // Attach the click event to the button
    arrowright.addEventListener('click', goToIndex);
  });
