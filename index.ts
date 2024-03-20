#! /usr/bin/env node
import inquirer from "inquirer";
 
const answer = await inquirer.prompt([{
    name: "firstNumber",
    type: "number",
    message: "Enter first number",
},{
    name:"operator",
    type:"list",
    message:"choose the operation",
    choices:["addition","subtraction","multiplication","division"],
},{
    name: "secondNumber",
    type: "number",
    message: "Enter second number",
}]);

if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("invalid selection");
}