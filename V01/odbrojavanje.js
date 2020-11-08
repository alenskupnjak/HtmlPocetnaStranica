dan = document.getElementById('dan');
sat = document.getElementById('sat');
min = document.getElementById('min');
sec = document.getElementById('sec');

const tekucaGodina = new Date().getFullYear();

const novaGodina = new Date(`January 01 ${tekucaGodina + 1} 00:00:00`);

function odbrojavanje() {
  let danas = new Date();

  // razlika u milisekundama
  let razlika = novaGodina - danas;

  // pretvaramo u sekunde
  razlika = razlika / 1000;

  // pretvaramo dane
  let dana = Math.floor(razlika / 60 / 60 / 24);

  let sati = Math.floor(razlika / 60 / 60) % 24;

  let minuta = Math.floor(razlika / 60) % 60;

  let sekunda = Math.floor(razlika) % 60;

  dan.innerText = dana;
  sat.innerText = sati < 10 ? '0' + sati : sati;
  min.innerText = minuta < 10 ? '0' + minuta : minuta;
  sec.innerText = sekunda < 10 ? '0' + sekunda : sekunda;
}

// const now = new Date()
// const timestamp = now.getTime()
// console.log(timestamp);
// const myDate = new Date(timestamp)
// console.log(myDate);

setInterval(odbrojavanje, 1000);
// odbrojavanje()
