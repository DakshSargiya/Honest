// let cartItems = [];
// function updateCartCount() {
//     const cartCountElement = document.querySelector('.cart-brac');
//     cartCountElement.textContent = cartItems.length;
// }

// function addToCart(itemName) {
//     cartItems.push(itemName);
//     updateCartCount();
// }

// const addToCartButtons = document.querySelectorAll('.cart_btn');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', function () {
//         const itemName = this.closest('.food-text').querySelector('.food-name').textContent;
//         addToCart(itemName);
//         alert(`Item added to cart: ${itemName}`);
//     });
// });

// function openCart() {
//     const cartOverlay = document.querySelector('.cart-overlay');
//     cartOverlay.style.visibility = 'visible';
//     cartOverlay.style.opacity = '1';
// }

// function closeCart() {
//     const cartOverlay = document.querySelector('.cart-overlay');
//     cartOverlay.style.visibility = 'hidden';
//     cartOverlay.style.opacity = '0';
// }

// function displayCartDetails() {
//     const cartItemsContainer = document.querySelector('.cart-items');
//     const cartTotalElement = document.querySelector('.cart-total');

//     // Clear existing cart items
//     cartItemsContainer.innerHTML = '';

//     // Populate cart items
//     cartItems.forEach((item, index) => {
//         const cartItemElement = document.createElement('div');
//         cartItemElement.classList.add('cart-item');
//         cartItemElement.innerHTML = `
//             <span>${item.name}</span>
//             <span>$${item.price.toFixed(2)}</span>
//         `;
//         cartItemsContainer.appendChild(cartItemElement);
//     });

//     // Calculate and display total price
//     const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
//     cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;

//     openCart(); // Open the cart overlay
// }

// // Attach the displayCartDetails function to your cart link
// const yourCartLink = document.querySelector('.links a[href="#cart"]');
// yourCartLink.addEventListener('click', displayCartDetails);

// ... (Keep your existing code)





// // ... (your existing code)

// // Function to display cart details in an alert
// function displayCartDetails() {
//     if (cartItems.length > 0) {
//         let cartDetails = "Cart Items:\n\n";

//         cartItems.forEach((itemName, index) => {
//             const itemPrice = 1.99; // You can replace this with the actual price or retrieve it from your data
//             cartDetails += `${index + 1}. ${itemName} - Price: $${itemPrice.toFixed(2)}\n`;
//         });

//         const totalPrice = cartItems.length * 1.99; // Assuming each item costs $1.99
//         cartDetails += `\nTotal Price: $${totalPrice.toFixed(2)}`;

//         alert(cartDetails);
//     } else {
//         alert("Your cart is empty.");
//     }
// }

// const yourCartLink = document.querySelector('.links a[href="#cart"]');
// yourCartLink.addEventListener('click', displayCartDetails);





    const cartDisplay = document.getElementById('cartDisplay');
    const cartIcon = document.querySelector('#cart-icon');
    const closeBtn = document.querySelector('.close');
    const cartCount = document.getElementById('cart-brac');
    const cartItemsContainer = document.getElementById('cartItems');

    let itemCount = 0;

    localStorage.setItem('cartItems', '[]');

    cartIcon.addEventListener('click', function () {
        cartDisplay.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        cartDisplay.style.display = 'none';

    });

    document.querySelectorAll('.cart_btn').forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');
            addToCart(productName, productPrice);
        });
    });

    function addToCart(name, price) {
        const cartItems = getExistingCartItems();

        const newItem = {name, price};
        cartItems.push(newItem);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        itemCount = cartItems.length;
        updateCartCount();
        updateCart(cartItems);
    }

    function updateCart(cartItems) {
        cartItemsContainer.innerHTML = '';

        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('item');
            cartItemDiv.innerHTML = `
                <p>${item.name}</p>
                <p>${item.price}</p>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }

    function updateCartCount() {
        cartCount.textContent = itemCount;
    }

    function getExistingCartItems() {
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    }



