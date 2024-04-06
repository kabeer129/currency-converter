#!/usr/bin/env node


import inquirer from "inquirer"

const currency: any = {
    USD: 1,
    EUR: 0.92,
    PKR: 277.54,
    INR: 83.30,
    AUD: 1.52,
    JPY: 151.61,
    CAD: 1.36,
    
 };

let user_answer = await inquirer.prompt(
    
    
    [
        {
           name: 'from',
           message: 'please select from currency',
           type: 'list',
           choices:['USD','EUR','PKR','INR','AUD','JPY','CAD']
        },

        {
            name: 'to',
            message: 'please select to currency',
            type: 'list',
            choices:['USD','EUR','PKR','INR','AUD','JPY','CAD']
        },

        {
           name: 'amount',
           message:'enter a amount',
           type: 'number',
        }
    ]

);

let fromAmount= currency[user_answer.from]
let toAmount= currency[user_answer.to]
let amount= user_answer.amount
let baseAmount= amount / fromAmount
let convertAmount=amount * toAmount
console.log(convertAmount);
        
        



















    




