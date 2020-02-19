var frutas = [];


frutas.push(prompt('ingrese la primera fruta'));
frutas.push(prompt('ingrese la segunda fruta'));
frutas.push(prompt('ingrese la tercera fruta'));

for(var i =0 ; i < frutas.length; i++){
    if(frutas[i] == 'manzana'){
        continue;
    }
    console.log(frutas[i]);

}








