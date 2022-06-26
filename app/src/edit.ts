import { editController } from "./controllers/editController.js"

const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-user')
const btnFind = document.querySelector('#find-user')
const controller = new editController()
btnRegister?.addEventListener('click', event =>{
    controller.editUser();
})
btnFind?.addEventListener('click',event =>{
    controller.findUser();
})