const navbarHTML = `
<header class="sticky top-0 z-50 flex justify-center border-b border-solid border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
    <div class="flex w-full max-w-7xl items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        <div class="flex items-center gap-8">
            <a href="index.html" class="flex items-center gap-3 text-primary">
                <span class="material-symbols-outlined text-3xl">import_contacts</span>
                <h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">BookNest</h2>
            </a>
            <nav class="hidden md:flex items-center gap-9">
                <a class="nav-link text-sm font-medium leading-normal hover:text-primary transition-colors" href="index.html">Trang chủ</a>
                <a class="nav-link text-sm font-medium leading-normal hover:text-primary transition-colors" href="products.html">Sách</a>
                <a class="nav-link text-sm font-medium leading-normal hover:text-primary transition-colors" href="about.html">Giới thiệu</a>
                <a class="nav-link text-sm font-medium leading-normal hover:text-primary transition-colors" href="contact.html">Liên hệ</a>
            </nav>
        </div>
        <div class="flex flex-1 justify-end gap-2 sm:gap-4">
             <div class="hidden sm:flex relative">
                <input id="search-input" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-primary/10 h-10 placeholder:text-text-light/60 dark:placeholder:text-text-dark/60 px-4 pl-10 text-sm font-normal leading-normal" placeholder="Tìm kiếm sách..." value="" />
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-text-light/60 dark:text-text-dark/60">
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>
            <div class="flex gap-2">
                <a href="account.html#saved-books" class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary/10 text-text-light dark:text-text-dark dark:hover:bg-primary/20 hover:bg-primary/20 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span class="material-symbols-outlined text-xl">favorite</span>
                </a>
                <a href="cart.html" class="relative flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary/10 text-text-light dark:text-text-dark dark:hover:bg-primary/20 hover:bg-primary/20 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span class="material-symbols-outlined text-xl">shopping_cart</span>
                    <span id="cart-item-count" class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" style="display: none;">0</span>
                </a>
                <a href="account.html" class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-primary/10 text-text-light dark:text-text-dark dark:hover:bg-primary/20 hover:bg-primary/20 transition-colors gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span class="material-symbols-outlined text-xl">person</span>
                </a>
            </div>
        </div>
    </div>
</header>
`;

function loadNavbar() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;

        // Highlight active page
        const currentPage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("text-primary", "font-bold");
            }
        });

        // Update cart count
        updateCartCount();
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-item-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountElement) {
        if (totalItems > 0) {
            cartCountElement.textContent = totalItems;
            cartCountElement.style.display = 'flex';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

const footerHTML = `
<footer class="site-footer">
    <div class="footer-container">
        <!-- Column 1: About -->
        <div class="footer-column">
            <h3 class="text-lg font-bold">BookNest</h3>
            <p>BookNest là nơi bạn có thể tìm thấy những cuốn sách hay nhất, từ kinh điển đến hiện đại, giúp bạn mở rộng tri thức và khám phá những thế giới mới.</p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-column">
            <h3>Liên kết nhanh</h3>
            <ul>
                <li><a href="index.html">Trang chủ</a></li>
                <li><a href="products.html">Sách</a></li>
                <li><a href="cart.html">Giỏ hàng</a></li>
                <li><a href="contact.html">Liên hệ</a></li>
            </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div class="footer-column">
            <h3>Thông tin liên hệ</h3>
            <ul>
                <li>Địa chỉ: 123 Đường Sách, TP. HCM</li>
                <li>Điện thoại: (123) 456-7890</li>
                <li>Email: support@booknest.vn</li>
            </ul>
        </div>

        <!-- Column 4: Social Media -->
        <div class="footer-column">
            <h3>Mạng xã hội</h3>
            <div class="footer-socials">
                <a href="#" aria-label="Facebook">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" aria-label="Instagram">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.442c-3.2 0-3.57.01-4.823.068-2.922.133-4.131 1.331-4.264 4.264-.058 1.253-.068 1.623-.068 4.823s.01 3.57.068 4.823c.133 2.933 1.342 4.131 4.264 4.264 1.253.058 1.623.068 4.823.068s3.57-.01 4.823-.068c2.922-.133 4.131-1.331 4.264-4.264.058-1.253.068-1.623.068-4.823s-.01-3.57-.068-4.823c-.133-2.933-1.342-4.131-4.264-4.264C15.57 3.615 15.2 3.605 12 3.605zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 6a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm4.884-7.442a.938.938 0 100-1.876.938.938 0 000 1.876z"/></svg>
                </a>
                <a href="#" aria-label="TikTok">
                     <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.92-2.31-4.36-2.02-6.84.29-2.48 1.63-4.65 3.58-6.12 2.21-1.72 4.8-2.5 7.37-2.42v4.52c-.9-.02-1.79-.04-2.69-.04-1.47 0-2.85.39-4.1 1.15-.31.18-.58.41-.83.67-.35.35-.62.77-.81 1.22-.19.45-.31.93-.36 1.43-.05.5-.02 1.01.06 1.51.08.49.23.97.46 1.42.22.45.5.86.84 1.2.34.34.74.61 1.18.79.44.18.91.28 1.39.31.48.02.97-.04 1.44-.13.47-.09.93-.24 1.37-.46.43-.22.84-.5 1.2-.82.36-.32.68-.69.94-1.1.26-.41.46-.85.59-1.32.13-.47.19-.96.18-1.45v-5.18c.11-.01.21-.02.32-.02z"/></svg>
                </a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 BookNest. All rights reserved.</p>
        <div class="footer-bottom-links">
            <a href="privacy-policy.html">Chính sách bảo mật</a>
            <a href="return-policy.html">Chính sách đổi trả</a>
            <a href="terms.html">Điều khoản sử dụng</a>
        </div>
    </div>
</footer>
`;

function loadFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

function showModal(message, type = 'success') {
    const modalPlaceholder = document.getElementById('modal-placeholder');
    if (!modalPlaceholder) return;

    const icon = type === 'success'
        ? '<span class="material-symbols-outlined text-green-500 text-5xl">check_circle</span>'
        : '<span class="material-symbols-outlined text-red-500 text-5xl">error</span>';

    const modalHTML = `
        <div id="custom-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-sm text-center transform scale-95 transition-transform duration-300">
                ${icon}
                <p class="mt-4 text-lg font-medium text-text-light dark:text-text-dark">${message}</p>
                <button id="modal-close-btn" class="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-primary/90">OK</button>
            </div>
        </div>
    `;
    modalPlaceholder.innerHTML = modalHTML;

    // Animate modal in
    setTimeout(() => {
        const modal = document.getElementById('custom-modal');
        if(modal) {
            modal.classList.add('opacity-100');
            modal.querySelector('div').classList.add('scale-100');
        }
    }, 10);


    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', () => {
        const modal = document.getElementById('custom-modal');
         if(modal) {
            modal.classList.remove('opacity-100');
            modal.querySelector('div').classList.remove('scale-100');
            setTimeout(() => {
                 modalPlaceholder.innerHTML = '';
            }, 300);
        }
    });
}
