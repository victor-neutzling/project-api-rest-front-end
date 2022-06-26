var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UserService {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield fetch('http://localhost:3000/api/v1/user/', { method: 'GET' });
            let userData = yield users;
            return userData.json();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield fetch(`http://localhost:3000/api/v1/user/${id}`, { method: 'GET' });
            let userData = yield users;
            return userData.json();
        });
    }
    registerUsers(users) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = {
                'name': users['name'],
                'cpf': users['cpf'],
                'birthDate': users['birthDate'],
                'email': users['email'],
                'password': users['password'],
                'address': users['address'],
                'number': users['number'],
                'complement': users['complement'],
                'city': users['city'],
                'state': users['state'],
                'country': users['country'],
            };
            console.log(payload);
            yield fetch('http://localhost:3000/api/v1/user/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function (res) { return res.json; })
                .then(function (data) { console.log(JSON.stringify(data)); });
        });
    }
    editUser(users, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = {
                'name': users['name'],
                'cpf': users['cpf'],
                'birthDate': users['birthDate'],
                'email': users['email'],
                'password': users['password'],
                'address': users['address'],
                'number': users['number'],
                'complement': users['complement'],
                'city': users['city'],
                'state': users['state'],
                'country': users['country'],
            };
            console.log(payload);
            yield fetch(`http://localhost:3000/api/v1/user/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(function (res) { return res.json; })
                .then(function (data) { console.log(JSON.stringify(data)); });
        });
    }
}
//# sourceMappingURL=userServices.js.map