window.addEventListener("DOMContentLoaded", () => {
    // gsap.registerPlugin(InertiaPlugin)

    let oldX = 0, 
        oldY = 0, 
        deltaX = 0,
        deltaY = 0
    
    const root = document.querySelector('#hero_image')
    root.addEventListener("mousemove", (e) => {
        // Calculate horizontal movement since the last mouse position
        deltaX = e.clientX - oldX;

        // Calculate vertical movement since the last mouse position
        deltaY = e.clientY - oldY;

        // Update old coordinates with the current mouse position
        oldX = e.clientX;
        oldY = e.clientY;
    })

    root.querySelectorAll('.image').forEach(el => {
        // const activeTweens = new Map();
        el.addEventListener('mouseenter', () => {
            const image = el.querySelector('image');
            
            if (gsap.isTweening(image)) return; // Optional debounce

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
        // el.addEventListener('mouseenter', () => {
        //     const image = el.querySelector('image');
        //     const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
        //     const velocityX = clamp(deltaX * 10, -20, 20);
        //     const velocityY = clamp(deltaY * 10, -20, 20);

        //     if (activeTweens.get(image)) return;

        //     // Save original transform matrix
        //     const originalMatrix = image.transform.baseVal.consolidate()?.matrix || image.ownerSVGElement.createSVGMatrix();

        //     const proxy = { x: 0, y: 0 };
        //     const tl = gsap.timeline({
        //         onComplete: () => {
        //             activeTweens.delete(image);
        //         }
        //     });

        //     activeTweens.set(image, tl);

        //     // Helper: Apply matrix from proxy
        //     const applyMatrix = () => {
        //         const m = originalMatrix.translate(proxy.x, proxy.y);
        //         const transformString = `matrix(${m.a},${m.b},${m.c},${m.d},${m.e},${m.f})`;
        //         image.setAttribute('transform', transformString);
        //     };

        //     // Animate out with movement
        //     tl.to(proxy, {
        //         x: velocityX,
        //         y: velocityY,
        //         duration: 0.5,
        //         onUpdate: applyMatrix,
        //         ease: 'power2.out'
        //     });

        //     // Animate back with easing
        //     tl.to(proxy, {
        //         x: 0,
        //         y: 0,
        //         duration: 0.9, // slower return
        //         delay: 0.15,
        //         onUpdate: applyMatrix,
        //         ease: 'slow(0.7, 0.7, false)' // ultra-smooth easing
        //     });

        //     // Subtle rotation
        //     tl.fromTo(image, {
        //         rotation: 0
        //     }, {
        //         rotation: (Math.random() - 0.5) * 30,
        //         duration: 0.4,
        //         yoyo: true,
        //         repeat: 1,
        //         ease: 'power1.inOut',
        //         transformOrigin: '50% 50%'
        //     }, '<');
        // });
    })
})