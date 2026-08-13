window.addEventListener("DOMContentLoaded", () => {
    // gsap.registerPlugin(InertiaPlugin)

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0
    
    const root = document.querySelector('#hero_image')
    root.addEventListener("mousemove", (e) => {
        // horizontal change
        deltaX = e.clientX - oldX;

        // vertical change
        deltaY = e.clientY - oldY;

        // Update old coordinates with the current mouse position
        oldX = e.clientX;
        oldY = e.clientY;
    })

    root.querySelectorAll('.image').forEach(el => {
        // const activeTweens = new Map();
        el.addEventListener('mouseenter', () => {
            const image = el.querySelector('image');
            
            if (gsap.isTweening(image)) return; // debounce

            gsap.fromTo(image, {
                rotate: 0
            }, {
                rotate: (Math.random() - 0.5) * 40, // small wiggle range: ±10 deg
                duration: 0.4,
                yoyo: true,
                repeat: 1,
                ease: 'power1.inOut',
                transformOrigin: '50% 50%' // important for centered rotation
            });
        });
    })

    const nav = document.querySelector('.mininav');
    const triggerHeight = 800; 

    window.addEventListener('scroll', () => {
    if (window.scrollY >= triggerHeight) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
    });
})