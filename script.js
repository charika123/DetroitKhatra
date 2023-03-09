function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


const tl = gsap.timeline({defaults: {ease: "power1.out"}});
tl.to(".text", {y: "0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
tl.fromTo(".heading", {opacity: 0}, {opacity: 1, duration: 0.8});
tl.fromTo(".background-content", {opacity: 0}, {opacity: 1, duration: 0.6}, '-=1');

window.addEventListener('scroll', function(){
    const AboutUsHeading = document.querySelector('.aboutUsHeading');
    const AboutUsContent = document.querySelector('.aboutUsContent');
    let scrollPositionY = window.pageYOffset;
    AboutUsHeading.style.transform = 'translateY(' + scrollPositionY * 0.32 + 'px)';
    AboutUsContent.style.transform = 'translateY(' + scrollPositionY * -0.15 + 'px)';
});
