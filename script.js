Shery.mouseFollower();

Shery.makeMagnet("nav h5" );

Shery.textAnimate("nav h4", {
  style: 1,
  y: 5,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 1,
});

Shery.imageMasker("nav button", {
  mouseFollower: true,
  text: "Click Me",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

function navAnimation() {
    const nav = document.querySelector("nav");
    const navBottom = document.querySelector("#nav-bottom");
    const h5s = document.querySelectorAll(".navbar h5");
    const spans = document.querySelectorAll(".navbar h5 span");

    let tl; 

    nav.addEventListener("mouseenter", () => {
        if (tl) tl.kill();
        tl = gsap.timeline();

        tl.to(navBottom, {
            height: "25vh",
            duration: 0.4,
            ease: "power2.out"
        });

        tl.set(h5s, { display: "block" }, "<");

        tl.fromTo(spans,
            { y: 25, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                duration: 0.4,
                stagger: 0.06,
                ease: "power3.out"
            },
            "-=0.2"
        );
    });

    nav.addEventListener("mouseleave", () => {
        if (tl) tl.kill(); 
        tl = gsap.timeline();

        tl.to(spans,
            {
                y: 25,
                autoAlpha: 0,
                duration: 0.1,
                stagger: 0.05,
                ease: "power3.in"
            }
        );

        tl.set(h5s, { display: "none" });

        tl.to(navBottom, {
            height: 0,
            duration: 0.1,
            ease: "power2.inOut"
        }, "<");
    });
}
navAnimation()