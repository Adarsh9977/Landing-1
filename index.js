gsap.to(".overlay", {
    duration: 1.7,
    x: '100%',
    delay: 1,
})

const tl = gsap.timeline({repeat: -1});

tl
.from(".hero_sec_img_inner",{
    scale: 0,
    duration: 1.8,
    delay:2.5,
    ease: Elastic.easeOut.config(2,1)
})
.from(".block-1, .block-3", {
    x:200,
    duration:0.8,
    delay: 0.4,
})
.from(".block-2, .block-4", {
    x: -200,
    duration:1,
},'-=1')
.to(".block-1, .block-3", {
    x: 0,
    y: 100,
    duration: 1,
    delay: 0.4,
})
.to(".block-2, .block-4", {
    x: 0,
    y: -100,
    duration: 1,
},'-=1')
.to('.block-1, .block-3',{
    x: 0,
    y: 100,
    scaleX: -1,
    duration: 1,
})
.to('.block-2, .block-4',{
    x: 0,
    y: -100,
    scaleX: -1,
    duration: 1,
}, '-=1')
.to('.block-3', {
    x: 0,
    y: 100,
    scaleX: 1,
    duration: 1,
    delay: 0.4,
})
.to('.block-2', {
    x: 0,
    y: -100,
    scaleX: 1,
    duration: 1,
}, '-=1')

.to('.block-1, .block-3', {
    x: 0,
    y: 0,
    duration: 1,
    delay: 0.4,
})

.to('.block-2, .block-4', {
    x: 0,
    y: 0,
    duration: 1,
}, '-=1')

.to('.block-3', {
    x: 0,
    y: 0,
    scaleX: -1,
    duration: 1,
    delay: 0.4,
})
.to('.block-2', {
    x: 0,
    y: 0,
    scaleX: -1,
    duration: 1,
}, '-=1')

.to(".hero_sec_img_inner",{
    scale: 0,
    duration: 2,
    delay:0.4,
    ease: Back.easeIn.config(4)
})