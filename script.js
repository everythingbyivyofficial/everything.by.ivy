let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsContainer =
document.getElementById("productsContainer");

const searchInput =
document.getElementById("searchInput");

function displayProducts(items){

productsContainer.innerHTML="";

items.forEach(product=>{

productsContainer.innerHTML += `
<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="price">₦${product.price.toLocaleString()}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

</div>
`;

});

}

displayProducts(products);

function addToCart(id){

const product =
products.find(item => item.id === id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(product.name + " added to cart");

}

function updateCartCount(){

const count =
document.getElementById("cartCount");

if(count){

count.textContent = cart.length;

}

}

updateCartCount();

function filterProducts(category){

if(category === "All"){

displayProducts(products);

return;

}

const filtered =
products.filter(
item => item.category === category
);

displayProducts(filtered);

}

searchInput.addEventListener("keyup",()=>{

const keyword =
searchInput.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(keyword)

);

displayProducts(filtered);

});
