class SliderCarousel{
    constructor({
        main,
        wrap,
        next,
        prev,
        position = 0,
        slidesToShoW = 3,
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShoW = slidesToShoW;
        this.options = {
            position,
            widhtSlide: Math.floor(100 / this.slidesToShoW)
        };
    }

    init(){
        this.addMyClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
    }
    addMyClass(){
        this.main.classList.add('koch-slider');
        this.wrap.classList.add('koch-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('koch-slider__item');
        }
    }

    addStyle(){
        const style = document.createElement('style');
        style.id = 'koch-slider__style';
        style.textContent = `
            .koch-slider{
                overflow: hidden;
            }
            .koch-slider__wrap{
                display: flex;
                transition: transform 0.5s;
                will-change: transform !importamt;
            }
            .koch-slider__item{
                flex: 0 0 ${this.options.widhtSlide}% ;
                margin: auto 0 !importamt;
            }
        `;
        document.head.appendChild(style);
    }
    
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider(){
        if (this.options.position > 0){
            --this.options.position;
            console.log(this.options.position);
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widhtSlide}%)`;
        }
    }

    nextSlider(){
        if (this.options.position < this.slides.length - this.slidesToShoW){
        ++this.options.position;
        console.log(this.options.position);
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widhtSlide}%)`;
    }
    }

    addArrow(){
    }
}

const carousel = new SliderCarousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    prev: '.arrow-left',
    next: '.arrow-right',
    // slidesToShoW: 4,
});

export default carousel;