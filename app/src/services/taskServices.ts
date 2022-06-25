export class TaskService{
    public async getTasks():Promise<any>{ 
        let tasks = await fetch('http://localhost:3000/api/v1/task/', {method: 'GET'});
        let taskData = await tasks;
        return taskData.json();
    }
}