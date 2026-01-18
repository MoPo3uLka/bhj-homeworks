function initDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        
        valueElement.addEventListener('click', function(event) {
            event.stopPropagation();
            
            document.querySelectorAll('.dropdown__list_active').forEach(openList => {
                if (openList !== listElement) {
                    openList.classList.remove('dropdown__list_active');
                }
            });
            
            listElement.classList.toggle('dropdown__list_active');
        });
        
        dropdown.querySelectorAll('.dropdown__item').forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                
                const newValue = this.querySelector('.dropdown__link').textContent.trim();
                valueElement.textContent = newValue;
                
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
   
}

initDropdowns();