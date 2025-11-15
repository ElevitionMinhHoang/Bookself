document.addEventListener("DOMContentLoaded", function () {
    const productDetailContainer = document.getElementById("product-detail-container");
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    const book = books.find(b => b.id === bookId);

    if (book) {
        renderProductDetail(book);
    } else {
        productDetailContainer.innerHTML = '<p class="text-center text-red-500">Không tìm thấy sản phẩm.</p>';
    }

    function renderProductDetail(book) {
        let quantity = 1;

        const html = `
            <div class="flex flex-wrap gap-2 pb-8">
                <a class="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="index.html">Trang chủ</a>
                <span class="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                <a class="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-accent" href="products.html">Sách</a>
                <span class="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">/</span>
                <span class="text-text-light dark:text-text-dark text-sm font-medium leading-normal">${book.title}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                <div class="lg:col-span-2 flex justify-center items-start">
                    <div class="w-full max-w-sm aspect-[2/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg" style='background-image: url("${book.image}");'></div>
                </div>
                <div class="lg:col-span-3 flex flex-col gap-6">
                    <div>
                        <a class="text-sm font-medium text-text-muted-light dark:text-text-muted-dark underline hover:text-primary dark:hover:text-accent" href="#">${book.category}</a>
                        <h1 class="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark mt-2">${book.title}</h1>
                        <p class="text-lg font-normal text-text-muted-light dark:text-text-muted-dark mt-2">Tác giả: <a class="font-medium text-text-light dark:text-text-dark hover:underline" href="#">${book.author}</a></p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex items-center text-accent">
                             ${'<span class="material-symbols-outlined !text-2xl" style="font-variation-settings: \'FILL\' 1;">star</span>'.repeat(Math.floor(book.rating))}
                            ${book.rating % 1 !== 0 ? '<span class="material-symbols-outlined !text-2xl" style="font-variation-settings: \'FILL\' 1;">star_half</span>' : ''}
                            ${'<span class="material-symbols-outlined !text-2xl">star</span>'.repeat(5 - Math.ceil(book.rating))}
                        </div>
                        <p class="text-text-muted-light dark:text-text-muted-dark text-sm">(1,289 đánh giá)</p>
                         <button class="wishlist-btn" data-id="${book.id}">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                    <div class="flex flex-col gap-4">
                        <p class="text-3xl font-bold text-primary dark:text-accent">${book.price.toLocaleString('vi-VN')}₫
                            ${book.original_price ? `<span class="text-xl font-normal line-through text-text-muted-light dark:text-text-muted-dark">${book.original_price.toLocaleString('vi-VN')}₫</span>` : ''}
                        </p>
                        <div class="flex items-center gap-4">
                            <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                                <button id="decrease-qty" class="p-3 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-accent">-</button>
                                <span id="quantity" class="px-4 font-bold">${quantity}</span>
                                <button id="increase-qty" class="p-3 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-accent">+</button>
                            </div>
                            <button id="add-to-cart-btn" class="flex-1 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-3 text-base font-bold leading-normal tracking-[0.015em] px-6 shadow-md hover:bg-primary/90 transition-colors">
                                <span class="material-symbols-outlined">add_shopping_cart</span>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                        <button id="buy-now-btn" class="flex-1 flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-accent text-primary gap-3 text-base font-bold leading-normal tracking-[0.015em] px-6 shadow-md hover:bg-accent/90 transition-colors">
                            <span class="material-symbols-outlined">shopping_bag</span>
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
            <div class="mt-12 lg:mt-16">
                <h3 class="text-2xl font-bold text-text-light dark:text-text-dark mb-4 border-b-2 border-primary dark:border-accent pb-2 inline-block">Mô tả sách</h3>
                <div class="prose prose-lg max-w-none text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    <p>${book.description}</p>
                    <ul class="mt-4">
                        <li><strong>Năm xuất bản:</strong> ${book.year}</li>
                        <li><strong>Số trang:</strong> ${book.pages}</li>
                    </ul>
                </div>
            </div>
        `;
        productDetailContainer.innerHTML = html;

        const qtyElement = document.getElementById('quantity');
        document.getElementById('increase-qty').addEventListener('click', () => {
            quantity++;
            qtyElement.textContent = quantity;
        });
        document.getElementById('decrease-qty').addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                qtyElement.textContent = quantity;
            }
        });

        document.getElementById('add-to-cart-btn').addEventListener('click', () => {
            addToCart(book.id, quantity);
            showModal(`Đã thêm ${quantity} cuốn "${book.title}" vào giỏ hàng!`);
        });

        document.getElementById('buy-now-btn').addEventListener('click', () => {
            addToCart(book.id, quantity);
            window.location.href = 'checkout.html';
        });

        document.querySelector('.wishlist-btn').addEventListener('click', () => {
            toggleWishlist(book.id);
        });

        updateWishlistIcons();
    }
});
