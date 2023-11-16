let repeat = true;
while(repeat) {
    let action = prompt(`What action do you want to make? 
For addition type: add; 
For substraction type: sub; 
For multiplication typt: mul; 
For division type: div.`, '')
    if(action === 'add' || action === 'sub' || action === 'mul' || action === 'div') {
        let check = false;
        let firstNum;
        do {
            firstNum = +prompt('Enter the first number');
            if(typeof firstNum === 'number' && isNaN(firstNum) === false) {
                check = false;
            } else {
                alert('Please numbers only');
                check = true;
            }
        } while (check);
        console.log(firstNum)
        
        let secondNum;

        do {
            secondNum = +prompt('Enter second number');
            if(typeof secondNum === 'number' && isNaN(secondNum) === false) {
                check = false;
            } else {
                alert('Please numbers only');
                check = true;
            }
        } while (check);
        console.log(secondNum)

        let result;
        let sign;

        switch (action) {
            case 'add':
                sign = '+';
                result = firstNum + secondNum;
                break;
            case 'sub':
                sign = '-';
                result = firstNum - secondNum;
                break;
            case 'mul':
                sign = '*';
                result = firstNum * secondNum;
                break;
            case 'div':
                sign = '/';
                result = firstNum / secondNum;
                break;
        }
        alert(`${firstNum}${sign}${secondNum}=${result}`)
    } else {
        action = prompt('Please enter: add, sub, mul, div')
    }
    repeat = confirm('Do you want to repeat?')
}