const links = document.querySelectorAll('li a');

/* links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active')); // Reset all links
        link.classList.add('active'); // Highlight the clicked link
    });
})
 */
for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener('click', function() {
        for (let j = 0; j < links.length; j++) {
            if (j !== i) {
                links[j].classList.remove('active');
            }
        }
        links[i].classList.add('active');

        
        
    });
}