

export class UserService{
        public async getUsers():Promise<any>{ 
        let users = await fetch('http://localhost:3000/api/v1/user/', {method: 'GET'});
        let userData = await users;
        return userData.json();
    }
    public async getUserById(id:string):Promise<any>{ 
        let users = await fetch(`http://localhost:3000/api/v1/user/${id}`, {method: 'GET'});
        let userData = await users;
        return userData.json();
    }
    public async registerUsers(users:any){
        
        let payload = {
            'name':users['name'],
            'cpf':users['cpf'],
            'birthDate':users['birthDate'],
            'email':users['email'],
            'password':users['password'],
            'address':users['address'],
            'number':users['number'],
            'complement':users['complement'],
            'city':users['city'],
            'state':users['state'],
            'country':users['country'],  
        }
        console.log(payload)
        await fetch('http://localhost:3000/api/v1/user/',
        {
            method: 'POST',
            headers: {
                
                'content-type':'application/json'
                
            },
            body:JSON.stringify(payload)
            
        })
        .then(function(res){return res.json;})
        .then(function(data){console.log(JSON.stringify(data))})
    }
    async editUser(users:any, id:string){
        let payload = {
            'name':users['name'],
            'cpf':users['cpf'],
            'birthDate':users['birthDate'],
            'email':users['email'],
            'password':users['password'],
            'address':users['address'],
            'number':users['number'],
            'complement':users['complement'],
            'city':users['city'],
            'state':users['state'],
            'country':users['country'],  
        }
        console.log(payload)
        await fetch(`http://localhost:3000/api/v1/user/${id}`,
        {
            method: 'PUT',
            headers: {
                
                'content-type':'application/json'
                
            },
            body:JSON.stringify(payload)
            
        })
        .then(function(res){return res.json;})
        .then(function(data){console.log(JSON.stringify(data))})
    }
    public async deleteUser(id:string):Promise<any>{ 
        let users = await fetch(`http://localhost:3000/api/v1/user/${id}`, {method: 'DELETE'});
        let userData = await users;
        return userData.json();
    }
        
}