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

btnChoose1.onclick = function () {
    whoChooseBtn = '1'
}

btnChoose2.onclick = function () {
    whoChooseBtn = '2'
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
}




