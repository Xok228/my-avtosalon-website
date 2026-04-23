document.addEventListener('DOMContentLoaded', () => {
    
    
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    
    const modal = document.getElementById('contactModal');
    const contactBtns = document.querySelectorAll('#contactBtn, .open-modal-btn');
    const closeModal = document.querySelector('.close-modal');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Останавливаем отправку
            
            const plate = document.getElementById('plate').value.trim();
            const carModel = document.getElementById('carModel').value.trim();
            const service = document.getElementById('service').value.trim();
            const phone = document.getElementById('phone').value.trim();

           
            if (!plate || !carModel || !service || !phone) {
                alert('Пожалуйста, заполните все поля формы!');
                return;
            }

            
            const phoneRegex = /^[\d\+\-\(\) ]{10,}$/;
            if (!phoneRegex.test(phone)) {
                alert('Пожалуйста, введите корректный номер телефона!');
                return;
            }

            alert('Заявка успешно отправлена! Ожидайте звонка менеджера.');
            bookingForm.reset();
        });
    }

    
    const buyBtns = document.querySelectorAll('.buy-btn');
    buyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carName = e.target.getAttribute('data-car');
            alert(`Отличный выбор! Вы оставили заявку на покупку: ${carName}.`);
        });
    });
});