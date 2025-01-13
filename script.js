AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

const scrollElements = document.querySelectorAll([
    '.scroll-fade-up',
    '.scroll-fade-left',
    '.scroll-fade-right',
    '.scroll-scale'
].join(','));

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) * (1 - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const hideScrollElement = (element) => {
    element.classList.remove('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 0.25)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function() {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function() {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, Math.max(wait - (Date.now() - lastTime), 0));
        }
    };
};

window.addEventListener('scroll', throttle(handleScrollAnimation, 50));

handleScrollAnimation();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
