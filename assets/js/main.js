const Form = document.querySelector('form')
const forminp = document.querySelector('input')
const defCard = document.querySelector('.def-card')
const activeCard = document.querySelector('.active-card')
const rate_nums = document.querySelectorAll('.rate-num')
const sel_rate = document.querySelector('.sel-rate')
const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')


rate_nums.forEach(num => {
    num.addEventListener('click', () => {
        forminp.value = num.innerHTML
    })
})

Form.addEventListener('submit', (e) => {
    e.preventDefault()
    if ( forminp.value != '' ) {
        defCard.style.display = 'none'
        activeCard.style.display = 'block'
        sel_rate.innerHTML = `you selected ${forminp.value} of 5` 
    }
    else {
        confirm('cannot submit empty field')
    }
})


function some_func(curr_elem, gen_elem) {
    curr_elem.addEventListener('click', () => {
        gen_elem.forEach(item => {
            item.classList.remove('current')
        })
        curr_elem.classList.add('current')
    })
}

some_func(num1, rate_nums)
some_func(num2, rate_nums)
some_func(num3, rate_nums)
some_func(num4, rate_nums)
some_func(num5, rate_nums)
