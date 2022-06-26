import { RegisterController } from "./controllers/registerController.js"

//this file is actually responsible for registering tasks
//i can't find a way to rename it without messing with the github repository and the imports
//so i'll leave it as is for now

const btnRegister = document.querySelector('#submit-task')
const controller = new RegisterController()
btnRegister?.addEventListener('click', event =>{
    controller.registerTask();
})