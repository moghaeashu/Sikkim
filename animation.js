gsap.to(".logos img",{
    transform:"translateX(-2000%)",
    duration:40,
    repeat:-1,
    ease:"none"
})

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".logos img",{
            transform:"translateX(-2000%)",
            duration:40,
            repeat:-1,
            ease:"none"
        })
    } else {
        gsap.to(".logos img",{
            transform:"translateX(2000%)",
            duration:40,
            repeat:-1,
            ease:"none"
        })
    }
})

gsap.to(".mobilelogos img",{
    transform:"translateX(-2000%)",
    duration:40,
    repeat:-1,
    ease:"none"
})

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".mobilelogos img",{
            transform:"translateX(-2000%)",
            duration:40,
            repeat:-1,
            ease:"none"
        })
    } else {
        gsap.to(".mobilelogos img",{
            transform:"translateX(2000%)",
            duration:40,
            repeat:-1,
            ease:"none"
        })
    }
})
