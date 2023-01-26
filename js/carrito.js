const mainContainer = document.querySelector('#main-container')
        addEventListener('DOMContentLoaded',()=>{
            let fragmento = document.createDocumentFragment()
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
        //TITULO
        let h2 = document.createElement('H2')
        h2.textContent = productosListos[i].nombre//--------------------------------
        //IMAGENE
        let img = document.createElement('IMG')
        img.setAttribute('src', productosListos[i].imagen)//-----------------------------
        img.classList.add('picture')
        //PRECIO
        let h4 = document.createElement('H4')
        h4.classList.add('precio')
        h4.textContent = productosListos[i].precio//----------------------------

        //CERRAR
        let btnEliminarProducto = document.createElement('BUTTON')
        btnEliminarProducto.textContent='❌'
        btnEliminarProducto.classList.add('btncerrar')
        card.appendChild(h2)
        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(btnEliminarProducto)
       fragmento.appendChild(card)
       mainContainer.appendChild(fragmento)
      
       
       btnEliminarProducto.addEventListener('click',(e)=>{
        let productoEliminado = btnEliminarProducto.parentElement.firstElementChild.innerHTML
        localStorage.removeItem(productoEliminado)
        location.href='./carrito.html'
       } )
    }
    })
    const volver = document.querySelector('.volver').addEventListener('click', () => location.href = 'app.html')