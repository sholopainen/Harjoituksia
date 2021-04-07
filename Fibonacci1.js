//Fibonaccin luvut taulukon avulla laskien. Kaksi taulukon viimeisintä alkiota summataan ja saatu arvo lisätään aina taulukon loppuun.


//alkion hakeminen väännetty rautalangasta :D
function haeAlkio(taulu, indeksi) {
    return taulu[indeksi];
}



function fibonakki(n){
    const newArray = [0,1];
    for(let i=0; i < n; i++){
        const y = haeAlkio(newArray, newArray.length-1) + haeAlkio(newArray, newArray.length-2);
        newArray.push(y);
        console.log(y)
    }
    
}

fibonakki(10)


/*
tässä mietiskelty muita merkintätapoja

const i1 = newArray.length -1
const i2 = newArray.length -2
const y = (newArray[i1]) + (newArray[i2])
*/


