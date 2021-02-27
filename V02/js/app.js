window.addEventListener('scroll', (e) => {
  // console.log(' - scroll - ');
  // console.log('01- document.body.scrollWidth=', document.body.scrollWidth);
  // console.log('02- document.body.scrollHeight', document.body.scrollHeight);
  // console.log('03- window.innerHeight', window.innerHeight);
  // console.log('04- window.pageYOffset', window.pageYOffset);
  // console.log('05- window.scrollTop', window.scrollbars);
  // console.log('Current scroll from the left: ' + window.pageXOffset);
});

// promjeni boju na NAV baru
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 400);
  $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 400);
});

const nav = document.getElementById('main-nav');
window.addEventListener('scroll', fixNav);
function fixNav() {
  // console.log(nav.offsetHeight, window.scrollY);
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

//
const linkoviLepeza = document.querySelectorAll('.kartica a');
const linkoviDOM = document.querySelectorAll('[id]');
console.log(linkoviDOM);

linkoviLepeza.forEach((e) => {
  e.addEventListener('click', (data) => {
    let dataHash = data.target.hash;
    let re = /#/i; // Zamjeni # sa blank
    dataHash = dataHash.replace(re, '');

    linkoviDOM.forEach((dataDOM) => {
      // dataDOM.classList.remove('oznaci-program');
      if (dataDOM.getAttribute('id') === dataHash) {
        // console.log(dataDOM.innerHeight);
        // console.log(dataDOM.parentElement);
        // console.log(
        //   dataDOM.screenY,
        //   dataDOM.scrollTop,
        //   dataDOM.offsetTop,
        //   dataDOM.offsetLeft,
        //   dataDOM.clientY,
        //   dataDOM.clientX
        // );
        // dataDOM.scrollTop = '100px'
        dataDOM.classList.add('oznaci-program');

        // Kreiram element
        const div = document.createElement('div');
        // Definiram klasu
        div.classList.add('povratak');
        // Create text node and append to li
        // div.appendChild(document.createTextNode('Povratak'));

        div.innerHTML = '<a href="#lepeza">Povratak na lepezu</a>';
        div.addEventListener('click', povratakLepezi);

        if (dataDOM.classList.contains('item')) {
          console.log(dataDOM.children[5]);
          dataDOM.children[5].appendChild(div);
        } else {
          dataDOM.appendChild(div);
        }
        // dataDOM.style.setProperty('background', 'rgba(0,0,0,0.3)');
        // dataDOM.style.setProperty('top', '200px')
        // dataDOM.classList.add('mt-5');
        // window.pageYOffset = 2222
      } else {
        dataDOM.classList.remove('oznaci-program');
        dataDOM.classList.remove('povratak');
      }
    });
  });
});

function povratakLepezi(e) {
  if (e.target.classList.contains('povratak')) {
    console.log(e.target);
    console.log('kliknuo parent');
  } else {
    console.log(e.target.parentElement);
    console.log('kliknuo link');
    linkoviDOM.forEach((dataDOM) => {
      // console.log(dataDOM);
      dataDOM.classList.remove('oznaci-program');
      dataDOM.classList.remove('povratak');
    });
    e.target.remove();
  }
}



function pocistiklase() {
  console.log('tu sam');
  
  document.querySelectorAll('.povratak').forEach((data) => {
    data.remove();
  });
  linkoviDOM.forEach((dataDOM) => {
    dataDOM.classList.remove('oznaci-program');
    dataDOM.classList.remove('povratak');
  });
}
