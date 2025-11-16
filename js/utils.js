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
<footer class="w-full bg-primary text-white mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="md:col-span-1">
                <div class="flex items-center gap-3 text-white mb-4">
                    <span class="material-symbols-outlined text-3xl">import_contacts</span>
                    <h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">BookNest</h2>
                </div>
                <p class="text-sm text-white/80">Nơi tri thức bắt đầu.</p>
            </div>
            <div>
                <h3 class="font-bold tracking-wider uppercase mb-4">Về BookNest</h3>
                <ul class="space-y-2 text-sm text-white/80">
                    <li><a class="hover:text-white transition-colors" href="about.html">Giới thiệu</a></li>
                    <li><a class="hover:text-white transition-colors" href="terms.html">Điều khoản</a></li>
                    <li><a class="hover:text-white transition-colors" href="privacy.html">Bảo mật</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold tracking-wider uppercase mb-4">Hỗ trợ khách hàng</h3>
                <ul class="space-y-2 text-sm text-white/80">
                    <li><a class="hover:text-white transition-colors" href="contact.html">Liên hệ</a></li>
                    <li><a class="hover:text-white transition-colors" href="shipping.html">Chính sách vận chuyển</a></li>
                    <li><a class="hover:text-white transition-colors" href="return-policy.html">Chính sách đổi trả</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold tracking-wider uppercase mb-4">Kết nối với chúng tôi</h3>
                <div class="flex space-x-4">
                    <a class="text-white/80 hover:text-white transition-colors" href="#">
                        <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
                    </a>
                    <a class="text-white/80 hover:text-white transition-colors" href="#">
                        <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                    </a>
                    <a class="text-white/80 hover:text-white transition-colors" href="#">
                        <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.011 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.011 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.011-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.011-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427.465C9.793 2.01 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 BookNest. All rights reserved.</p>
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
