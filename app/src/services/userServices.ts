export class UserService{
        public async getUsers():Promise<any>{ 
        let users = await fetch('http://localhost:3000/api/v1/user/', {method: 'GET'});
        let userData = await users;
        return userData.json();
    }
}