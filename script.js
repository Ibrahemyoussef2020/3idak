/* observe */

const transformers = document.querySelectorAll('.tarns-observer');

const observer = new IntersectionObserver(

    entries => {
        entries.forEach(entry => {
            const element = entry.target;
            
            if (element.classList.contains('scale')) {
                element.classList.toggle('scale-1', entry.isIntersecting)
            }
            else if(element.classList.contains('traslate')){
                element.classList.toggle('traslate-back', entry.isIntersecting)
            }     
            if (entry.isIntersecting) observer.unobserve(element)  
        }
            
        )
    },
    {
        threshold:0,
    }
)

transformers.forEach(transformer => {
    observer.observe(transformer)
})

/* nav */

const navBtn = document.querySelector('.nav-btn'),
      componentList =  document.querySelector('.components-links'); 

navBtn.addEventListener('click' , ()=>{
    componentList.classList.toggle('hidden-nav');
})
