gsap.registerPlugin(ScrollTrigger);

// Hero Animation
gsap.from(".hero-content", {
    opacity: 0,
    y: 100,
    duration: 1.5
});

// Scroll Animations
gsap.utils.toArray(".animate").forEach((element) => {

    gsap.from(element, {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

});