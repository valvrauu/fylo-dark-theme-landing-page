const validateEmail = (function() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const input = form.querySelector('input');
        const errorText = form.querySelector('#errorForm');

        !regex.test(input.value) ? errorText.style.display = 'block' : errorText.style.display = 'none';
    })
})();