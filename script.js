const sanduiche = document.getElementById('sanduiche');
const nav = document.querySelector('#nav ul');

sanduiche.addEventListener('click', () => {
    nav.classList.toggle('active');
    sanduiche.classList.toggle('open');
});