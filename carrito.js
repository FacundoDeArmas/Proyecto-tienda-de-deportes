 const llenarcarrito = () => {

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal.header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "✖️";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $<p>
        <span class="ress"> ➖ </span>
        <p>cantidad: ${product.cantidad}</p>
        <span class="plus"> ➕ </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent);

        /**botones para sumar y restar productos en el carrito */

        let ress = carritoContent.querySelector(".ress")

         ress.addEventListener("click", () => {
            if (product.cantidad !== 1){
            product.cantidad --;
            }
            llenarcarrito();
            guardadolocal();
         });

        let plus = carritoContent.querySelector(".plus")

         plus.addEventListener("click", () => {
            product.cantidad ++;
            llenarcarrito();
            guardadolocal();
         })

     /**configuracion de boton para eliminar producto del carrito */

        let eliminarcarrito = document.createElement("span")
        
        eliminarcarrito.innerText = "❌";
        eliminarcarrito.className = "dalete-product"
        carritoContent.append(eliminarcarrito);
        eliminarcarrito.addEventListener("click", eliminarproducto)
    });

     /*--calcular la suma del producto--*/
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    
    const totaldecompra = document.createElement("div")
    totaldecompra.className = "total-content"
    totaldecompra.innerHTML = `total a pagar: $ ${total} `
    modalContainer.append(totaldecompra);
    
    /** Boton de pagar o cancelar la compra  */
    const pagarocancelar = document.createElement("div")
     pagarocancelar.className = "total-content"
    pagarocancelar.innerHTML = `
    <button class="boton-clean">CANCELAR</button>
    <button class="boton-de-pago">PAGAR</button>
    `
    modalContainer.append(pagarocancelar);

    pagarocancelar.addEventListener("click", () =>{
     if (carrito.length === 0){
        alert(`tu carrito esta vacio`)
     }
     else { alert(`GRACIAS POR TU COMPRA`)}
     carrito.length = [];
     carritoCounter();
     guardadolocal();
     llenarcarrito();
    });
};

verCarrito.addEventListener("click", llenarcarrito);

     /**Elimina un producto del carrito y lo busca por id */
const eliminarproducto = () => {
    const buscarID = carrito.find((element) => element.id);
    
    carrito = carrito.filter((productoID) =>{
       return productoID !== buscarID;
    });
    carritoCounter();
    guardadolocal();
    llenarcarrito();

   };
   

   /** agrego un contador de productos en le carrito*/
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const largodecarrito = carrito.length;

    localStorage.setItem("largodecarrito", JSON.stringify(largodecarrito))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("largodecarrito"));
};
carritoCounter();
