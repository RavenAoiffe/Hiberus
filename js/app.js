/************************
    Smooth Scroll
*************************/
const link = document.querySelector(".hero a");
link.addEventListener("click", clickHandler);

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
/************************
   Hide and show Box
*************************/ 

const viewNotBox = () =>{

    const el = document.querySelector('#box')
    const observer = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        setTimeout(function(){
            el.classList.toggle('hide');
        },1000)

    return
  }

}, {
  root: null,
  threshold: 0.1,
})

observer.observe(el);
}


viewNotBox()
