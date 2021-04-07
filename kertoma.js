//Kertoma. Positiivisen kokonaisluvun n kertoma on luvun n ja kaikkien sitä pienempien positiivisten kokonaislukujen tulo, ja se merkitään n!. (wikipedia)

function kertoma(n){
    var x=1
    var i=n
    while (i>=1){
        x=x*i;
        console.log(i+" x="+x)
        i--;
    }
    return x;
}
kertoma(6);