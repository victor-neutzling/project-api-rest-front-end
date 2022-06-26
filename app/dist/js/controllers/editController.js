var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ValidationHelper } from "../helpers/validationHelper.js";
import { UserService } from "../services/userServices.js";
import { TaskService } from "../services/taskServices.js";
export class editController {
    constructor() {
        this.userID = document.querySelector('#user-id');
        this.name = document.querySelector('#name');
        this.cpf = document.querySelector('#cpf');
        this.birthDate = document.querySelector('#birth-date');
        this.email = document.querySelector('#email');
        this.password = document.querySelector('#password');
        this.address = document.querySelector('#address');
        this.number = document.querySelector('#number');
        this.complement = document.querySelector('#complement');
        this.city = document.querySelector('#city');
        this.state = document.querySelector('#state');
        this.country = document.querySelector('#country');
        this.taskID = document.querySelector('#task-id');
        this.description = document.querySelector('#description');
        this.date = document.querySelector('#date');
        this.user = document.querySelector('#user');
        this.userServices = new UserService();
        this.taskServices = new TaskService();
    }
    editUser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.validateFields()) {
                if (!confirm('Are you sure you want to register this user into the database?'))
                    return;
                let uservalues = yield {
                    'name': this.name.value,
                    'cpf': this.cpf.value,
                    'birthDate': this.birthDate.value,
                    'email': this.email.value,
                    'password': this.password.value,
                    'address': this.address.value,
                    'number': this.number.value,
                    'complement': this.complement.value,
                    'city': this.city.value,
                    'state': this.state.value,
                    'country': this.country.value
                };
                this.userServices.editUser(uservalues, this.userID.value);
                console.log("user registered");
            }
            else {
                alert("verify that all the fields are filled correctly. all fields are mandatory.");
            }
        });
    }
    findUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.userID.value == '' || this.userID.value == null) {
                    alert('please insert the id of the user');
                    return;
                }
                let userData = yield this.userServices.getUserById(this.userID.value);
                if (userData['message']) {
                    alert('user not found');
                    return;
                }
                this.name.value = userData['name'];
                this.cpf.value = userData['cpf'];
                this.birthDate.value = userData['birthDate'];
                this.email.value = userData['email'];
                this.password.value = userData['password'];
                this.address.value = userData['address'];
                this.number.value = userData['number'];
                this.complement.value = userData['complement'];
                this.city.value = userData['city'];
                this.state.value = userData['state'];
                this.country.value = userData['country'];
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    findTask() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.taskID.value == '' || this.taskID.value == null) {
                    alert('please insert the id of the task');
                    return;
                }
                let taskData = yield this.taskServices.getTaskById(this.taskID.value);
                if (taskData['message']) {
                    alert('task not found');
                    return;
                }
                this.description.value = taskData['description'];
                this.date.value = taskData['date'];
                this.user.value = taskData['user'];
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    editTask() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.validateTasks()) {
                if (!confirm('Are you sure you want to register this task into the database?'))
                    return;
                let taskValues = yield {
                    'description': this.description.value,
                    'date': this.date.value,
                    'user': this.user.value
                };
                console.log('324');
                this.taskServices.editTask(taskValues, this.taskID.value);
                console.log("task registered");
            }
            else {
                alert("verify that all the fields are filled correctly. all fields are mandatory.");
            }
        });
    }
    validateFields() {
        if (this.name.value != null)
            if (ValidationHelper.checkName(this.name.value) == false)
                return false;
        if (this.cpf.value != null)
            if (ValidationHelper.checkCpf(this.cpf.value) == false)
                return false;
        if (this.birthDate.value != null)
            if (ValidationHelper.checkBirthDate(this.birthDate.value) == false)
                return false;
        if (this.email.value != null)
            if (ValidationHelper.checkEmail(this.email.value) == false)
                return false;
        if (this.password.value != null)
            if (ValidationHelper.checkPassword(this.password.value) == false)
                return false;
        if (this.address.value != null)
            if (ValidationHelper.checkAddress(this.address.value) == false)
                return false;
        if (this.number.value != null)
            if (ValidationHelper.checkNumber(this.number.value) == false)
                return false;
        if (this.complement.value != null)
            if (ValidationHelper.checkComplement(this.complement.value) == false)
                return false;
        if (this.city.value != null)
            if (ValidationHelper.checkCity(this.city.value) == false)
                return false;
        if (this.state.value != null)
            if (ValidationHelper.checkState(this.state.value) == false)
                return false;
        if (this.country.value != null)
            if (ValidationHelper.checkCountry(this.country.value) == false)
                return false;
        return true;
    }
    validateTasks() {
        if (this.description.value != null)
            if (ValidationHelper.checkName(this.description.value) == false)
                return false;
        if (this.date.value != null)
            if (ValidationHelper.checkBirthDate(this.date.value) == false)
                return false;
        if (this.user.value != null)
            if (ValidationHelper.checkPassword(this.user.value) == false)
                return false;
        return true;
    }
}
//# sourceMappingURL=editController.js.map