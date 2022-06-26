import { RegisterController } from "./controllers/registerController.js"

const btnRegister = document.querySelector('#submit-task')
const controller = new RegisterController()
btnRegister?.addEventListener('click', event =>{
    controller.registerTask();
})