const togglePopup = () => {
    const modalOverlay = document.querySelector('.modal-overlay'),
        modalBtn = document.querySelectorAll('.callback-all-btn'),
        modalBtnClose = document.querySelector('.modal-close');

    modalBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            modalOverlay.style.display = 'block';
        });      
    });

    modalBtnClose.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    modalOverlay.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('.popup-close')){
            modalOverlay.style.display = 'none';
        } else {
            target = target.closest('.modal-callback');
            console.log(target);
            if (!target){
                modalOverlay.style.display = 'none';
            } 
        }
    });
};

export default togglePopup;