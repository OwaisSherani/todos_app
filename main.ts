#! /usr/bin/env

import inquirer from "inquirer";
let todos = [];
let condition = true;

while (condition)
{
let addTask = await inquirer.prompt (
    [
        {
            name : 'todo' ,
            type : 'input' ,
            message : 'What you want to add in your Todos' ,


        },
        {
            name : 'addMore' , 
            type : 'confirm' ,
            message : 'Are you sure to add more ?' ,
            default : 'true' 
        }

    ]
);

 todos.push (addTask.todo); // use array

condition = addTask.addMore;
console.log (todos);

// todos.concat (addTask.addMore); // use array for add another list
// console.log (todos);
}
