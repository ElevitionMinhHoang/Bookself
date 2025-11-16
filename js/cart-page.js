document.addEventListener("DOMContentLoaded", function () {
    renderCartPage();
});

function renderCartPage() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const cart = getCart();

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
        updateCartSummary(0);
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => {
        const book = books.find(b => b.id === item.id);
        return `
            <div class="flex items-center border-b py-4">
                <img src="${book.image}" alt="${book.name}" class="w-20 h-auto rounded-md mr-4">
                <div class="flex-grow">
                    <h3 class="font-bold">${book.name}</h3>
                    <p class="text-sm text-gray-500">${book.author}</p>
                    <div class="flex items-center mt-2">
                        <button class="px-2 py-1 border rounded-md" onclick="updateQuantity(${book.id}, ${item.quantity - 1})">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="px-2 py-1 border rounded-md" onclick="updateQuantity(${book.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-bold">${(book.price * item.quantity).toLocaleString('vi-VN')}đ</p>
                    <button class="text-red-500 text-sm mt-2" onclick="removeFromCart(${book.id}); renderCartPage();">Xóa</button>
                </div>
            </div>
        `;
    }).join("");

    const subtotal = cart.reduce((sum, item) => {
        const book = books.find(b => b.id === item.id);
        return sum + (book.price * item.quantity);
    }, 0);
    updateCartSummary(subtotal);
}

function updateQuantity(bookId, quantity) {
    if (quantity <= 0) {
        removeFromCart(bookId);
    } else {
        const cart = getCart();
        const item = cart.find(i => i.id === bookId);
        if (item) {
            item.quantity = quantity;
            saveCart(cart);
        }
    }
    renderCartPage();
}

function updateCartSummary(subtotal) {
    const shipping = 25000;
    const total = subtotal + shipping;
    document.getElementById("cart-subtotal").textContent = subtotal.toLocaleString('vi-VN') + 'đ';
    document.getElementById("cart-total").textContent = total.toLocaleString('vi-VN') + 'đ';
}
