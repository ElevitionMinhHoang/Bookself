document.addEventListener("DOMContentLoaded", function () {
    renderOrderSummary();

    document.getElementById("place-order-btn").addEventListener("click", function() {
        const form = document.getElementById("checkout-form");
        if (form.checkValidity()) {
            // Simulate order placement
            clearCart();
            showModal("Đặt hàng thành công! Cảm ơn bạn đã mua sắm.", "success");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 3000);
        } else {
            form.reportValidity();
        }
    });
});

function renderOrderSummary() {
    const orderSummaryContainer = document.getElementById("order-summary-container");
    const cart = getCart();

    if (cart.length === 0) {
        orderSummaryContainer.innerHTML = "<p>Không có sản phẩm nào trong giỏ hàng.</p>";
        updateOrderTotal(0);
        // Disable button if cart is empty
        document.getElementById("place-order-btn").disabled = true;
        document.getElementById("place-order-btn").classList.add("opacity-50", "cursor-not-allowed");
        return;
    }

    orderSummaryContainer.innerHTML = cart.map(item => {
        const book = books.find(b => b.id === item.id);
        return `
            <div class="flex justify-between items-center border-b py-2">
                <div>
                    <p>${book.name} <span class="text-sm text-gray-500">x ${item.quantity}</span></p>
                </div>
                <p>${(book.price * item.quantity).toLocaleString('vi-VN')}đ</p>
            </div>
        `;
    }).join("");

    const subtotal = cart.reduce((sum, item) => {
        const book = books.find(b => b.id === item.id);
        return sum + (book.price * item.quantity);
    }, 0);
    updateOrderTotal(subtotal);
}

function updateOrderTotal(subtotal) {
    const shipping = 25000;
    const total = subtotal + shipping;
    const orderTotalEl = document.getElementById("order-total");
    if(orderTotalEl) {
        orderTotalEl.textContent = total.toLocaleString('vi-VN') + 'đ';
    }
}
