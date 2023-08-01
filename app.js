

document.addEventListener('DOMContentLoaded', function () {
    const changeIndexButton = document.getElementById('changeIndexButton');
  
    function goToNewIndex() {
      const newIndex = 'about.html'; 
      window.location.href = newIndex;
    }
  
    // Attach the click event to the button
    changeIndexButton.addEventListener('click', goToNewIndex);
  });


// document.addEventListener('click', function () {
//     const catNumberButton = document.getElementById('buttonCat');
  

//     function catNumber() {

//     let catNumber = [0,1,2,3];
//     for (let i = 0; i < catNumber.length; i++) {

//         buttonCat.addEventListener("click", catNumber);}
//     }});
    

    
 
