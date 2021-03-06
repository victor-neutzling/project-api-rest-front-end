import { editController } from "./controllers/editController.js";
const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-task');
const btnDelete = document.querySelector('#delete-task');
const btnFind = document.querySelector('#find-user');
const controller = new editController();
btnFind === null || btnFind === void 0 ? void 0 : btnFind.addEventListener('click', event => {
    controller.findTask();
});
btnRegister === null || btnRegister === void 0 ? void 0 : btnRegister.addEventListener('click', event => {
    controller.editTask();
});
btnDelete === null || btnDelete === void 0 ? void 0 : btnDelete.addEventListener('click', event => {
    controller.deleteTask();
});
//# sourceMappingURL=editTask.js.map