document.addEventListener("DOMContentLoaded", function () {
    const booksGrid = document.getElementById("books-grid");
    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category-btn");

    let currentFilter = "all";
    let searchQuery = "";

    function renderBooks() {
        let filteredBooks = books;

        if (currentFilter !== "all") {
            filteredBooks = filteredBooks.filter(book => book[currentFilter]);
        }

        if (searchQuery) {
            filteredBooks = filteredBooks.filter(book =>
                book.title.toLowerCase().includes(searchQuery) ||
                book.author.toLowerCase().includes(searchQuery)
            );
        }

        let html = '';
        filteredBooks.forEach(book => {
            html += `
                <div class="group flex flex-col gap-3 rounded-lg bg-card-light dark:bg-card-dark shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div class="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-t-lg" style='background-image: url("${book.image}");'></div>
                    <div class="p-4 flex flex-col flex-grow">
                        <h3 class="text-base font-bold leading-tight">${book.title}</h3>
                        <p class="text-sm text-text-subtle-light dark:text-text-subtle-dark mt-1">${book.author}</p>
                        <div class="flex items-center text-accent mt-2">
                            <span class="material-symbols-outlined !text-base">star</span>
                            <span class="material-symbols-outlined !text-base">star</span>
                            <span class="material-symbols-outlined !text-base">star</span>
                            <span class="material-symbols-outlined !text-base">star</span>
                            <span class="material-symbols-outlined !text-base text-gray-300">star</span>
                        </div>
                        <p class="text-base font-bold mt-2">${book.price}</p>
                        <a href="product-detail.html?id=${book.id}" class="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 bg-primary/20 text-primary gap-2 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-white transition-colors duration-300">Xem chi tiết</a>
                    </div>
                </div>
            `;
        });
        if (booksGrid) {
            booksGrid.innerHTML = html;
        }
    }

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderBooks();
    });

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentFilter = button.dataset.category;
            categoryButtons.forEach(btn => {
                btn.classList.remove("bg-primary", "text-white");
                btn.classList.add("bg-card-light", "dark:bg-card-dark", "border", "border-border-light", "dark:border-border-dark");
            });
            button.classList.add("bg-primary", "text-white");
            button.classList.remove("bg-card-light", "dark:bg-card-dark", "border", "border-border-light", "dark:border-border-dark");
            renderBooks();
        });
    });

    renderBooks();
});
