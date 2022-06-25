

let btnFindUsers = document.querySelector('#find-users');
let btnFindTasks = document.querySelector('#find-tasks');

async function getUsers():Promise<any>{ //returns promise array of object
    let users = await fetch('http://localhost:3000/api/v1/user/', {method: 'GET'});
    let userData = await users;
    return userData.json();
}
async function getTasks():Promise<any>{ //returns promise array of tasks
    let tasks = await fetch('http://localhost:3000/api/v1/task/', {method: 'GET'});
    let taskData = await tasks;
    return taskData.json();
}

btnFindUsers?.addEventListener("click", event =>{
     const promise = getUsers();
     promise.then(data => { //handles promise
        console.log(data);
     });
});
btnFindTasks?.addEventListener('click',event =>{ 
    const promise = getTasks();
     promise.then(data => { //handles promise
        console.log(data);
     });
})