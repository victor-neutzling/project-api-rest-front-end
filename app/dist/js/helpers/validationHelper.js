export class ValidationHelper {
    static checkName(name) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name);
    }
    static checkCpf(cpf) {
        return /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(cpf);
    }
    static checkBirthDate(birthDate) {
        let splitDate = birthDate.split('/');
        let isValid = true;
        if (parseInt(splitDate[0]) == 1 || parseInt(splitDate[0]) == 3 || parseInt(splitDate[0]) == 5 || parseInt(splitDate[0]) == 7 || parseInt(splitDate[0]) == 8 || parseInt(splitDate[0]) == 10 || parseInt(splitDate[0]) == 12)
            if (parseInt(splitDate[1]) > 31)
                isValid = false;
        if (parseInt(splitDate[0]) == 4 || parseInt(splitDate[0]) == 6 || parseInt(splitDate[0]) == 9 || parseInt(splitDate[0]) == 11)
            if (parseInt(splitDate[1]) > 30)
                isValid = false;
        if (parseInt(splitDate[0]) == 2)
            if (parseInt(splitDate[1]) > 28)
                isValid = false;
        return /^\d{2}\/\d{2}\/\d{4}$/.test(birthDate) && parseInt(birthDate.split('/')[2]) <= 2004 && isValid;
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
    static checkDate(birthDate) {
        let date = new Date();
        let splitDate = birthDate.split('/');
        let isFuture = false;
        let isValid = true;
        if (parseInt(splitDate[0]) == 1 || parseInt(splitDate[0]) == 3 || parseInt(splitDate[0]) == 5 || parseInt(splitDate[0]) == 7 || parseInt(splitDate[0]) == 8 || parseInt(splitDate[0]) == 10 || parseInt(splitDate[0]) == 12)
            if (parseInt(splitDate[1]) > 31)
                isValid = false;
        if (parseInt(splitDate[0]) == 4 || parseInt(splitDate[0]) == 6 || parseInt(splitDate[0]) == 9 || parseInt(splitDate[0]) == 11)
            if (parseInt(splitDate[1]) > 30)
                isValid = false;
        if (parseInt(splitDate[0]) == 2)
            if (parseInt(splitDate[1]) > 28)
                isValid = false;
        if (parseInt(splitDate[2]) >= date.getFullYear())
            isFuture = true;
        if (parseInt(splitDate[2]) == date.getFullYear() && !isFuture)
            if (parseInt(splitDate[0]) >= date.getMonth() + 1)
                isFuture = true;
        if (parseInt(splitDate[2]) == date.getFullYear() && !isFuture)
            if (parseInt(splitDate[0]) == date.getMonth() + 1)
                if (parseInt(splitDate[1]) >= date.getDate())
                    isFuture = true;
        return /^\d{2}\/\d{2}\/\d{4}$/.test(birthDate) && isFuture && isValid;
    }
}
//# sourceMappingURL=validationHelper.js.map