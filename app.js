const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")
/**guardamos "carrito" en localstorage */
let carrito = JSON.parse(localStorage.getItem("compras")) || [];

productos.forEach((product)=> {
 let content = document.createElement("div");
 content.className = "card";
  content.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p class="price">${product.precio} $</p>
  `;
  
  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "Comprar";
  comprar.className = "Comprar";
  
  content.append(comprar);

  comprar.addEventListener("click", () =>{ 
  /** Coontamos producto por cantidad */
  const repeat = carrito.some((repeatproduct) => repeatproduct.id === product.id)
   if (repeat){
    carrito.map((prod) =>{
        if(prod.id === product.id){
            prod.cantidad++;
        }
    })
   } else{

    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
    });
}
carritoCounter();
guardadolocal();
});
});

const cantidadCarrito = document.getElementById("cantidadcarrito")


// local storage
const guardadolocal = () =>{
     localStorage.setItem("compras", JSON.stringify (carrito));
};

  




