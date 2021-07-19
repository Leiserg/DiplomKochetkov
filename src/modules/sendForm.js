const sendForm = () => {
    const errorMessage  =  'Ошибка',
        loadMessage = 'Идет отправка',
        succesMessage = 'Отправлено';

    const form = document.getElementById('callback-sandform'),
        titleForm = document.getElementById('koch-submit');

    const statusMessage = document.createElement('div');

    const body = document.querySelector('body');
    body.addEventListener('input', (e) => {
        let target = e.target;
        if (e.inputType === 'insertFromPaste') {
            target.value = '';
            return;
        }
        
        if (target.matches('.fio')) {
            target.value = target.value.replace(/[^а-я\s\-]/i,'');
        } else if(target.matches('.tel')) {
            target.value = target.value.replace(/[^\+\d\(\)\-]/i, '');
        }
    });

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        titleForm.style.display = 'none';
        form.appendChild(statusMessage);

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            statusMessage.textContent = loadMessage;
    
            if (request.readyState !== 4) {
                return;
            }
    
            if (request.status === 200) {
                statusMessage.textContent = succesMessage;
            } else {
                statusMessage.textContent = errorMessage;
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'aplication/json');

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        request.send(JSON.stringify(body));
    });
};

export default sendForm;