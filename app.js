const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const btn = document.getElementById('btn')
const result1 = document.getElementById('result')

function calculate (arg1, arg2) {
    const result = ((arg1 / arg2) * 100)
    return result
}

btn.onclick = function () {
    const end = calculate(inp1.value, inp2.value)
    result1.textContent = `${end} литров/100км`
}



