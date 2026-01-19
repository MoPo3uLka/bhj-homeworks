document.addEventListener('DOMContentLoaded', () => {
    const fontSizeButtons = document.querySelectorAll('.book__control_font-size .font-size');
    const bookElement = document.getElementById('book');
    
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            fontSizeButtons.forEach(btn => {
                btn.classList.remove('font-size_active');
            });
            
            this.classList.add('font-size_active');
            
            const size = this.getAttribute('data-size');
            
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
            
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    });
});