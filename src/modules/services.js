const services = () => {
    const elementFaq = document.querySelectorAll('.element-faq'),
        title = document.querySelectorAll('.question'),
        elementContent = document.querySelectorAll('.answer');

    elementFaq.forEach((elem, index) => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            elementFaq.forEach((e, i) => {
                e.classList.remove('active');
                elementContent[i].style.display = 'none';
            });
            
            if(target === title[index]){
                elem.classList.toggle('active');
                if (elem.classList.contains('active')){
                    elementContent[index].style.display ='block';
                } else {
                    elementContent[index].style.display ='none';
                }
            }
        });
    });
};

export default services;