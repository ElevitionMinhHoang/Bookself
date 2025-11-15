document.addEventListener("DOMContentLoaded", function () {
    const featuredBooksContainer = document.getElementById("featured-books-container");
    const promoBooksContainer = document.getElementById("promo-books-container");

    function renderFeaturedBooks() {
        const featuredBooks = books.filter(book => book.featured);
        let html = '<div class="flex items-stretch p-4 gap-4">';
        featuredBooks.forEach(book => {
            html += `
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg bg-background-light dark:bg-background-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[240px] overflow-hidden border border-primary/10">
                    <div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover" style='background-image: url("${book.image}");'></div>
                    <div class="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                        <div>
                            <p class="text-base font-medium leading-normal">${book.title}</p>
                            <p class="text-sm font-normal leading-normal text-text-light/70 dark:text-text-dark/70">${book.author}</p>
                        </div>
                        <a href="product-detail.html?id=${book.id}" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-text-light dark:text-text-dark hover:bg-primary/20 transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
                            <span class="truncate">Xem chi tiết</span>
                        </a>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        if (featuredBooksContainer) {
            featuredBooksContainer.innerHTML = html;
        }
    }

    function renderPromoBooks() {
        const promoBooks = books.filter(book => book.promo);
        let html = '';
        promoBooks.forEach(book => {
            html += `
                <div class="flex flex-col gap-4 rounded-lg bg-background-light dark:bg-background-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-primary/10">
                    <div class="relative w-full bg-center bg-no-repeat aspect-[3/4] bg-cover" style='background-image: url("${book.image}");'>
                        ${book.original_price ? '<div class="absolute top-2 right-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">SALE</div>' : ''}
                    </div>
                    <div class="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                        <div>
                            <p class="text-base font-medium leading-normal">${book.title}</p>
                            <p class="text-sm font-normal leading-normal text-text-light/70 dark:text-text-dark/70">${book.author}</p>
                        </div>
                        <div class="flex items-baseline gap-2">
                            <p class="text-lg font-bold text-accent">${book.price}</p>
                            ${book.original_price ? `<p class="text-sm text-text-light/50 dark:text-text-dark/50 line-through">${book.original_price}</p>` : ''}
                        </div>
                        <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-bold leading-normal tracking-[0.015em]">
                            <span class="truncate">Thêm vào giỏ</span>
                        </button>
                    </div>
                </div>
            `;
        });
         if (promoBooksContainer) {
            promoBooksContainer.innerHTML = html;
        }
    }

    renderFeaturedBooks();
    renderPromoBooks();
});
