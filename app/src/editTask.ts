import { editController } from "./controllers/editController.js"

const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-task')
const btnDelete = document.querySelector('#delete-task')
const btnFind = document.querySelector('#find-user')
const controller = new editController()

btnFind?.addEventListener('click',event =>{
    controller.findTask();
})
btnRegister?.addEventListener('click',event =>{
    controller.editTask();
})
btnDelete?.addEventListener('click',event =>{
    controller.deleteTask();
})