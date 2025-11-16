document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = event.target.querySelector('input[type="text"]').value;
        const email = event.target.querySelector('input[type="email"]').value;
        const message = event.target.querySelector('textarea').value;
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            showModal('Vui lòng điền đầy đủ thông tin vào các trường bắt buộc.', 'error');
            return;
        }
        showModal('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
        event.target.reset();
    });
});
