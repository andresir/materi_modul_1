function REVERSE(x){
  
    var temp = ''
    for(var i=x.length-1; i>=0; i--){
      
      temp += x[i]
    }
      
      return temp
      
    }

console.log(REVERSE("hello")); // "olleh"