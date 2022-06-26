import { ValidationHelper } from "../helpers/validationHelper.js";
import { UserService } from "../services/userServices.js";
import { TaskService } from "../services/taskServices.js";

export class editController{
    private userID = document.querySelector('#user-id');
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

    async editUser(){
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
             this.userServices.editUser(uservalues, (this.userID as HTMLInputElement).value)
            console.log("user registered");



        }else{
            alert("verify that all the fields are filled correctly. all fields are mandatory.")
        }
    }
    async findUser(){
        try{
            if((this.userID as HTMLInputElement).value == ''||(this.userID as HTMLInputElement).value == null){
                alert('please insert the id of the user')
                return
            }
            let userData = await this.userServices.getUserById((this.userID as HTMLInputElement).value)
            if(userData['message']){ 
                //users don't have a message field, however, the 'user not found' error does
                //so it enters this condition if the user was not found
                alert('user not found')
                return
            }
            (this.name as HTMLInputElement).value = userData['name'];
            (this.cpf as HTMLInputElement).value = userData['cpf'];
            (this.birthDate as HTMLInputElement).value = userData['birthDate'];
            (this.email as HTMLInputElement).value = userData['email'];
            (this.password as HTMLInputElement).value = userData['password'];
            (this.address as HTMLInputElement).value = userData['address'];
            (this.number as HTMLInputElement).value = userData['number'];
            (this.complement as HTMLInputElement).value = userData['complement'];
            (this.city as HTMLInputElement).value = userData['city'];
            (this.state as HTMLInputElement).value = userData['state'];
            (this.country as HTMLInputElement).value = userData['country'];

        }catch(err){
            throw new Error(err)
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
}