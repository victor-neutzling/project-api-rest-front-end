import { TaskService } from "../services/taskServices.js";
import { UserService } from "../services/userServices.js";
import { SearchView } from "../views/SearchView.js";

export class SearchController{
    private userService = new UserService()
    private taskService = new TaskService()
    private searchBar = document.getElementById('sb')
    private searchView = new SearchView('#search-results'); 
    constructor(){

    }

    searchUsers(){
        const temp:HTMLElement | null = document.querySelector('#search-results')
        if(temp !== null)
            temp.innerHTML = ''
        if((this.searchBar as HTMLInputElement).value.length !== 0){
            const promise = this.userService.getUsers();
            promise.then(data => {
                data.forEach((element:any) => {
                    
                    if(element['name'].includes((this.searchBar as HTMLInputElement).value)){
                        this.searchView.update(element);
                    }
                });
            });
        }else{
        const promise = this.userService.getUsers();
        promise.then(data => {
            data.forEach((element:any) => {
                this.searchView.update(element);
            });
        });}
    }
    searchTasks(){
        const temp:HTMLElement | null = document.querySelector('#search-results')
        if(temp !== null){
            temp.innerHTML = ''
        }
        if((this.searchBar as HTMLInputElement).value.length !== 0){
            const promise = this.taskService.getTasks();
            promise.then(data => {
                data.forEach((element:any) => {
                    
                    if(element['description'].includes((this.searchBar as HTMLInputElement).value)){
                        this.searchView.update(element);
                    }
                });
            });
        }else{
        const promise = this.taskService.getTasks();
        promise.then(data => {
            data.forEach((element:any) => {
                this.searchView.update(element);
            });
        });}
    }
}