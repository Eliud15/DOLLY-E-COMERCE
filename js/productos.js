fetch('https://fakestoreapi.com/products')
.then((datos)=>datos.json())
.then((productos)=>{
   for (const iterator of productos) {
        console.log(iterator.title);
        console.log(iterator.image);
   }
})