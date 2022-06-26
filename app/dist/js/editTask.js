import { editController } from "./controllers/editController.js";
const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-task');
const btnFind = document.querySelector('#find-user');
const controller = new editController();
btnRegister === null || btnRegister === void 0 ? void 0 : btnRegister.addEventListener('click', event => {
    controller.editTask();
});
btnFind === null || btnFind === void 0 ? void 0 : btnFind.addEventListener('click', event => {
    controller.findTask();
});
//# sourceMappingURL=editTask.js.map