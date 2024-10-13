const radioGroup = document.querySelector('.radio-group')
const radioButtons = radioGroup.querySelectorAll('input[type="radio"]')
const calculateBtn = document.querySelector('#calculate-btn')
const notification = document.querySelector('#noti')
const firstNumberInput = document.querySelector('#first-num')
const secondNumberInput = document.querySelector('#second-num')
calculateBtn.addEventListener('click',()=>{
    let operation  
    radioButtons.forEach((btn)=>{
        if(btn.checked)
        {
            operation = btn.value
        }
    })
    const firstNumber = firstNumberInput.value
    const secondNumber = secondNumberInput.value
    if(operation && firstNumber && secondNumber)
    {
        calculate(operation,firstNumber,secondNumber)
    }

})

const calculate = (operation, first, second)=>{
    let result 
    notification.textContent = ''
    if (!isValidNumber(first)) {
        notification.textContent = 'Input value in first field must be a number'
        firstNumberInput.value = ''
        return
    }
    if (!isValidNumber(second)) {
        notification.textContent = 'Input value in second field must be a number'
        secondNumberInput.value = ''
        return 

    }
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);
    switch(operation)
    {
        case 'mul': {
            result = num1 * num2 
            break
        }
        case 'add':{
            result = num1 + num2 
            break
        }
        case 'div':{
            result = num1 / num2 
            break
        }
        case 'minus':{
            result = num1 - num2 
            break
        }
        default : break
    }
    const resultValue = document.querySelector('#result-num')
    console.log(result)
    resultValue.value = result.toString()
    console.log(num1,num2,result)
}
const isValidNumber = (value) => {
    const regex = /^-?\d+(\.\d+)?$/; 
    return regex.test(value);
}