const sanduiche = document.getElementById('sanduiche');
const nav = document.querySelector('#nav ul');

['click', 'touchstart'].forEach(evt => {
  sanduiche.addEventListener(evt, (e) => {
    e.preventDefault(); 
    nav.classList.toggle('active');
    sanduiche.classList.toggle('open');
  });
});