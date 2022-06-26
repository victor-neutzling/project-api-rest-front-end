import { editController } from "./controllers/editController.js";
const userID = document.querySelector('#user-id');
const btnRegister = document.querySelector('#submit-task');
const btnFind = document.querySelector('#find-user');
const controller = new editController();
btnFind === null || btnFind === void 0 ? void 0 : btnFind.addEventListener('click', event => {
    controller.findTask();
});
//# sourceMappingURL=deleteTask.js.map