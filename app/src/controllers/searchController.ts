import { TaskService } from "../services/taskServices.js";
import { UserService } from "../services/userServices.js";
import { SearchView } from "../views/SearchView.js";

export class SearchController{
    private searchView = new SearchView('#search-results'); 
    constructor(){
        this.searchView.update('hello world')
    }
}