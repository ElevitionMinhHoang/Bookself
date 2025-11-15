document.addEventListener("DOMContentLoaded", function () {
    const productDetailContainer = document.getElementById("product-detail-container");

    function getProductIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return parseInt(urlParams.get('id'));
    }

    function renderProductDetail() {
        const productId = getProductIdFromUrl();
        const book = books.find(b => b.id === productId);

        if (book) {
            let html = `
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
                            <a class="text-sm font-medium text-text-muted-light dark:text-text-muted-dark underline hover:text-primary dark:hover:text-accent" href="#">Văn học kinh điển</a>
                            <h1 class="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark mt-2">${book.title}</h1>
                            <p class="text-lg font-normal text-text-muted-light dark:text-text-muted-dark mt-2">Tác giả: <a class="font-medium text-text-light dark:text-text-dark hover:underline" href="#">${book.author}</a></p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="flex items-center text-accent">
                                <span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="material-symbols-outlined !text-2xl" style="font-variation-settings: 'FILL' 1;">star</span>
                                <span class="material-symbols-outlined !text-2xl">star_half</span>
                            </div>
                            <p class="text-text-muted-light dark:text-text-muted-dark text-sm">(1,289 đánh giá)</p>
                        </div>
                        <div class="flex flex-col gap-4">
                            <p class="text-3xl font-bold text-primary dark:text-accent">${book.price} ${book.original_price ? `<span class="text-xl font-normal line-through text-text-muted-light dark:text-text-muted-dark">${book.original_price}</span>` : ''}</p>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                                    <button class="p-3 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-accent">-</button>
                                    <span class="px-4 font-bold">1</span>
                                    <button class="p-3 text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-accent">+</button>
                                </div>
                                <button class="flex-1 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-3 text-base font-bold leading-normal tracking-[0.015em] px-6 shadow-md hover:bg-primary/90 transition-colors">
                                    <span class="material-symbols-outlined">add_shopping_cart</span>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productDetailContainer.innerHTML = html;
        } else {
            productDetailContainer.innerHTML = '<p class="text-center">Không tìm thấy sản phẩm.</p>';
        }
    }

    renderProductDetail();
});
