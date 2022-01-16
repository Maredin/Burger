
const btnModal = document.querySelectorAll('.btnPopap'),
      modals = document.querySelector('.popup'),
      closebtn = document.querySelector('.popup_close');


    btnModal.forEach(item => {
        item.addEventListener('click', () => {
            modals.style.display = 'block';
        });
    });
    
    closebtn.addEventListener('click', () => {
        modals.style.display = 'none';
    });

    modals.addEventListener('click', (e) => {
        if (e.target === modals) {
            modals.style.display = "none";         
        }
    });