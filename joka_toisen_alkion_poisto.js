//joka toisen alkion poisto taulukosta

const array = [1,2,3,4,5,6,7,8,9,10];

function everyOtherIndex(arr){
    newArray = [];
    for (let i=0; i<arr.length; i++){
        const v = arr[i];
        if (i % 2 === 0) {
            newArray.push(v);
        }
        
    }
    return newArray
}

const h = everyOtherIndex(array)