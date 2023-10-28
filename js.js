let for_error = document.querySelector(`.for_error`)
let arrow = document.querySelector(`.arrow`)
let error = document.querySelector(`.error `)
error.style.display = `none`
let inp = document.getElementById(`inp_one`)
let logo = document.querySelector(`.logo`)
let h1 = document.querySelector(`h1`)
let p = document.querySelector(`p`)
let lap = document.querySelector(`.lap `)
logo.style.cssText = `opacity:1;left:10px`
h1.style.cssText = `opacity:1;left:0px`
p.style.cssText = `opacity:1;left:0px`
lap.style.cssText = `opacity:1;left:10px`
arrow.onclick = () => {
    if (/\w+@gmail.com/ig.test(inp.value) && /\s/ig.test(inp.value) == false) {
        error.style.display = `none`
        arrow.style.backgroundImage = `linear-gradient(135deg,green 50%,green)`
        for_error.style.display = `block`
        for_error.innerHTML = `passed`
        inp.style.borderColor = `green`
        for_error.style.color = `green`
    } else {
        inp.style.borderColor = `red`
        arrow.style.backgroundImage = `linear-gradient(135deg,red,red)`
        for_error.innerHTML = `Please provide avalid email`
        for_error.style.display = `block`
        for_error.style.color = `red`
        error.style.display = `block`
    }
}







