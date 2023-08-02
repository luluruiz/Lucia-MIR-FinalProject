

document.addEventListener('DOMContentLoaded', function () {
    const changeIndexButton = document.getElementById('changeIndexButton');
  
    function goToNewIndex() {
      const newIndex = 'about.html'; 
      window.location.href = newIndex;
    }
  
    // Attach the click event to the button
    changeIndexButton.addEventListener('click', goToNewIndex);
  });


    
 
