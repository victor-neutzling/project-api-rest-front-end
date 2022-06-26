export class TaskService{
    public async getTasks():Promise<any>{ 
        let tasks = await fetch('http://localhost:3000/api/v1/task/', {method: 'GET'});
        let taskData = await tasks;
        return taskData.json();
    }
    public async getTaskById(id:string):Promise<any>{ 
        let tasks = await fetch(`http://localhost:3000/api/v1/task/${id}`, {method: 'GET'});
        let taskData = await tasks;
        return taskData.json();
    }
    public async registerTasks(tasks:any){
        
        let payload = {
            'description':tasks['description'],
            'date':tasks['date'],
            'user':tasks['user']
            
        }
        console.log(payload)
        await fetch('http://localhost:3000/api/v1/task/',
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
    async editTask(tasks:any, id:string){
        let payload = {
            'description':tasks['description'],
            'date':tasks['date'],
            'user':tasks['user']
            
        }
        console.log(payload)
        await fetch(`http://localhost:3000/api/v1/task/${id}`,
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
}