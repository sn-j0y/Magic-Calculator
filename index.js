function addition(num1, num2){
    return `${num1} plus ${num2} is equals to ${Number(num1)+Number(num2)}`;
}
function subtract(num1, num2){
        return `${num1} minus ${num2} is equals to ${Number(num1)-Number(num2)}`;
}
function multiply(num1, num2){
    return `${num1} multiplied by ${num2} is equals to ${Number(num1)*Number(num2)}`;
}
function divide(num1, num2){
    return `${num1} divided by ${num2} is equals to ${Number(num1)/Number(num2)}`;
}
function magicOperation(num){
    //magic function with switch case opeeration to deal with different numbers
    switch(true){
        case num < 10:
            return "Magic dust makes the number grow: " + (num*10);
            break;
        case num >= 10 && num <= 100:
            return "A magic gnome doubles the number: "+ (num*2);
            break;
        default:
            return "The number is too mighty for magic and remains unchanged."
    }
}
let continueCalculating = true //variable to run a loop until the user decides not to
while(continueCalculating){
    let operation = prompt("Choose an operation: add, subtract, multiply, divide, magic and exit");
    switch(operation){
        case "add": // takes to numbers from user and calls the addition function
            let addnum1 = prompt("Enter the first number:");
            let addnum2 = prompt("Enter the second number:");
            let addresult = addition(addnum1,addnum2);
            console.log(addresult);
            break;
        case "subtract":// takes to numbers from user and calls the subtract function
            let subnum1 = prompt("Enter the first number:");
            let subnum2 = prompt("Enter the second number:");
            let subresult = subtract(subnum1,subnum2);
            console.log(subresult);
            break;
        case "multiply":// takes to numbers from user and calls the multiply function function
            let mnum1 = prompt("Enter the first number:");
            let mnum2 = prompt("Enter the second number:");
            let mresult = multiply(mnum1,mnum2);
            console.log(mresult);
            break;
        case "divide":// takes to numbers from user and calls the divide function
            let dnum1 = prompt("Enter the first number:");
            let dnum2 = prompt("Enter the second number:");
            if (dnum2 === "0"){
                console.log("Can not divide by zero. Try another operation");
            }
            else{
                let dresult = divide(dnum1,dnum2);
                console.log(dresult);
            }
            break;
        case "magic":// takes to numbers from user and calls the magic operation function
            let magicNum = prompt("Enter a Number:");
            let magicResult = magicOperation(magicNum);
            console.log(magicResult);
            break;
        case "exit":// exits the loop with a text in the console
            console.log("Good Bye!");
            continueCalculating = false;
            break;
}
}