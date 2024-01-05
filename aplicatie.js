'use strict';
import { mancareTotal } from './stocare-mancare.js';
import { categorii } from './stocare-mancare.js';
import { accounts } from './stocare-conturi.js';
import { arrMese } from './stocare-mese.js';
//////////////dublu click seelectare masa ca sa mearga ///////////////

const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const meniuPrincipal = document.querySelector('.meniu-principal');
const numeOspatar = document.querySelector('.nume-ospatar');
const masa = document.querySelector('.masa');
const mese = document.querySelector('.mese');
const nrMasa = document.querySelector('.nr-masa');
const butonBucatarie = document.querySelector('.buton-bucatarie');
const butonBarBucatarie = document.querySelector('.buton-bar-bucatarie');
const feluriMancare = document.querySelector('.feluri-mancare');
const feluriBauturi = document.querySelector('.feluri-bauturi');
const btnSalata = document.querySelector('.salata');
const meniuPreparate = document.querySelector('.preparat');
const meniuBauturi = document.querySelector('.bauturi');
const btnCiorba = document.querySelector('.ciorba');
const btnPizza = document.querySelector('.pizza');
const btnDesert = document.querySelector('.desert');
const divPreparate = document.querySelector('.preparat-ciorba');
const section1 = document.querySelector('.descriere-produse');
const divContainerProdus = document.querySelector('.container-produs');
const divContainerProdus2 = document.querySelector('.container-produs2');
const btnStergeProdus = document.querySelector('.sterge-selectia');
const btnStergeComanda = document.querySelector('.sterge-comanda');
const totalContainer = document.querySelector('.total-container');
const btnImprimaBon = document.querySelector('.btn-imprima-bon');
const btnClose = document.getElementById('closeModal');
const btnClose1 = document.getElementById('closeModal1');
const btnTrimiteComanda = document.querySelector('.btn-trimite-comanda');
const modalImprimareBon = document.getElementById('myModal');
const btnBere = document.querySelector('.bere');
const btnRacoritoare = document.querySelector('.racoritoare');
const utileContainer = document.querySelector('.utile');
const btnInapoi = document.querySelector('.btn-inapoi');
/////variabile globale

let idMasaSelectata;
let masaCurenta;
let elMasa;
let currentAccount;

const butoane = [btnCiorba, btnSalata, btnPizza, btnDesert, btnBere];

///////////////////////////////////////////////////////////
// implementare login ----display meniu mese

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
//   if (currentAccount?.password === Number(inputLoginPin.value)) {
//     mese.style.display = 'flex';
//     numeOspatar.style.opacity = 100;
//   }
//   inputLoginPin.value = inputLoginUsername.value = '';
// });

/////////////////////////////////

/////functie afisare/inchidere meniu principal////////

const openClose = function () {
  meniuPrincipal.classList.toggle('hidden');
  utileContainer.classList.toggle('utile-hidden');
};

///generare html mese

arrMese.forEach(function (masa) {
  const html = `<div class="masa" data-id="${masa.id}">${masa.nume} <br> dblClick</div>`;
  mese.insertAdjacentHTML('afterbegin', html);
});

////selectare masa --initializare meniu principal

const selectareMasa = function (e) {
  elMasa = e.target.closest('.masa');
  if (!elMasa) return;
  mese.style.display = 'none';
  nrMasa.innerHTML = elMasa.innerHTML;
  elMasa.classList.add('ocupata');

  arrMese.find(masa => {
    if (idMasaSelectata === masa.id) masaCurenta = masa;
  });
  openClose();
  updateCart();
  calculareTotal();
};
mese.addEventListener('dblclick', selectareMasa);

/////////selectare BUCATARIE / BAR

butonBarBucatarie.addEventListener('click', function () {
  feluriMancare.classList.toggle('hidden');
  feluriBauturi.classList.toggle('hidden');
  meniuPreparate.innerHTML = '';
});

