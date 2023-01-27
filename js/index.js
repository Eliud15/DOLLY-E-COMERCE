let containerProductos= document.querySelector('#container-productos'); //CONTENEDOR DE LOS PRODUCTOS
let overlay= document.querySelector('.overlay');
addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
  overlay.style.display='none'
  },2000)
  
fetch('https://dummyjson.com/products') //PETICION ALA API
    .then(datos=> datos.json())
    .then(datos=> {
       //console.log(datos.products);
       for (const productos of datos.products) {
        //IMAGEN
        let img = document.createElement('IMG')
        img.setAttribute('src','https://png.monster/wp-content/uploads/2022/09/png.monster-209.png')
        img.classList.add('picture')

        //CARD CONTAINER
        let card = document.createElement('Div')

        //TITULO
        let h2 = document.createElement('H2')
        h2.textContent=productos.title
        
        //DESCRIPTION
        let h6 = document.createElement('H6')
        h6.textContent=productos.description
        h6.style.opacity='0'

        //PRECIO
        let h4 = document.createElement('H4')
        h4.textContent=`Precio: $${productos.price}` 

        //BOTONES
        //let btns = document.createElement('BUTTON')
        //btns.innerText='COMPRAR'


        //AGREGANDO PRODUCTOS ALA CARD
        card.appendChild(h2)
        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(h6)
       // card.appendChild(btns)
        card.classList.add('card')
        containerProductos.appendChild(card)
       } 

       let productosCards= document.querySelectorAll('.card');
       let titulos = [];
       let arr = [...productosCards] 
       arr.forEach((values)=> {
        titulos.push(values.firstElementChild.textContent) 
        
       })
     
       let articulo = [];
        productosCards.forEach((cards)=> cards.addEventListener('click', (e)=>{
        articulo.push(e.target.children[0].textContent) 
        articulo.push(e.target.children[1].currentSrc) 
        articulo.push(e.target.children[2].textContent)
        articulo.push(e.target.children[3].textContent) 
        localStorage.setItem('@nombreArticulo',articulo[0])
        localStorage.setItem('@imagenArticulo',articulo[1])
        localStorage.setItem('@precioArticulo',articulo[2])
        localStorage.setItem('@descriptionArticulo',articulo[3])
        location.href='app.html'
      })) 
    })
    let menu = document.querySelector('#menu')
    let aside = document.querySelector('.aside')
    menu.addEventListener('click',()=> aside.classList.toggle('aparecer'))
})
