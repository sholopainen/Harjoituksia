//Kahden taulukon vertailu, ovatko sisällöt identtisiä

const arr1 = [1,2,5,6,8,0,3,6];
const arr2 = [1,2,5,6,8,0,3,7];
const arr3 = [1,2,5,6,8,0,3,6];

function arrSimilarity(x,y){
    isEqual = true
    if (x.length === y.length){
        for (i=0; i < x.length ; i++){
            console.log(`x on ${i} ja ${x[i]} y on ${i} ja ${y[i]}`)
            if (x[i] !== y[i]){
                isEqual = false
            }
        }
        
        
        
        
    } else {
        isEqual = false
        console.log("Cannot compare, array lengths isn't equal")
    }
    if (isEqual) {
        console.log("Arrays are similar")
    } else {
        console.log("Arrays are not similar")
    }
    return isEqual
}


arrSimilarity(arr1,arr3);