function fade() {
  const flyer = document.querySelector('.flyer');
  flyer.classList.add('show');
}

document.addEventListener('DOMContentLoaded', fade);

document.addEventListener('DOMContentLoaded', function () {
  const flyers = [
    STATIC_URL + 'imagens/breve.jpg',
    // coloque mais imagens aqui, sempre concatenando com STATIC_URL
  ];

  let index = 0;
  const img = document.querySelector('.flyer-img');

  function atualizarFlyer() {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = flyers[index];
      img.style.opacity = '1';
    }, 300);
  }

  window.trocarFlyer = function () {
    index = (index + 1) % flyers.length;
    atualizarFlyer();
  };

  window.voltarFlyer = function () {
    index = (index - 1 + flyers.length) % flyers.length;
    atualizarFlyer();
  };
});
