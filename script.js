gsap.registerPlugin(ScrollTrigger);

// HERO
gsap.from(".hero-content",{
    y:100,
    opacity:0,
    duration:1.5
});

// CARDS
gsap.utils.toArray(".reveal").forEach(item => {

    gsap.from(item,{
        y:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:item,
            start:"top 80%",
            toggleActions:"play none none reverse"
        }
    });

});