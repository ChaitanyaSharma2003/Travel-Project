let searchBtn = document.querySelector('#seach-btn');
let searchBtn = document.querySelector('.search-bar-container');

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchBtn.classList.remove('active');
}
searchBtn.addEventListener('click', () =>{
   searchBtn.classList.toggle('fa-times');
   searchBtn.classList.toggle('active');
});