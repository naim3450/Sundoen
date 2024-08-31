
let elemC = document.querySelector('.elem-container')
let elems = document.querySelectorAll('.elem')
let FixedImage = document.querySelector('.fixed-image')


elemC.addEventListener('mouseleave', () => {
    FixedImage.style.display = `none`
})


elems.forEach(function (el) {
    el.addEventListener('mouseover', () => {
        FixedImage.style.display = `block`
        let image = el.getAttribute(`data-image`)
        FixedImage.style.backgroundImage = `url(${image})`
    })
})

let loader = document.querySelector('#loader')

function loaderAnimation() {
    setTimeout(function () {
        loader.style.top = '-100%'
    }, 2800);
}
loaderAnimation()
