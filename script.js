document.getElementById('toggle-mode').addEventListener('click', function() {
    const body = document.body;
    const button = document.getElementById('toggle-mode');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        button.textContent = 'Light Mode';
    } else {
        body.classList.add('light-mode');
        button.textContent = 'Dark Mode';
    }
});