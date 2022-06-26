import { View } from './View.js';
export class SearchView extends View {
    template(model) {
        if (model['birthDate'] === undefined) {
            return `<div class="search-item">
            <div>
            <h2>description: ${model['description']}</h2>
            <h2>date: ${model['date']}</h2>
            <h2>user: ${model['user']}</h2>
            <h2>ID: ${model['_id']}</h2>
            </div>
        </div>`;
        }
        return `
        <div class="search-item">
            <div>
            <h2>Name: ${model['name']}</h2>
            <h2>Cpf: ${model['cpf']}</h2>
            <h2>Birthdate: ${model['birthDate']}</h2>
            <h2>Email: ${model['email']}</h2>
            <h2>Password: ${model['password']}</h2>
            <h2>Address: ${model['address']}</h2>
            </div><div>
            <h2>Number: ${model['number']}</h2>
            <h2>Complement: ${model['complement']}</h2>
            <h2>City: ${model['city']}</h2>
            <h2>State: ${model['state']}</h2>
            <h2>Country: ${model['country']}</h2>
            <h2>ID: ${model['_id']}</h2>
            </div>
        </div>
        `;
    }
}
//# sourceMappingURL=SearchView.js.map