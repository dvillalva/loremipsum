let carrito = {
    montoTotal: 10,
    productos: ["Leche"],
}

class Carrito {
    constructor(montoTotal, productos) {
        this.montoTotal = 0;
        this.productos = [{nombre :""}];
        this.unidades = [{unidad : 0}];
      }

      agregarProducto(nombre, precio, unidad) {
        let repetido = false;
          if (this.productos.length ===0){
            this.montoTotal = this.montoTotal + ( precio * unidad);
            this.productos.push(nombre);
            this.unidades.push(unidad);
          }
          else{
            for (let i = 0; i < this.productos.length; i++) {
                if ( this.productos[i] === nombre ) {
                    repetido = true;
                    console.log("Ya existe el producto: " + this.productos[i] + " , con " + this.unidades[i] + " unidades");
                }
            }
            if (repetido === false){
              this.montoTotal = this.montoTotal + ( precio * unidad);
              this.productos.push(nombre); 
              this.unidades.push(unidad); 
            }
       
          }
        }
}

const carrito1 = new Carrito();

carrito1.agregarProducto("Leche",112,5);
carrito1.agregarProducto("Azucar",200,7);
carrito1.agregarProducto("Aceite",350,4);
carrito1.agregarProducto("Azucar",200,4);
carrito1.agregarProducto("Yerba",600,2);
carrito1.agregarProducto("Mate Cocido",87,1);
carrito1.agregarProducto("Leche",112,3);
carrito1.agregarProducto("Huevos",50,12);
console.log("Monto total: " + carrito1.montoTotal);
console.log("Productos: " + carrito1.productos);

