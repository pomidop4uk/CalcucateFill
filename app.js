const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const btn = document.getElementById('btn')
const btnChoose1 = document.getElementById('btnChoose1')
const btnChoose2 = document.getElementById('btnChoose2')
const result1 = document.getElementById('result')
const price1 = document.getElementById('price')
const baliz92 = 54.00
const baliz95 = 58.00
let whoChooseBtn = ''

function calculateAIFill (octaneNum, liter) {
    if(octaneNum === baliz92) {
        return baliz92 * liter
    } else if (octaneNum === baliz95) {
        return baliz95 * liter
    }
}


// Можно написать функцию чтобы узнавать какая кнопка и от её зависимости, изменять стиль
btnChoose1.onclick = function () {
    whoChooseBtn = '1'

    btnChoose1.style.border = '2px'
    btnChoose1.style.borderStyle = 'solid'
    btnChoose1.style.borderColor = 'black'

    btnChoose2.style.border = 'none'
    btnChoose2.style.borderStyle = 'none'
    btnChoose2.style.borderColor = 'none'
    
}

btnChoose2.onclick = function () {
    whoChooseBtn = '2'
    
    btnChoose2.style.border = '2px'
    btnChoose2.style.borderStyle = 'solid'
    btnChoose2.style.borderColor = 'black'

    btnChoose1.style.border = 'none'
    btnChoose1.style.borderStyle = 'none'
    btnChoose1.style.borderColor = 'none'
}

function calculate (arg1, arg2) {
    const result = ((arg1 / arg2) * 100)
    return result
}

btn.onclick = function () {
    const end = calculate(inp1.value, inp2.value)
    result1.textContent = `${end} литров/100км`

    if(whoChooseBtn === '1') {
        const end1 = calculateAIFill(baliz92, inp1.value)
        price1.textContent = `${end1}/Р`
    } else if(whoChooseBtn === '2') {
        const end1 = calculateAIFill(baliz95, inp1.value)
        price1.textContent = `${end1}/Р`
    }
    btnChoose2.style.border = 'none'
    btnChoose2.style.borderStyle = 'none'
    btnChoose2.style.borderColor = 'none'

    btnChoose1.style.border = 'none'
    btnChoose1.style.borderStyle = 'none'
    btnChoose1.style.borderColor = 'none'
}

function chooseBtnStyle() {
    if(whoChooseBtn === '1') {
        btnChoose1.onclick = function () {
        
    }
        } else if (whoChooseBtn === '2') {
        btnChoose1.onclick = function () {
            btnChoose1.style.background = 'black'
        }
    }
}
chooseBtnStyle()
