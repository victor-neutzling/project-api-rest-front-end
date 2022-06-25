import { SearchController } from "./controllers/searchController.js";
import { TaskService } from "./services/taskServices.js";
import { UserService } from "./services/userServices.js";
let userService = new UserService();
let taskService = new TaskService();
let searchController = new SearchController();
let btnFindUsers = document.querySelector('#find-users');
let btnFindTasks = document.querySelector('#find-tasks');
console.log("aa");
btnFindUsers === null || btnFindUsers === void 0 ? void 0 : btnFindUsers.addEventListener("click", event => {
    searchController.searchUsers();
});
btnFindTasks === null || btnFindTasks === void 0 ? void 0 : btnFindTasks.addEventListener('click', event => {
    searchController.searchTasks();
});
//# sourceMappingURL=app.js.map