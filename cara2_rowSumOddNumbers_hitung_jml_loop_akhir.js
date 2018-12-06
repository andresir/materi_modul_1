// CARA 2 (hitung jumlah total di loop terakhir)
var rowSumOddNumbers = (num) => {
    var arr = [];
    var count =1;
    var sum = 0;
    for(var i=1; i<=5; i++){
        var newArr = [];
        for(var j=0; j<i; j++){
            newArr.push(count)
            count+=2;
        }
        arr.push(newArr)
    }
    for(var i=0; i< arr[num-1].length; i++){
        sum += arr[num-1][i]
    }
    return sum;
}

console.log(rowSumOddNumbers(5))