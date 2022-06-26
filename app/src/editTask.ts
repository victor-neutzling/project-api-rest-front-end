import { editController } from "./controllers/editController.js"

const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-task')
const btnFind = document.querySelector('#find-user')
const controller = new editController()
btnRegister?.addEventListener('click', event =>{
    controller.editTask();
})
btnFind?.addEventListener('click',event =>{
    controller.findTask();
})