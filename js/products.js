document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("product-grid");
    const categoryChipsContainer = document.getElementById("category-chips-container");
    const searchInput = document.getElementById("product-search-input");

    let activeCategory = "Tất cả";

    function renderCategoryChips() {
        let html = '';
        categories.forEach(category => {
            const isActive = category === activeCategory;
            html += `
                <button class="category-chip flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium transition-colors
                    ${isActive ? 'bg-primary text-white' : 'bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50'}">
                    ${category}
                </button>
            `;
        });
        categoryChipsContainer.innerHTML = html;

        document.querySelectorAll('.category-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                activeCategory = chip.textContent.trim();
                renderCategoryChips();
                renderProducts();
            });
        });
    }

    function renderProducts() {
        let filteredBooks = books;

        if (activeCategory !== "Tất cả") {
            filteredBooks = books.filter(book => book.category === activeCategory);
        }

        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredBooks = filteredBooks.filter(book =>
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );
        }

        let html = '';
        if (filteredBooks.length === 0) {
            html = `<p class="col-span-full text-center text-text-subtle-light">Không tìm thấy sản phẩm nào.</p>`;
        } else {
            filteredBooks.forEach(book => {
                 html += `
                <div class="group flex flex-col gap-3 rounded-lg bg-card-light dark:bg-card-dark shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div class="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-t-lg" style='background-image: url("${book.image}");'>
                        <button class="wishlist-btn absolute top-2 right-2 h-10 w-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100 hover:text-red-600" data-id="${book.id}">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>
                    </div>
                    <div class="p-4 flex flex-col flex-grow">
                        <h3 class="text-base font-bold leading-tight">${book.title}</h3>
                        <p class="text-sm text-text-subtle-light dark:text-text-subtle-dark mt-1">${book.author}</p>
                        <div class="flex items-center text-accent mt-2">
                            ${'<span class="material-symbols-outlined !text-base">star</span>'.repeat(Math.floor(book.rating))}
                            ${book.rating % 1 !== 0 ? '<span class="material-symbols-outlined !text-base">star_half</span>' : ''}
                            ${'<span class="material-symbols-outlined !text-base text-gray-300">star</span>'.repeat(5 - Math.ceil(book.rating))}
                        </div>
                        <p class="text-base font-bold mt-2">${book.price.toLocaleString('vi-VN')}₫</p>
                        <a href="product-detail.html?id=${book.id}" class="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-primary/20 text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-white transition-colors duration-300">Xem chi tiết</a>
                    </div>
                </div>
                `;
            });
        }
        productGrid.innerHTML = html;

        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const bookId = parseInt(btn.dataset.id);
                toggleWishlist(bookId);
            });
        });

        updateWishlistIcons();
    }

    searchInput.addEventListener('input', renderProducts);

    renderCategoryChips();
    renderProducts();
});
