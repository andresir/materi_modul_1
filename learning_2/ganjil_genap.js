    var angka = -7;
    var hasil = '';
    var temp = '';

    //Penentu Ganjil Genap
    if(angka % 2 === 0){
        hasil = 'Genap';
    }else{
        hasil = 'Ganjil';
    }

    //Penentu Positif Negatif
    if(angka > 0){
        temp = 'Positif';
    }else{
        temp = 'Negatif';
    }

    console.log('Angka yang Anda input ' +angka+ ' adalah ' +hasil+ ' dan ' +temp);
