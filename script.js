axios('http://localhost:3000/products')

.then((res)=>{
let product="";
res.data.map((values)=>{

product+=`
<div class="card" id="card">

 <h1 class="title">${values.title}</h1>

 <img src="${values.image}" id="image" class="image">

  <p>${values.description}</p>
  <p class="category">${values.category}</p>
   <p class="price">price:${values.price}$</p>
   
    <div class="rating">
    
<div class="rating-rate">${values.rating.rate}<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></ion-icon><ion-icon name="star-half"></ion-icon></div>
<div class="rating-count">count:${values.rating.count}</div>
</div>

</div>

`

});


document.getElementById("cards").innerHTML+=product;


}).catch((error)=>{console.log(error)

})