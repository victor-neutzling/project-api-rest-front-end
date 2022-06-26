import { editController } from "./controllers/editController.js"

const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-user')
const btnFind = document.querySelector('#find-user')
const btnDelete = document.querySelector('#delete-user')
const controller = new editController()
btnRegister?.addEventListener('click', event =>{
    controller.editUser();
})
btnFind?.addEventListener('click',event =>{
    controller.findUser();
})
btnDelete?.addEventListener('click',event =>{
    controller.deleteUser();
})