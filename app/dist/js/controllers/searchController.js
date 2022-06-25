import { SearchView } from "../views/SearchView.js";
export class SearchController {
    constructor() {
        this.searchView = new SearchView('#search-results');
        this.searchView.update('hello world');
    }
}
//# sourceMappingURL=searchController.js.map