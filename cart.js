let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

if(cart.length === 0){

cartItems.innerHTML = `
<h2 style="text-align:center">
Your cart is empty
</h2>
`;

totalPrice.textContent = "Total: ₦0";

return;
}

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-card">

<img src="${item.image}" alt="${item.name}">

<div>

<h3>${item.name}</h3>

<p>₦${item.price.toLocaleString()}</p>

<button onclick="removeItem(${index})">
Remove
</button>

</div>

</div>

`;

});

totalPrice.textContent =
`Total: ₦${total.toLocaleString()}`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();

}

renderCart();

document
.getElementById("whatsappOrderBtn")
.addEventListener("click",()=>{

if(cart.length === 0){

alert("Your cart is empty");

return;

}

let orderText =
"Hello Everything By Ivy,%0A%0A";

orderText +=
"I would like to place an order:%0A%0A";

let total = 0;

cart.forEach(item=>{

orderText +=
`• ${item.name} - ₦${item.price}%0A`;

total += item.price;

});

orderText +=
`%0A Total: ₦${total}%0A`;

orderText +=
"%0AThank you.";

const whatsappNumber =
"2349120940116";

window.open(

`https://wa.me/${whatsappNumber}?text=${orderText}`,

"_blank"

);

});
