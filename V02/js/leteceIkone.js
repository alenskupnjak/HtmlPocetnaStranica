// const canvas = document.querySelector('canvas');
const canvas = document.getElementById('canvasAngular');
const c = canvas.getContext('2d');

const canvasJS = document.getElementById('canvasjs');
const cJS = canvasJS.getContext('2d');



const angularDOM = document.querySelector('.angulardark');
const jsDOM = document.getElementById('js');



canvasJS.width = window.innerWidth;
canvasJS.height = window.innerHeight;

let poljeAngular = [];
let poljeJS = [];
let poljeNodeJS = [];

// Definiranje img
const angular = new Image();
angular.src = '../img/angular.png';
const javascript = new Image();
javascript.src = '../img/javascript.png';
const nodejs = new Image();
nodejs.src = '../img/nodejs.png';

angularDOM.addEventListener('mouseenter', (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  console.log('angular');
  popuniPolja(0, 400, 500, 30, poljeAngular);
});

jsDOM.addEventListener('mouseenter', (e) => {
  console.log('jsavascript');
  popuniPoljaJS(0, 400, 400, 15, poljeJS);
});

// Crtanje ikone Angulara
function IkonaAngular(x, y, dx, dy, poljeX, poljeY, range) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  // DRAW
  this.draw = function () {
    c.drawImage(angular, this.x, this.y, 50, 20);
    this.x = this.x + 3;
  };

  // UPDATE
  this.update = function () {
    if (this.x > poljeX + range || this.x < poljeX - range) {
      this.dx = -this.dx;
    }

    if (this.y > poljeY + range || this.y < poljeY - range) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}

// Crtanje ikone javascript
function IkonaJS(x, y, dx, dy, poljeX, poljeY, range) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  // DRAW
  this.draw = function () {
    cJS.drawImage(javascript, this.x, this.y, 25, 30);
    this.x = this.x + 3;
  };

  // UPDATE
  this.update = function () {
    if (this.x > poljeX + range || this.x < poljeX - range) {
      this.dx = -this.dx;
    }

    if (this.y > poljeY + range || this.y < poljeY - range) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}

function popuniPoljaJS(poljeX, poljeY, range, brojIkona, program) {
  for (let index = 0; index < brojIkona; index++) {
    let x = poljeX + Math.random() * range - 15;
    let y = poljeY + Math.random() * range - 15;
    let dx = Math.random() * 4;
    let dy = Math.random() * 4;
    poljeJS.push(new IkonaJS(x, y, dx, dy, poljeX, poljeY, range));
  }
}

function popuniPolja(poljeX, poljeY, range, brojIkona, program) {
  for (let index = 0; index < brojIkona; index++) {
    let x = poljeX + Math.random() * range - 15;
    let y = poljeY + Math.random() * range - 15;
    let dx = Math.random() * 4;
    let dy = Math.random() * 4;
    poljeAngular.push(new IkonaAngular(x, y, dx, dy, poljeX, poljeY, range));
  }
}

// Animacija angulara
function animateAngular() {
  requestAnimationFrame(animateAngular);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < poljeAngular.length; index++) {
    poljeAngular[index].draw();
    poljeAngular[index].update();
  }
}

// Animacija Javascripta
function animateJS() {
  requestAnimationFrame(animateJS);
  cJS.clearRect(0, 0, canvasJS.width, canvasJS.height);
  for (let index = 0; index < poljeJS.length; index++) {
    poljeJS[index].draw();
    poljeJS[index].update();
  }
}

animateAngular();
animateJS();
