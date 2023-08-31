gsap.to("body", {backgroundColor: "#B0C4DE		", duration: 3});
gsap.from('.header',{duration:1,y:"-100%",ease:'bounce'})
gsap.from('.link',{duration:1,delay:1,x:"-100%",stagger:0.25,ease:'elastic'})

gsap.from('.right',{duration:2,x:'-100vw',delay:1.5,ease:'power2.in'})
gsap.from('.left',{duration:2,x:'-100%'})
gsap.to('.footer',{duration:1,y:0,delay:2.5,ease:'elastic'})

gsap.fromTo('.button',{opacity:0,scale:0,rotation:720},{duration:1,delay:3.5,opacity:1,scale:1,rotation:0})