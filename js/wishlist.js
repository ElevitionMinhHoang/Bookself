function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function addToWishlist(bookId) {
    let wishlist = getWishlist();
    if (!wishlist.includes(bookId)) {
        wishlist.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showModal('Đã thêm vào danh sách yêu thích!');
        updateWishlistIcons();
    }
}

function removeFromWishlist(bookId) {
    let wishlist = getWishlist();
    const index = wishlist.indexOf(bookId);
    if (index > -1) {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showModal('Đã xóa khỏi danh sách yêu thích.');
        updateWishlistIcons();
    }
}

function toggleWishlist(bookId) {
    let wishlist = getWishlist();
    if (wishlist.includes(bookId)) {
        removeFromWishlist(bookId);
    } else {
        addToWishlist(bookId);
    }
}

function updateWishlistIcons() {
    const wishlist = getWishlist();
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const bookId = parseInt(btn.dataset.id);
        if (wishlist.includes(bookId)) {
            btn.innerHTML = '<span class="material-symbols-outlined text-red-500">favorite</span>';
        } else {
            btn.innerHTML = '<span class="material-symbols-outlined">favorite</span>';
        }
    });
}
