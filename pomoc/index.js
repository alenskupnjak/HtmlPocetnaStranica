const sviReci = document.querySelectorAll('.redak');
const sadrzaj = document.getElementById('sve');


let poljeZapis = []

// pRebacjemo node listu u array jer nodelist.sort ne radi
sviReci.forEach((data, rednoBroj) => {
  poljeZapis.push(data)
});

// sortiramo listu
poljeZapis.sort((a, b) => {
  if (a.lastElementChild.textContent > b.lastElementChild.textContent) {
      return 1
  } else if (a.lastElementChild.textContent < b.lastElementChild.textContent) {
      return -1
  } else {
      return 0
  }
})


sadrzaj.innerHTML=''
poljeZapis.forEach((data, rdBroj) => {
  // console.log(data, data.childNodes, data.firstElementChild,data.firstElementChild.textContent,data.childElementCount,data.lastElementChild, rdBroj +1);
  data.firstElementChild.textContent = rdBroj + 1
  sadrzaj.appendChild(data)
})




