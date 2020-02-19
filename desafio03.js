var promedio ='';
var resultado_notas ='';
var notas =[];
notas.push(parseInt(prompt('ingrese nota de ciencias')));
notas.push(parseInt(prompt('ingrese nota de fisica')));
notas.push(parseInt(prompt('ingrese nota de matematicas')));


resultado_notas = notas[0] + notas[1] +notas[2];
promedio = parseInt(resultado_notas / 3);

(alert('tu promedio es'+promedio));
