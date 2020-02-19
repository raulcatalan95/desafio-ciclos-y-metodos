var numeros =('');
numeros= prompt('escriba un numero del 1 al 100',0)
for(var i =0; i<= 100; i++){
    if(i==numeros){
       break;

    }
    else if(numeros>100){ 
        numeros= prompt(' Numero incorrecto. Escriba un numero del 1 al 100',0);
    }

    console.log(i+1);
    

}
