function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotiveAnimation();

if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
  // Only run mouseFollower on non-touch devices
  Shery.mouseFollower();
}

Shery.makeMagnet("nav h5" );

Shery.textAnimate("nav h4", {
  style: 1,
  y: 1,
  delay: 0.3,
  duration: 10,
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

function page4VideoHover() {
  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    var video = elem.querySelector("video");
    var image = elem.querySelector("img");

    // Desktop: Hover to play
    elem.addEventListener("mouseenter", function () {
      if (window.innerWidth > 768) {
        video.style.opacity = 1;
        video.play();
      }
    });

    elem.addEventListener("mouseleave", function () {
      if (window.innerWidth > 768) {
        video.style.opacity = 0;
        video.load();
      }
    });

    // Mobile: Tap to play
    image.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        elem.classList.add("active"); // Adds class to switch to video in CSS
        video.play();
      }
    });

    // Optional: Hide video and show image again when video ends
    video.addEventListener("ended", function () {
      if (window.innerWidth <= 768) {
        elem.classList.remove("active");
        video.load();
      }
    });
  });
}
page4VideoHover();

function page6Animations() {
    gsap.from("#part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#part2",
            scroller: "#main",
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
page6Animations();  

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "100px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation();


function updateDateTime() {
  const now  = new Date();

  // format date ⇒ 13/07/2025
  const date = now.toLocaleDateString('en-IN', {
    day   : '2-digit',
    month : '2-digit',
    year  : 'numeric',
    timeZone: 'Asia/Kolkata'
  });

  // format time ⇒ 02:53 AM
  const time = now.toLocaleTimeString('en-IN', {
    hour   : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    hour12 : true,
    timeZone: 'Asia/Kolkata'
  });

  /* write date and time on two lines */
  document.getElementById('datetime').innerHTML = `${date}<br>${time}`;
  document.getElementById('year').textContent   = now.getFullYear();
}

updateDateTime();              // first run
setInterval(updateDateTime, 60000); // then every minute

function setupHamburgerMenuToggle() {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  }
}

// Call the function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupHamburgerMenuToggle);
