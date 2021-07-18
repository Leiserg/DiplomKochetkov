const scrolling = () => {
    const up = document.querySelector('.up');
        const body = document.querySelector('body');
        
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 400){
            up.style.display = 'block';
            // console.log(1);
        } else {
            up.style.display = 'none';
            // console.log(2);
        }
    });

    up.addEventListener('click', () => {
        window.scrollTo(0,0);
    });
};
export default scrolling;