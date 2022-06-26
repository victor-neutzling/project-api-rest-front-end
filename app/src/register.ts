import { RegisterController } from "./controllers/registerController.js"

const btnRegister = document.querySelector('#submit-user')
const controller = new RegisterController()
btnRegister?.addEventListener('click', event =>{
    controller.registerUser();
})