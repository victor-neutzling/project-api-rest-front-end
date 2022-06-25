import { TaskService } from "./services/taskServices.js";
import { UserService } from "./services/userServices.js";
let userService = new UserService();
let taskService = new TaskService();
let btnFindUsers = document.querySelector('#find-users');
let btnFindTasks = document.querySelector('#find-tasks');
console.log("aa");
btnFindUsers === null || btnFindUsers === void 0 ? void 0 : btnFindUsers.addEventListener("click", event => {
    const promise = userService.getUsers();
    promise.then(data => {
        console.log(data);
    });
});
btnFindTasks === null || btnFindTasks === void 0 ? void 0 : btnFindTasks.addEventListener('click', event => {
    const promise = taskService.getTasks();
    promise.then(data => {
        console.log(data);
    });
});
//# sourceMappingURL=app.js.map