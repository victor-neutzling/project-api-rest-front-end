import { TaskService } from "../services/taskServices.js";
import { UserService } from "../services/userServices.js";
import { SearchView } from "../views/SearchView.js";
export class SearchController {
    constructor() {
        this.userService = new UserService();
        this.taskService = new TaskService();
        this.searchBar = document.getElementById('sb');
        this.searchView = new SearchView('#search-results');
    }
    searchUsers() {
        const temp = document.querySelector('#search-results');
        if (temp !== null)
            temp.innerHTML = '';
        if (this.searchBar.value.length !== 0) {
            const promise = this.userService.getUsers();
            promise.then(data => {
                data.forEach((element) => {
                    if (element['name'].includes(this.searchBar.value)) {
                        this.searchView.update(element);
                    }
                });
            });
        }
        else {
            const promise = this.userService.getUsers();
            promise.then(data => {
                data.forEach((element) => {
                    this.searchView.update(element);
                });
            });
        }
    }
    searchTasks() {
        const temp = document.querySelector('#search-results');
        if (temp !== null) {
            temp.innerHTML = '';
        }
        if (this.searchBar.value.length !== 0) {
            const promise = this.taskService.getTasks();
            promise.then(data => {
                data.forEach((element) => {
                    if (element['description'].includes(this.searchBar.value)) {
                        this.searchView.update(element);
                    }
                });
            });
        }
        else {
            const promise = this.taskService.getTasks();
            promise.then(data => {
                data.forEach((element) => {
                    this.searchView.update(element);
                });
            });
        }
    }
}
//# sourceMappingURL=searchController.js.map