let menu=document.querySelector('#bars');
let navbar=document.querySelector('.navbar');
menu.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

// Rating Initialization
$(document).ready(function() {
  $('#rateMe1').mdbRate();
});