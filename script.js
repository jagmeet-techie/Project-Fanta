var tl = gsap.timeline({scrollTrigger:{
    trigger: "#page2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')

tl.to("#orange-cut",{
    top:"130%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "12%",
    top:"170%",
    right: "5%",

}, 'orange')
tl.to("#leaf",{
    top:"105%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#page3",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})
tl2.from(".lemon1",{
    rotate: "-90deg",
    left:"-50%",
    top:"110%"

}, "ca")

tl2.from("#cocacola",{
    rotate: "-90deg",
    
    top:"110%"

}, "ca")

tl2.from("#pepsi",{
    rotate: "-90deg",
    
    top:"110%"

}, "ca")

tl2.from(".lemon2",{
    rotate: "-90deg",
    
    top:"110%"

}, "ca")


tl2.to("#orange-cut",{
    width: "15%",
    left:"50%",
    top:"200%"

}, "ca")

tl2.to("#fanta",{
    width: "40%",
    left:"30%",
    top:"205%"
    
}, "ca")
Shery.textAnimate("#footer h1" /* Element to target.*/, {
    
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  
 

