//Fibonaccin luvut muuttujien avulla

function fibonakki2(n){
    let a = 0
    let b = 1
    let c = 1
    for(let i = 0; i < n; i++){
        c = a + b
        a = b
        b = c
        
        console.log(c)
    }
    

} 

fibonakki2(10)


