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
export class RegisterController {
    constructor() {
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
        this.userServices = new UserService();
    }
    registerUser() {
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
                this.userServices.registerUsers(uservalues);
                console.log("user registered");
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
}
//# sourceMappingURL=registerController.js.map