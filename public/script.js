let nav_var = document.querySelector("nav");
window.addEventListener("scroll", change_scroll); //scroll is an event & change_scroll is a function

function change_scroll() {
  if (window.pageYOffset > 100) {
    nav_var.classList.add("bg-black", "shadow");
  } else {
    nav_var.classList.remove("bg-black", "shadow");
  }
}

var tl = gsap.timeline();  //navbar & home content

tl.from("nav", {
  y: "-100%",
  duration: 1.5,
  opacity: 0,
})
tl.from(".shape", {
  x: -50,
  opacity: 0,
  duration: 1.2,
});

var tl2 = gsap.timeline({    //features section
  scrollTrigger: {
    trigger: ".feature",    //target element 
    start: "top 50%",
  },
});

tl2.from(".feat", {         
  stagger: 0.2,
  y: -50,
  opacity: 0,
  duration: 1,
});

var tl3 = gsap.timeline({       //background section
  scrollTrigger: {
    trigger: ".bgsection",      //target element 
    start: "top 50%",
  },
});

tl3
  .from("#mainimg", {
    opacity: 0,
    x: 50,
    duration: 1,
  })
  .from(".bgcontent", {
    opacity: 0,
    x: -50,
    duration: 1,
  });


  
