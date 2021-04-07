//Tarkastellaan onko taulukko palindromi. Selkeyden vuoksi toteutettu kokonaisluvuilla. Stringien kanssa tulisi huomioida ainakin isot kirjaimet ja välimerkit.
 const arr = [1,2,3,6,7,1,7,6,4,2,1];
 const arr2 = [1,3,5,8,9,8,5,3,1];

 //käydään taulukon alkiot läpi molemmista suunnista yhtäaikaa ja verrataan ovatko ne samat. Jos on isEqual saa arvon true ja jos 
 //erit, muuttuja isEqual saa arvon false
function isPalindrome(arr) {
    isEqual = true
    for (let i=0; i < arr.length / 2; i++) {
        k = arr.length -1 -i
        console.log(`i on ${i}, -i on ${k}  arr[i]=${arr[i]}, arr[k]=${arr[k]}`)
        if (arr[i] !== arr[k]) {
            isEqual = false
        }
    }

    //testataan saako isEqual arvon tosi tai epätosi
    if (isEqual) {
        console.log("It is a palindrome, hooraY!")
    } else {
         console.log("Not a palindrome")
    }
    return isEqual
}

//kutsutaan useampaa muuttujaa yhtäaikaa, kätevä jos on useampia taulukoita niin ei tarvitse jokaista kutsua erikseeen, ne voidaan lisä
//tä z:aan:
const z = [arr, arr2]
for (let i=0; i < z.length; i++) {
    isPalindrome(z[i])
}
