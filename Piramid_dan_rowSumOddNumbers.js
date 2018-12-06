var rowSumOddNumbers = (num) => {
    var arr = [];
    var count =1;
    var sum = 0;
    for(var i=1; i<=num; i++){
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

    var z = '';
    for(var i=0; i< arr.length; i++){

        // untuk nambah spasi supaya di tengah, semakin nambah baris di i, smakin mengurangi spasi
        for(var k=arr.length; k > i; k--){
            z += '   ';
        }

        for(var j=0; j < i+1; j++){
            z += arr[i][j];

            //ini untuk merapikan spasi ()
            for(var x=arr[i][j].toString().length; x<6; x++){
                z += ' '
            }
        }
        z += '\n';
    }
    console.log('Gambar Piramid dibawah ini : \n')
    console.log(z)
    return `Jumlah total angka di loop terakhir adalah ${sum}`;
}

console.log(rowSumOddNumbers(5))