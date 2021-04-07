//toinen tapa testata onko taulukko palindromi. Puolitetaan taulukko, käännetään jälkimmäisen taulukon alkiot käänteiseen järjestykseen ja verrataan taulukot.
//Ongelmaksi muodostuvat keskimmäiset alkiot. Taulukkohan on palindromi riippumatta siitä onko keskellä yksi vai kaksi samaa alkiota. Mikäli alkioita on vain yksi
//vertailtavien taulukoiden pituus ei täsmää..

const arr = [1, 2, 4, 6, 9, 9, 6, 5, 2, 1];

const arrStart = arr.slice(0,arr.length/2)
const arrEnd = arr.slice(arr.length/2)

const endRev = arrEnd.reverse()

for (let i=0; i < arrStart.length; i++) {
    if (arrStart[i] === endRev[i]) {
        console.log("Hooray, it's a palindrome");
        } else {
        console.log("Boohoo");
    } 
}