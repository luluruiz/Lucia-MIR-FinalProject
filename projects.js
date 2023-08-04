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
      const newIndex = 'indexlu.html'; 
      window.location.href = newIndex;
    }
  
    arrowright.addEventListener('click', goToIndex);
  });


  const contactButton = document.getElementById('contactButton');
  const contactForm = document.getElementById('contactForm');
  
  contactButton.addEventListener('click', () => {
      
      contactForm.classList.toggle('hidden');
  });
  