// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// const bici = [
//    {
//    nome: 'Bianchi',
//    peso: 200
//    },
//    {
//    nome: 'Legnano',
//    peso: 240
//    },
//    {
//    nome: 'Gialli',
//    peso: 280
//    }
// ];
// console.log(bici);

// // Stampare a schermo la bici con peso minore.

// let biciLeggera = bici[0];
// for(let i = 0; i < bici.length; i++){
//    // console.log(bici[i]);
//    if(bici[i].peso < biciLeggera.peso) {
//       biciLeggera = bici[i].peso;
//    }
// }
// console.log(biciLeggera);

// DESTRUCTURING
// let biciLeggera = bici[0];
// for(let i = 0; i < bici.length; i++){
//    let {peso} = bici[i];
//    if(peso < biciLeggera.peso) {
//       biciLeggera = bici[i];
//    }
// }
// console.log(biciLeggera);

// TEMPLATE LITERAL
// let biciLeggera = bici[0];
// for(let i = 0; i < bici.length; i++){
//    let {peso} = bici[i];
//    if(peso < biciLeggera.peso) {
//       biciLeggera = bici[i];
//    }
// }
// console.log(`${biciLeggera.peso}`);

// =======================================================================================================================

// // Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// // Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// // Generare numeri random al posto degli 0 nelle proprietà:  Punti fatti e falli subiti.

let squadre = [
   {nome: 'Roma', punti: 0, falliSubiti: 0},
   {nome: 'Milan', punti: 0, falliSubiti: 0},
   {nome: 'Rubentus', punti: 0, falliSubiti: 0},
   {nome: 'Inter', punti: 0, falliSubiti: 0},
   {nome: 'Napoli', punti: 0, falliSubiti: 0},
];

for (let i = 0; i < squadre.length; i++) {
   let rnd = Math.floor((Math.random() * 100) + 1);
   let rnd1 = Math.floor((Math.random() * 100) + 1);
   squadre[i].punti = rnd;
   squadre[i].falliSubiti = rnd1;
   // console.log(squadre[i].punti);
   // console.log(squadre[i].falliSubiti);
   let newArrey = [];
   let {nome, falliSubiti} = squadre[i];
   // console.log({nome, falliSubiti});
   newArrey.push({nome, falliSubiti});
   console.log(newArrey);
}


// // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

