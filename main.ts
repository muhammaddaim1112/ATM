import inquirer from "inquirer";

let myBalance = 20000; // Dollar
let myPinNumber = 2233;

let pinAnswer = await inquirer.prompt([
    { name: "pin",
    message: "enter your pin",
    type: "number"
    }
]
);

if (pinAnswer.pin === myPinNumber) {
    console.log("Correct Pin Code!!!");


    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["withdraw", "check balance"]

            }
        ]
    )
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]
    );

    myBalance -= amountAns.amount;
    console.log("Your remaining Balance is: " + myBalance);
}
else if(operationAns.operation === "check balance"){
    console.log("your balance is: " + myBalance)
}
else {
    console.log("Incorrect pin number");
}
}