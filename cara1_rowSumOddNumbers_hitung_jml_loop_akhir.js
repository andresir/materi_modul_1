function rowSum(num){

    let digit1 = (num * num) - (num - 1);
    let angka = 0;
    let count = 0;

    while(count<num){
        if(digit1 % 2 !== 0){
            angka += digit1;
            count++
        }
        digit1++
        
    }
 
    return angka
}

console.log(rowSum(5))