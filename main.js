#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.redBright.italic("\n\t Todo list application by Hashir Raees\n\t"));
while (condition) {
    let todosQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "what would you like to add in your todos?",
            type: "input",
        }
    ]);
    todos.push(todosQuestions.firstQuestion);
    console.log(chalk.yellowBright.bold(`${todosQuestions.firstQuestion} task is added in todo list`));
    let againQuestion = await inquirer.prompt([
        {
            name: "secondQuestion",
            message: "would you like to add more in your todos",
            type: "confirm",
            default: "true",
        }
    ]);
    condition = againQuestion.secondQuestion;
}
console.log("Your todo list is", todos);
