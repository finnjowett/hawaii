let header = document.querySelector('header');
let headerA = document.querySelectorAll('header nav ul li a');
window.addEventListener('scroll',()=>{
    if (window.pageYOffset != 0) {
        header.style.backgroundColor = '#C3BDBD';
        headerA.forEach(a=>{
            a.style.color = 'white'
        })
    } else {
        header.style = '';
        headerA.forEach(a=>{
            a.style = ''
        })
    }
})