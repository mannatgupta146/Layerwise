Shery.mouseFollower();

Shery.makeMagnet("nav h5" );

Shery.textAnimate("nav h4", {
  style: 1,
  y: 1,
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
            duration: 0.2,
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
            duration: 0.05,
            ease: "power2.inOut"
        }, "<");
    });
}
navAnimation()


function page2Annimation() {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach((elem) => {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            });
        });

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.clientX - elem.getBoundingClientRect().x - 50,
                y: dets.clientY - elem.getBoundingClientRect().y - 150
            });
        });
    });
}
page2Annimation();

function page3VideoAnnimation() {
    var page3Center = document.querySelector(".page3-center");
    var video = document.querySelector("#page3 video");

    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            borderRadius: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    video.addEventListener("click", function () {
        video.pause();
        video.currentTime = 0; 
        gsap.to(video, {
            scaleX: 0.7,
            scaleY: 0,
            opacity: 0,
            borderRadius: "30px",
            duration: 1,
            ease: "power3.in"
        });
    });
}
page3VideoAnnimation();

function setupPage4VideoHover() {
    var sections = document.querySelectorAll(".sec-right");
    sections.forEach(function (elem) {
        var video = elem.querySelector("video");
        elem.addEventListener("mouseenter", function () {
            video.style.opacity = 1;
            video.play();
        });
        elem.addEventListener("mouseleave", function () {
            video.style.opacity = 0;
            video.load();
        });
    });
}

setupPage4VideoHover();