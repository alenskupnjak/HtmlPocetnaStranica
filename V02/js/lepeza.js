const lepeza = document.querySelector('.lepeza');
const kartica = document.querySelectorAll('.kartica');

let polozajKartica;

function start() {
  setTimeout(() => {
    postaviLisenere(-190);
  }, 2000);
}

function postaviLisenere(kut) {
  kartica.forEach((e) => {
    e.addEventListener('click', () => {
      if (polozajKartica) {
        vratiKarticuNaPocetniPolozaj(e, polozajKartica);
      }
      zarotiraj(e);
    });
    kut = kut - 5;    
    kutDOM = kut + 'deg';
    zarotirajKodUcitavanja(e, kutDOM);
  });
}

function zarotiraj(e) {
  polozajKartica = e.dataset.id;
  console.log(polozajKartica);
  // console.log(e.childNodes);
  // console.log(e.previousSibling);
  // console.log(e.previousElementSibling);
  // console.log('Children= ', e.children);
  // console.log(e.children[0]);
  // console.log(e.children[1]);
  // console.log('e.nextSibling', e.nextSibling);
  // console.log(e.nextElementSibling);
  // console.log(e.nextElementSibling.nextElementSibling);
  // e.children[1].classList.add('animated-bg');

  Array.from(e.children).forEach((data) => {
    if (data.tagName === 'H5') {
      data.classList.add('animated-bg');
      
    }
    if (data.tagName === 'H3') {
      data.remove();
    }
  });

  console.log('kartica koja je u polozaju za prikaz=', polozajKartica);
  e.setAttribute('style', `transform:rotate(0deg); transition: transform 1s;`);
}

function zarotirajKodUcitavanja(e, kut) {
  e.setAttribute(
    'style',
    `transform:rotate(${kut}); transition: transform 5s;`
  );
}

function vratiKarticuNaPocetniPolozaj(e, polozajKartica) {
  kartica.forEach((kartica) => {
    if (kartica.dataset.id === polozajKartica) {
      polozajKartica = parseInt(-polozajKartica) - 20;
      // console.log(typeof(polozajKartica));
      polozajKartica = polozajKartica + 'deg';
      kartica.setAttribute(
        'style',
        `transform:rotate(${polozajKartica}); transition: transform 2s;`
      );
    }
  });

  e.setAttribute(
    'style',
    `transform:rotate(${polozajKartica}); transition: transform 2s;`
  );

  console.log('TRENUTNA KARTICA=', polozajKartica);
}

// kod svake obnavljanje stranice okrevemo ponovo
window.addEventListener('load', start);
