/*2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

Ejemplo:


Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, f alse, true, 3, true]
Resultado: [3, true]
*/

function buscar(Array1,Array2) {
	const resultado = [];
	let existe = false;
	let x=0;
	let agregar='';
	for (let i = 0; i < Array1.length; i++) {
		for (let j = 0; j < Array2.length; j++) {
			if (Array1[i] === Array2[j] ) {
				if ( existe === false && resultado.length == 0) {
					resultado.push(	Array1[i]);
					x = x+1;
				}
				else
				{		
					for (let y = 0; y <= resultado.length; y++) {
						if (Array1[i] === resultado[y] ) {
						existe = true;
						y = resultado.length;
						}
						else {
						existe = false;	
						agregar = Array1[i];
						}
					}
					if ( existe === false && resultado.length >0 ) {
						resultado.push(	agregar);
						x = x+1;
					}
				}	
			}
		}
	}
return resultado;
}

const Array1 = ['rojo', 'azul', 'amarillo'];
const Array2 = ['blanco', 'negro', 'rojo'];
buscar(Array1,Array2);
console.log('Resultado: [' + buscar(Array1,Array2) + ']');


const Array3= [4, 3, true, 'manzana'];
const Array4= ['pera', 3, false, true, 3, true];
buscar(Array1,Array2);
console.log('Resultado: [' + buscar(Array3,Array4) + ']');