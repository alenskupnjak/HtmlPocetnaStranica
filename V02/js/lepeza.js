const lepeza = document.querySelector('.lepeza');
const kartica = document.querySelectorAll('.kartica');

let polozajKartica;

function start() {
  setTimeout(() => {
    postaviLisenere(-190);
  }, 5500);
}

function postaviLisenere(kut) {
  kartica.forEach((e) => {
    e.addEventListener('click', (data) => {
      console.log('Kartica u položaju unutar', polozajKartica);
      if (polozajKartica) {
        console.log('U liseneru sam', polozajKartica);
        vratiKarticuNaPocetniPolozaj(e, polozajKartica);
      }
      let id;
      br = -1;
      do {
        br = br + 1;
        id = data.path[br].getAttribute('data-id');
      } while (!data.path[br].getAttribute('data-id'));
      zarotiraj(e, id + 'deg');
    });

    kut = kut - 5;
    kutDOM = kut + 'deg';
    zarotirajKodUcitavanja(e, kutDOM);
  });
}

function zarotiraj(e, kut) {
  polozajKartica = e.dataset.id;
  console.log('kartica koja je u polozaju za prikaz=', polozajKartica);
  e.setAttribute('style', `transform:rotate(0deg); transition: transform 1s;`);
}

function zarotirajKodUcitavanja(e, kut) {
  e.setAttribute( 'style',`transform:rotate(${kut}); transition: transform 5s;`);
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
