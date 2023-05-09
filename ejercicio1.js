function piramide(valor) {
  let salida="";
  for (let i = 1; i <= valor; i++) {
	  if (i==1) 
	  {  
	  salida = "1";
	  }
	  else
	  {
	    salida = salida + i;
	  }
  console.log(salida)  
   }
}

console.log("Piramide para valor 6: ");
let valor = 6;
piramide(valor);

console.log("Piramide para valor 3: ");
valor = 3;
piramide(valor);