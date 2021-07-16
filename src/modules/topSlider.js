const topSlider = () => {
    const topSlider = document.querySelectorAll('.top-slider'),
        slide = document.querySelectorAll('.item');

        let currentSlide = 0;

        const aitoPlaySlide = () => {
            slide[currentSlide].style.display = 'none';
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            slide[currentSlide].style.display = 'block';
        };

        const startSlide = () => {
            setInterval(aitoPlaySlide, 3000);
        };
        
        startSlide();
};

export default topSlider;