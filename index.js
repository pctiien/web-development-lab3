const radioGroup = document.querySelector('.radio-group')
const radioButtons = radioGroup.querySelectorAll('input[type="radio"]')
const calculateBtn = document.querySelector('#calculate-btn')
const notification = document.querySelector('#noti')
const firstNumberInput = document.querySelector('#first-num')
const secondNumberInput = document.querySelector('#second-num')
const errors = {}
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
    
    calculate(operation,firstNumber,secondNumber)

})
firstNumberInput.addEventListener('change',(e)=>{
    const value = e.target.value 
    if(!isValidNumber(value))
    {
        errors.firstNum = 'Input value in first field must be a number'
    }else{
        delete errors.firstNum
    }
    notification.textContent = errors.firstNum || errors.second || errors.operation || ''
})
secondNumberInput.addEventListener('change',(e)=>{
    const value = e.target.value 
    if(!isValidNumber(value))
    {
        errors.secondNum = 'Input value in second field must be a number'
    }else{
        delete errors.secondNum
    }
    notification.textContent = errors.secondNum || errors.firstNum || errors.operation || ''

})
const calculate = (operation, first, second)=>{
    let result 
    notification.textContent = ''
    if(!operation)
    {
        errors.operation ='Please select an operation to calculate'
    }else{
        delete errors.operation
    }

    if (!isValidNumber(first)) {
        errors.firstNum = 'Input value in first field must be a number'
    }else{
        delete errors.firstNum
    }
    if (!isValidNumber(second)) {
        errors.secondNum = 'Input value in second field must be a number'
    }else{
        delete errors.secondNumber
    }
    notification.textContent = errors.operation || errors.firstNum || errors.secondNum || ''
    if(Object.keys(errors).length >0) return 
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

    resultValue.value = result.toString()
}
const isValidNumber = (value) => {
    if(value.trim().length <= 0) return true
    const regex = /^-?\d+(\.\d+)?$/; 
    return regex.test(value);
}