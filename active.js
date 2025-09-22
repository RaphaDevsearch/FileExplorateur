const links = document.querySelectorAll('li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active')); // Reset all links
        link.classList.add('active'); // Highlight the clicked link
    });
})