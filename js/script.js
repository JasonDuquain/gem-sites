gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin);


const buttons = gsap.utils.toArray('.bar--inside');
buttons.forEach((btn) => {
  gsap.from(btn, {
    scrollTrigger: {
      start: 'top 80%',
      end: 'bottom top',
      trigger: btn,
      toggleClass: 'animate'
    }
  });
});


function init() {


}

//GSDevTools.create();

window.addEventListener("load", function(event) {
  gsap.set(".container", {autoAlpha:1})
  init(); 
});



const attrObserver = new MutationObserver((mutations) => {
  mutations.forEach(mu => {
    if (mu.type !== "attributes" && mu.attributeName !== "class") return;
    console.log("class was modified!");
    
    mu.target.firstElementChild.style.color = 'blue';
  });
});

const ELS_test = document.querySelectorAll(".bar--inside");
ELS_test.forEach(el => {
  attrObserver.observe(el, {attributes: true})
  
});

// Example of Buttons toggling several .test classNames
//document.querySelectorAll(".btn").forEach(btn => {
//  btn.addEventListener("click", () => ELS_test.forEach(el => el.classList.toggle(btn.dataset.class)));
//});


