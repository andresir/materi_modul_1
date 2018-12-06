//Nominal Uang hanya 25, 50, 100
// harga tiket = 25
// bisa mengembalikan uang jika total nominal di stokKembalian jumlahnya memenuhi

function tickets(arr) {

    var stokKembalian = [];
    var hargaTiket = 25;

    if(arr[0] > 25){
        return 'Maaf Belum Ada Kembalian'
    }
    var flag = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i] === 25){
            stokKembalian.push(arr[i]);
            flag = true;
        }else if(arr[i] > 25){
            var tempKembalian = arr[i]-hargaTiket;
            var countKembalian = tempKembalian / hargaTiket;
            var setor = arr[i] - (hargaTiket*countKembalian);
            stokKembalian.push(setor);
            // console.log(countKembalian+' < '+stokKembalian.length)
            if(countKembalian < stokKembalian.length){
                // stokKembalian.push(hargaTiket);
                return 'YES'
            }else{
                return 'NO'
            }
        }
    }

    if(flag === true){
        return 'Uang anda pas...!!!'
    }

}

console.log(tickets([25, 25, 50, 100])) 