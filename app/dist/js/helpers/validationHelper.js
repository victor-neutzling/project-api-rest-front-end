export class ValidationHelper {
    static checkName(name) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name);
    }
    static checkCpf(cpf) {
        return /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(cpf);
    }
    static checkBirthDate(birthDate) {
        return /^\d{2}\/\d{2}\/\d{4}$/.test(birthDate) && parseInt(birthDate.split('/')[2]) <= 2004;
    }
    static checkEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }
    static checkPassword(password) {
        return password.length >= 6;
    }
    static checkAddress(address) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address);
    }
    static checkNumber(password) {
        return password.length >= 3;
    }
    static checkComplement(password) {
        return password.length >= 3;
    }
    static checkCity(address) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address);
    }
    static checkState(address) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address);
    }
    static checkCountry(address) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address);
    }
}
//# sourceMappingURL=validationHelper.js.map