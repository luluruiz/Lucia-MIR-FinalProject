

document.addEventListener('DOMContentLoaded', function () {
    const changeIndexButton = document.getElementById('changeIndexButton');
  
    function goToNewIndex() {
      const newIndex = 'about.html'; 
      window.location.href = newIndex;
    }
  
    changeIndexButton.addEventListener('click', goToNewIndex);
  });


    
 
