////////Feluri de mancare////////////////

/////////////////////SALATA///////////
const greceasca = {
  denumire: 'SALATA GRECEASCA',
  img: 'imagini preparate/img salata/salata-greceasca-2.jpg',
  pret: 12,
  id: 1001,
  cantitate: 1,
};

const beouf = {
  denumire: 'SALATA BEOUF',
  img: 'imagini preparate/img salata/Romanian-Beef-SaladSalata-De-Boeuf1-1-e1697193343887.webp',
  pret: 10,
  id: 1002,
  cantitate: 1,
};

const cezar = {
  denumire: 'SALATA CEZAR',
  img: 'imagini preparate/img salata/Salata-Caesar-cu-pui-500x375.webp',
  pret: 14,
  id: 1003,
  cantitate: 1,
};

///////////////////////CIORBE/////////////////////
const radauteana = {
  denumire: 'CIORBA RADAUTEANA',
  img: 'imagini preparate/imagini ciorba/ciorba-radauteana-recipe1.jpg',
  pret: 15,
  id: 1004,
  cantitate: 1,
};

const perisoare = {
  denumire: 'CIORBA PERISOARE',
  img: 'imagini preparate/imagini ciorba/Ciorba-de-perisoare.webp',
  pret: 19,
  id: 1005,
  cantitate: 1,
};

const burta = {
  denumire: 'CIORBA BURTA',
  img: 'imagini preparate/imagini ciorba/cea-mai-buna-reteta-de-ciorba-de-burta-facuta-acasa-1024x678.webp',
  pret: 20,
  id: 1006,
  cantitate: 1,
};

///////////////////Bere//////////////////
const timisoareana = {
  denumire: 'TIMISOREANA',
  img: 'imagine bauturi/timisoreana-doza.jpg',
  pret: 6,
  id: 2007,
  cantitate: 1,
};
const heineken = {
  denumire: 'HEINEKEN',
  img: 'imagine bauturi/res_dbf5e9dd4c2b6ff6b0c7af848897e5d9.avif',
  pret: 8,
  id: 2006,
  cantitate: 1,
};
const salate = [greceasca, beouf, cezar];
const bere = [timisoareana, heineken];
const ciorbe = [radauteana, perisoare, burta];

export const mancareTotal = [...salate, ...ciorbe, ...bere];

export const categorii = {
  ciorba: ciorbe,
  salata: salate,
  bere: bere,
};
