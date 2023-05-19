const h_img = document.querySelector('.h-img');
const h_hii = document.querySelector('.h_hii');
const i_am = document.querySelector('.i_am');
const field = document.querySelector('.field');
const projectsIntor = document.querySelector('.projectsIntor');
const p_img = document.querySelector('.p_img');

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    let offsetY = window.scrollY
    // h1.style.transform = `translate(${offsetY * 0.4}px,${offsetY * 0.7}px)`
    h_img.style.transform = `translate(${offsetY * 3}px, ${offsetY * 2}px )`
    h_hii.style.transform = `translateX( ${offsetY * 0.8}px )`
    i_am.style.transform = `translateX(calc(100vh - ${offsetY}px) )`
    field.style.transform = `translateX(calc(-200vh + ${offsetY}px) )`
    projectsIntor.style.transform = `translateY(calc(300vh - ${offsetY}px) )`
    p_img.style.transform = `translateX(calc(380vh - ${offsetY}px))`
})