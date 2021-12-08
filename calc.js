function calc(num){
   var res = document.getElementById("res").innerHTML
   document.getElementById("res").innerHTML = res + num
}
function limpa(){
    
    document.getElementById("res").innerHTML= ""
}
function volta(){
    var res = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = res.substring(0,res.length -1);
}
function igual(){
    var resultado = document.getElementById("res").innerHTML
    document.getElementById("res").innerHTML = eval(resultado)
}


  


