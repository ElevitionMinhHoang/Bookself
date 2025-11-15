function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function addToCart(bookId, quantity = 1) {
    let cart = getCart();
    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: bookId, quantity: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function removeFromCart(bookId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartQuantity(bookId, quantity) {
    let cart = getCart();
    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(bookId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    updateCartCount();
}

// Initial cart count update on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
