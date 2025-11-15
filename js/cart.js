document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("subtotal");
    const totalEl = document.getElementById("total");
    const placeOrderBtn = document.getElementById("place-order-btn");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function addToCart(productId) {
        const book = books.find(b => b.id === productId);
        if (book) {
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cart.push({ ...book, quantity: 1 });
            }
            saveCart();
            alert(`${book.title} đã được thêm vào giỏ hàng!`);
        }
    }

    function renderCartItems() {
        if (!cartItemsContainer) return;

        let html = '';
        cart.forEach(item => {
            html += `
                <div class="flex items-start gap-4">
                    <div class="relative">
                        <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-16" style='background-image: url("${item.image}");'></div>
                        <span class="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">${item.quantity}</span>
                    </div>
                    <div class="flex flex-grow flex-col">
                        <p class="text-sm font-medium leading-tight">${item.title}</p>
                        <p class="text-xs text-gray-500">${item.author}</p>
                    </div>
                    <p class="text-sm font-semibold">${item.price}</p>
                </div>
            `;
        });
        cartItemsContainer.innerHTML = html;
        updateTotals();
    }

    function updateTotals() {
        if(!subtotalEl || !totalEl) return;
        const subtotal = cart.reduce((acc, item) => acc + (parseFloat(item.price.replace(/\\./g, '')) * item.quantity), 0);
        const shipping = 25000;
        const total = subtotal + shipping;

        subtotalEl.textContent = `${subtotal.toLocaleString('vi-VN')}đ`;
        totalEl.textContent = `${total.toLocaleString('vi-VN')}đ`;
    }

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener("click", () => {
            if (cart.length > 0) {
                alert("Đặt hàng thành công!");
                cart = [];
                saveCart();
                renderCartItems();
            } else {
                alert("Giỏ hàng của bạn đang trống.");
            }
        });
    }

    // Attach addToCart to buttons on product detail page
    const addToCartBtn = document.querySelector(".bg-primary.text-white"); // A bit generic selector, might need improvement
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id'));
            addToCart(productId);
        });
    }

    renderCartItems();
});
