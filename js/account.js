document.addEventListener("DOMContentLoaded", function () {
    renderWishlist();
});

function renderWishlist() {
    const wishlistItemsContainer = document.getElementById("wishlist-items");
    const wishlist = getWishlist();

    if (wishlist.length === 0) {
        wishlistItemsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <span class="material-symbols-outlined text-6xl text-gray-400">menu_book</span>
                <h3 class="font-bold text-lg mt-4">Chưa có sách nào được lưu</h3>
                <p class="text-gray-500 mt-1">Khám phá và lưu lại những cuốn sách bạn yêu thích!</p>
                <a href="products.html" class="mt-4 inline-flex items-center justify-center gap-2 rounded-lg h-10 px-5 text-sm font-semibold bg-accent text-white hover:bg-opacity-90 transition-colors">
                    Bắt đầu khám phá
                </a>
            </div>
        `;
        return;
    }

    wishlistItemsContainer.innerHTML = wishlist.map(book => {
        return `
            <div class="group relative flex flex-col bg-white rounded-xl border border-border-light p-3">
                <a href="product-detail.html?id=${book.id}">
                    <img class="aspect-[2/3] w-full object-cover rounded-md mb-3" src="${book.image}" alt="Book cover for ${book.name}">
                    <h3 class="font-semibold text-sm text-text-dark leading-snug flex-grow">${book.name}</h3>
                    <p class="text-xs text-gray-500 mt-1">${book.author}</p>
                </a>
                <button
                    class="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100 hover:text-red-600"
                    onclick="removeFromWishlist(${book.id}); renderWishlist();"
                >
                    <span class="material-symbols-outlined text-xl">delete</span>
                </button>
            </div>
        `;
    }).join("");
}
