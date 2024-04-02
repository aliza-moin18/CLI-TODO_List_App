#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [""];
let loop = true;

while(loop) {
    let addTask: {
      TODO: string,
      addMore: boolean
    } = await inquirer.prompt ([
        {
            name: 'TODO',
            type: 'input',
            message: 'What do you want in add your Todo?'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more?',
            default: 'false'
        },
  ]);

 let {TODO, addMore} = addTask;
 console.log(addTask)
 loop = addMore

 if (TODO) {
todos.push(TODO)
 } else {
  console.log("Kindly add valid input")
 }
 console.log(todos)

 if(todos.length > 0) {
  console.log("your ToDo list: ")
  todos.forEach(todo => {
    console.log(todo)
  });

 } else {
  console.log("Not ToDos Found")
 }
}
