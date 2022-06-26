import { ValidationHelper } from "../helpers/validationHelper.js";
import { UserService } from "../services/userServices.js";
import { TaskService } from "../services/taskServices.js";

export class RegisterController{
    private name = document.querySelector('#name');
    private cpf = document.querySelector('#cpf');
    private birthDate = document.querySelector('#birth-date');
    private email = document.querySelector('#email');
    private password = document.querySelector('#password');
    private address = document.querySelector('#address');
    private number = document.querySelector('#number');
    private complement = document.querySelector('#complement');
    private city = document.querySelector('#city');
    private state = document.querySelector('#state');
    private country = document.querySelector('#country');

    //tasks
    private description = document.querySelector('#description');
    private date = document.querySelector('#date');
    private user = document.querySelector('#user');
    
    private userServices = new UserService();
    private taskServices = new TaskService();  
    private users:any = []

    constructor(){
        this.userServices.getUsers().then((x:any)=>{
            this.users.push(x)
        })
    }

    async registerUser(){
        if(this.validateFields()){
            if (!confirm('Are you sure you want to register this user into the database?')) 
            return;
            
            let uservalues = await {
                'name':(this.name as HTMLInputElement).value,
                'cpf':(this.cpf as HTMLInputElement).value,
                'birthDate':(this.birthDate as HTMLInputElement).value,
                'email':(this.email as HTMLInputElement).value,
                'password':(this.password as HTMLInputElement).value,
                'address':(this.address as HTMLInputElement).value,
                'number':(this.number as HTMLInputElement).value,
                'complement':(this.complement as HTMLInputElement).value,
                'city':(this.city as HTMLInputElement).value,
                'state':(this.state as HTMLInputElement).value,
                'country':(this.country as HTMLInputElement).value

            }
            
            //register users
            this.userServices.registerUsers(uservalues)
            this.clearUsers()



        }else{
            alert("verify that all the fields are filled correctly. all fields are mandatory.")
        }
    }
    validateFields():boolean{
        if((this.name as HTMLInputElement).value != null)
        if(ValidationHelper.checkName((this.name as HTMLInputElement).value )==false)
        return false

        if((this.cpf as HTMLInputElement).value != null)
        if( ValidationHelper.checkCpf((this.cpf as HTMLInputElement).value)==false)
        return false

        if((this.birthDate as HTMLInputElement).value != null)
        if(ValidationHelper.checkBirthDate((this.birthDate as HTMLInputElement).value)==false)
        return false

        if((this.email as HTMLInputElement).value != null)
        if(ValidationHelper.checkEmail((this.email as HTMLInputElement).value)==false)
        return false

        if((this.password as HTMLInputElement).value != null)
        if( ValidationHelper.checkPassword((this.password as HTMLInputElement).value)==false)
        return false

        if((this.address as HTMLInputElement).value != null)
        if(ValidationHelper.checkAddress((this.address as HTMLInputElement).value)==false)
        return false

        if((this.number as HTMLInputElement).value != null)
        if(ValidationHelper.checkNumber((this.number as HTMLInputElement).value)==false)
        return false

        if((this.complement as HTMLInputElement).value != null)
        if( ValidationHelper.checkComplement((this.complement as HTMLInputElement).value)==false)
        return false

        if((this.city as HTMLInputElement).value != null)
        if(ValidationHelper.checkCity((this.city as HTMLInputElement).value)==false)
        return false

        if((this.state as HTMLInputElement).value != null)
        if( ValidationHelper.checkState((this.state as HTMLInputElement).value)==false)
        return false

        if((this.country as HTMLInputElement).value != null)
        if( ValidationHelper.checkCountry((this.country as HTMLInputElement).value)==false)
        return false
        
        return true
    }

    //tasks
    async registerTask(){
        if(this.validateTasks()){
            if (!confirm('Are you sure you want to register this task into the database?')) 
            return;
            
            let taskValues = await {
                'description':(this.description as HTMLInputElement).value,
                'date':(this.date as HTMLInputElement).value,
                'user':(this.user as HTMLInputElement).value

            }
            //register tasks
            this.taskServices.registerTasks(taskValues)
            this.clearTasks()

        }else{
            alert("verify that all the fields are filled correctly. all fields are mandatory.")
        }
        
    }
    validateTasks():boolean{
        if((this.description as HTMLInputElement).value != null) //checkname can also be applied to description
        if(ValidationHelper.checkName((this.description as HTMLInputElement).value )==false)
        return false

        if((this.date as HTMLInputElement).value != null) 
        if(ValidationHelper.checkDate((this.date as HTMLInputElement).value)==false)
        return false

        if((this.user as HTMLInputElement).value != null) //checkpassword can also be applied to user IDs
        if(ValidationHelper.checkUserId((this.user as HTMLInputElement).value, this.users )==false)
        return false

        return true
    }
    clearUsers(){
        (this.name as HTMLInputElement).value = "";
        (this.cpf as HTMLInputElement).value = "";
        (this.birthDate as HTMLInputElement).value = "";
        (this.email as HTMLInputElement).value = "";
        (this.password as HTMLInputElement).value = "";
        (this.address as HTMLInputElement).value = "";
        (this.number as HTMLInputElement).value = "";
        (this.complement as HTMLInputElement).value = "";
        (this.city as HTMLInputElement).value = "";
        (this.state as HTMLInputElement).value = "";
        (this.country as HTMLInputElement).value = "";
    }
    clearTasks(){
        (this.description as HTMLInputElement).value = "";
        (this.date as HTMLInputElement).value = "";
        (this.user as HTMLInputElement).value = "";
    }
}