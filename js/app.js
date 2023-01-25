
const titulo = document.querySelector('.titulo')
const picture = document.querySelector('.picture')
const precio = document.querySelector('.precio')
const productName = document.querySelector('#productname')
const description = document.querySelector('#description')

//---------------------OBTENIENDO VALORES DEL LOCALSTORAGE-----------------------------------------------------------

titulo.textContent = localStorage.getItem('@nombreArticulo')
picture.setAttribute('src', localStorage.getItem('@imagenArticulo'))
precio.textContent = localStorage.getItem('@precioArticulo')
productName.textContent = localStorage.getItem('@nombreArticulo')
description.textContent = localStorage.getItem('@descriptionArticulo')

//------------------------FUNCION DE LA FLECHA VOLVER---------------------------------------------------
const volver = document.querySelector('.volver').addEventListener('click', () => location.href = 'index.html')

//------------------------CARRITO-----------------------------------
const numeroProducto = document.querySelector('#numeroproducto')

const cardCarrito = document.querySelector('.card-carrito')
let numero = 0;
numeroProducto.textContent = `${numero}`;

const btnCarrito = document.querySelector('.btn-sell').addEventListener('click', () => {
   /**-------------------------------------------------------------------------------------------------------------------- */
     if (localStorage.getItem(titulo.textContent != 'string'))  console.log('no se encuentra agregado')
     else console.log('se encuentra agregado');
     /*TERMI9NAR ESTA SECUENCIA AGREGAR UN MENSAJE DICIENDO QUE YA EL PRODUCTO ESTA AGREGADO AL CARRITO*/
     /**-------------------------------------------------------------------------------------------------------------------- */
    //-------------------ALMACENANDO VALORES ALCARRITO------------------------------------
    const producto = {
        nombre: titulo.textContent,
        imagen: picture.getAttribute('src'),
        precio: precio.textContent
    }
    let arr = []
    arr.push(producto)
    let productoCadena = JSON.stringify(arr)
    localStorage.setItem(arr[0].nombre, productoCadena)
    let productoInfoJSON = localStorage.getItem(arr[0].nombre)
    let productoInfoOBJECT = JSON.parse(productoInfoJSON);


    /*-------------------------MOSTRAR PRODUCTO--------------------------------------------------------*/
    let number = localStorage.length
    let Arr = [];
    for (let i = 0; i < number; i++) {

        Arr.push(localStorage.key(i))
    }
    let Arr2 = [];
    Arr.forEach((element) => element.includes('@') === true ? '' : Arr2.push(element))
    const productos = [];
    const productosListos = [];
    Arr2.forEach((elemnt) => productos.push(localStorage.getItem(elemnt)))
    productos.forEach((product) => {
        productosListos.push(...JSON.parse(product))
    })
    for (let i = 0; i < productosListos.length; i++) {
        let card = document.createElement('DIV')
        card.className = 'card'
        card.classList.add('card-carrito')
        numeroProducto.textContent = `${numero += 1}`;
        //titulo
        let h2 = document.createElement('H2')
        h2.textContent = productosListos[i].nombre//--------------------------------
        //imagen
        let img = document.createElement('IMG')
        img.setAttribute('src', productosListos[i].imagen)//-----------------------------
        img.classList.add('picture')
        //precio
        let h4 = document.createElement('H4')
        h4.classList.add('precio')
        h4.textContent = productosListos[i].precio//----------------------------

        card.appendChild(h2)
        card.appendChild(img)
        card.appendChild(h4)
    }
})
const carrito = document.querySelector('.carrito').addEventListener('click', () => {
    location.href='carrito.html'
})
addEventListener('DOMContentLoaded',()=>{
    let number = localStorage.length
    let Arr = [];
    for (let i = 0; i < number; i++) {

        Arr.push(localStorage.key(i))
    }
    let Arr2 = [];
    Arr.forEach((element) => element.includes('@') === true ? '' : Arr2.push(element))
    numeroProducto.textContent = `${Arr2.length}`;
})
