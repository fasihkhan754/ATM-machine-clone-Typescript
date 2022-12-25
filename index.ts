#! /usr/bin/node env
import inquirer from 'inquirer';

interface bnk{
    username:string,
    pincode:number,
    AccountType:string,
    Transaction:string,
    Ammount:number
}
const answer: bnk= await inquirer.prompt([
    {
        type:"input",
        name:"username",
        message:"Enter Your UserID : "

    },
    {
        type:"number",
        name:"pincode",
        message:"Enter Your Pin : "
    },
    {
        type:"list",
        name:"AccountType",
        choices:["Current Account","Saving Account"],
        message:"Choose Account Type : "
    },
    {
        type:"list",
        name:"Transaction",
        choices:["Withdraw","FAstCash"],
        message:"Select Transaction : ",
        when(answer){
            return answer.AccountType;
        }
    },
    {
        type:"list",
        name:"Ammount",
        choices:[1000,2000,3000,4000,5000],
        message:"Select Transaction : ",
        when(answer){
            return answer.AccountType="FAstCash";
        }
    },
    {
        type:"list",
        name:"Ammount",
        choices:[500,1000,1500,2000,2500,3000],
        message:"Select Transaction : ",
        when(answer){
            return answer.AccountType="Withdraw";
        }
    }
])

if(answer.username && answer.pincode)
{var remaining;
    const Balance=1000000;
    console.log("TOTAL BALANCE REMAINING :" + Balance);
    const entrd=answer.Ammount;
    console.log(entrd);
    if(Balance>entrd)
    {
        remaining=Balance-entrd;
console.log("Remaining Balance : "+ remaining)
    }else{
        console.log("Insufficient Balance");
    }
}

//console.log(answer.username);