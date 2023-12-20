const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const meniuPrincipal = document.querySelector('.meniu-principal');
const numeOspatar = document.querySelector('.nume-ospatar');
const masa = document.querySelector('.masa');
const mese = document.querySelector('.mese');
const nrMasa = document.querySelector('.nr-masa');
const butonBucatarie = document.querySelector('.buton-bucatarie');
const butonBar = document.querySelector('.buton-bar');
const feluriMancare = document.querySelector('.feluri-mancare');
const feluriBauturi = document.querySelector('.feluri-bauturi');

///Conturi ospatari

const osp1 = {
  name: 'Bogdan Lazar',
  password: 1111,
  id: 6666,
  username: 'bl',
};
const osp2 = {
  name: 'Negoi Laura',
  password: 2222,
  id: 6667,
  username: 'nl',
};
const osp3 = {
  name: 'Lazar Adelina',
  password: 3333,
  id: 6668,
  username: 'la',
};

const accounts = [osp1, osp2, osp3];

///Mese

const masa1 = {
  nume: 'Masa Nr1',
  id: 9999,
};
const masa2 = {
  nume: 'Masa nr2',
  id: 9998,
};
const masa3 = {
  nume: 'Masa nr3',
  id: 9997,
};

const arrMese = [masa1, masa2, masa3];

///////////////////////////////////////////////////////////
//implementare login ----display meniu mese

// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
//   if (currentAccount?.password === Number(inputLoginPin.value)) {
//     mese.style.opacity = 100;
//     numeOspatar.style.opacity = 100;
//   }
//   inputLoginPin.value = inputLoginUsername.value = '';
// });

/////////////////////////////////

///generare html mese

arrMese.forEach(function (masa, i) {
  const html = `<button class="masa">${masa.nume}</button>`;
  mese.insertAdjacentHTML('afterbegin', html);
});

////selectare masa --initializare meniu principal

const selectareMasa = function (e) {
  const elMasa = e.target.closest('.masa');
  if (!elMasa) return;
  mese.style.display = 'none';
  meniuPrincipal.style.opacity = 100;
  console.log(elMasa);
  console.log(elMasa.innerHTML);
  nrMasa.innerHTML = elMasa.innerHTML;
};
mese.addEventListener('click', selectareMasa);

/////////selectare BUCATARIE / BAR

butonBar.addEventListener('click', function () {
  feluriMancare.classList.toggle('hidden');
  feluriBauturi.classList.toggle('hidden');
});

butonBucatarie.addEventListener('click', function () {
  feluriMancare.classList.toggle('hidden');
  feluriBauturi.classList.toggle('hidden');
});
