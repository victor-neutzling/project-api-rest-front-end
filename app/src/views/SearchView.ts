import { SearchItem } from '../models/SearchItem.js';
import { View } from './View.js';


export class SearchView extends View<SearchItem>{
    protected template(model: SearchItem): string {
        return `
        <div>
            
        </div>
        `
    }
}