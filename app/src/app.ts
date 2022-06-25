import { SearchController } from "./controllers/searchController.js";
import { TaskService } from "./services/taskServices.js";
import { UserService } from "./services/userServices.js";


let userService = new UserService();
let taskService = new TaskService();
let searchController = new SearchController();

let btnFindUsers = document.querySelector('#find-users');
let btnFindTasks = document.querySelector('#find-tasks');

console.log("aa")
btnFindUsers?.addEventListener("click", event =>{
     const promise = userService.getUsers();
     promise.then(data => {
        console.log(data);
     });
});
btnFindTasks?.addEventListener('click',event =>{ 
    const promise = taskService.getTasks();
     promise.then(data => { 
        console.log(data);
     });
})