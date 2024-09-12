// Product list array
const products = [
    { id: 1, name: "Product 1", price: 10.00 },
    { id: 2, name: "Product 2", price: 15.00 },
    { id: 3, name: "Product 3", price: 7.50 }
];

// Array to hold items added to the cart
let cart = [];

// Display products on the page
function displayProducts() {
    const productsContainer = document.getElementById('products');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Update cart display and total cost
function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear existing cart items

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartElement.appendChild(cartItem);

        total += item.price; // Calculate total cost
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

// Initialize the product page
window.onload = function () {
    displayProducts();
};
