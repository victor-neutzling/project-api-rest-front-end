import { SearchItem } from '../models/SearchItem.js';
import { View } from './View.js';


export class SearchView extends View<SearchItem>{
    protected template(model: string): string {
        return `
        <div>
            ${model}
        </div>
        `
    }
}