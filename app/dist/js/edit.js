import { editController } from "./controllers/editController.js";
const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-user');
const btnFind = document.querySelector('#find-user');
const btnDelete = document.querySelector('#delete-user');
const controller = new editController();
btnRegister === null || btnRegister === void 0 ? void 0 : btnRegister.addEventListener('click', event => {
    controller.editUser();
});
btnFind === null || btnFind === void 0 ? void 0 : btnFind.addEventListener('click', event => {
    controller.findUser();
});
btnDelete === null || btnDelete === void 0 ? void 0 : btnDelete.addEventListener('click', event => {
    controller.deleteUser();
});
//# sourceMappingURL=edit.js.map