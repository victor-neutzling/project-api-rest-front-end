import { editController } from "./controllers/editController.js";
const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-user');
const btnFind = document.querySelector('#find-user');
const controller = new editController();
btnRegister === null || btnRegister === void 0 ? void 0 : btnRegister.addEventListener('click', event => {
    controller.editUser();
});
btnFind === null || btnFind === void 0 ? void 0 : btnFind.addEventListener('click', event => {
    controller.findUser();
});
//# sourceMappingURL=edit.js.map