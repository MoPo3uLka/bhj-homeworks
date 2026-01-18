function initTabs(container) {
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.tab__content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('tab_active'));
            
            tab.classList.add('tab_active');
            
            const tabIndex = Array.from(tabs).indexOf(tab);
            
            contents.forEach(content => content.classList.remove('tab__content_active'));
            
            if (contents[tabIndex]) {
                contents[tabIndex].classList.add('tab__content_active');
            }
        });
    });
}

document.querySelectorAll('.tabs').forEach(container => {
    initTabs(container);
});