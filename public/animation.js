// eslint-disable-next-line no-undef
const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
t1.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
t1.to(".slider", { y: "-100%", duration: 1.5 });
t1.to(".intro", { y: "-100%", duration: 1.5 }, "-=1");
t1.fromTo(".nav-links", { opacity: 0 }, { opacity: 1, duration: 1 });
// t1.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
