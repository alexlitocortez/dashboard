
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // Change theme
        document.body.classList.toggle('dark');
})