////GENERARE HTML BUCATARIE
butoane.forEach(function (btn) {
  btn.addEventListener('click', function () {
    meniuPreparate.innerHTML = '';
    const category = btn.getAttribute('data-category');
    console.log('hello');

    if (category && category in categorii) {
      categorii[category].forEach(function (elem) {
        const html = `<div class="display-preparat" data-id="${elem.id}">
          <img class="img-pizza" src="${elem.img}" alt="">
          <div>${elem.denumire}</div>
        </div>`;
        meniuPreparate.insertAdjacentHTML('afterbegin', html);
      });
    }
  });
});

//IMPLEMENTARE CALCUL NOTA DE PLATA

///Selectare element

const selectarePreparat = function (e) {
  const elPreparat = e.target.closest('.display-preparat');
  if (!elPreparat) return;

  const obiectGasit = mancareTotal.find(
    work => work.id == elPreparat.dataset.id
  );

  //////////////cart implementation ////////////

  let matchingItem;

  masaCurenta.cart.forEach(item => {
    if (item.denumire === obiectGasit.denumire) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.cantitate += 1;
  } else {
    masaCurenta.cart.push({
      denumire: obiectGasit.denumire,
      cantitate: obiectGasit.cantitate,
      pret: obiectGasit.pret,
    });
  }

  updateCart();
  calculareTotal();
};

divPreparate.addEventListener('click', selectarePreparat);

////////////////////STERGE ULTIMUL PRODUS ADAUGAT///////////////////////////
btnStergeProdus.addEventListener('click', function () {
  masaCurenta.cart.pop();
  updateCart();
  calculareTotal();
});

//////////////////STERGERE COMANDA //////////////////
btnStergeComanda.addEventListener('click', function () {
  masaCurenta.cart = [];
  updateCart();
  calculareTotal();

  //////////////experiment
});

/////////////////UPDATE CART/////////////////
const updateCart = function () {
  divContainerProdus.innerHTML = '';
  masaCurenta.cart.forEach(function (item) {
    let html = `
      <div class="container-produs2">
      <div class="container-produs">
      <div class="denumire-produs">${item.denumire}</div>
      <div class="container-descriere-produs">
         <div class="cantitate-produs">${item.cantitate}</div>
         <div class="pret-produs">${item.pret} LEI</div>
       </div>
       </div>`;
    divContainerProdus.insertAdjacentHTML('afterbegin', html);
  });
};

/////calculare total total//////
const calculareTotal = function () {
  const pretFinal = masaCurenta.cart
    .map(function (item) {
      return item.pret * item.cantitate;
    })
    .reduce((acc, val) => acc + val, 0);

  /////afissare total////////
  totalContainer.innerHTML = '';
  let html = '';
  html = `<div class="total-lei">${pretFinal}LEI</div>`;
  totalContainer.insertAdjacentHTML('afterbegin', html);
};

///////////////imprimare bon modal//////////

btnImprimaBon.addEventListener('click', function () {
  modalImprimareBon.style.display = 'block';
});
btnClose.addEventListener('click', function () {
  modalImprimareBon.style.display = 'none';
});

//////////trimite comanda//////
btnTrimiteComanda.addEventListener('click', openModal1);
btnClose1.addEventListener('click', resetareComanda);

function openModal1() {
  const userResponse = window.confirm(
    'Vrei sa trimiti comanda catre bucatarie?'
  );

  if (userResponse) {
    document.getElementById('myModal1').style.display = 'block';
  }
}

//resetare comanda dupa ce am trimis comanda//
function resetareComanda() {
  document.getElementById('myModal1').style.display = 'none';
  mese.style.display = 'flex';
  masaCurenta.cart = [];
  divContainerProdus.innerHTML = '';
  totalContainer.innerHTML = '';
  elMasa.classList.remove('ocupata');
  openClose();
}

////buton inapoi////

btnInapoi.addEventListener('click', function () {
  mese.style.display = 'flex';
  openClose();
});

////gasirea mesei//

const gasireMasa = function (e) {
  const elMasa = e.target.closest('.masa');
  if (!elMasa) return;
  idMasaSelectata = +elMasa.getAttribute('data-id');
};

mese.addEventListener('click', gasireMasa);
