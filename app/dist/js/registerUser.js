import { RegisterController } from "./controllers/registerController.js";
const btnRegister = document.querySelector('#submit-task');
const controller = new RegisterController();
btnRegister === null || btnRegister === void 0 ? void 0 : btnRegister.addEventListener('click', event => {
    controller.registerTask();
});
//# sourceMappingURL=registerUser.js.map