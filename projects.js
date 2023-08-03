  // arrow left

  document.addEventListener('DOMContentLoaded', function () {
    const arrowleft = document.getElementById('arrowleft');
  
    function goToIndex() {
      const newIndex = 'about.html'; 
      window.location.href = newIndex;
    }
  
    arrowleft.addEventListener('click', goToIndex);
  });


  // arrow projects

  document.addEventListener('DOMContentLoaded', function () {
    const arrowright = document.getElementById('arrowright');
  
    function goToIndex() {
      const newIndex = 'index.html'; 
      window.location.href = newIndex;
    }
  
    // Attach the click event to the button
    arrowright.addEventListener('click', goToIndex);
  });
