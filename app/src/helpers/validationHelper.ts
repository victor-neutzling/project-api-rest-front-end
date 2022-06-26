export class ValidationHelper{
    static checkName(name:string):boolean{
        
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(name) 
    }
    static checkCpf(cpf:string):boolean{
        return /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(cpf)
    }
    static checkBirthDate(birthDate:string):boolean{
        return /^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)
    }
    static checkEmail(email:string):boolean{
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    }
    static checkPassword(password:string):boolean{
        return password.length >= 3;
    }
    static checkAddress(address:string):boolean{
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address)
    }
    static checkNumber(password:string):boolean{
        return password.length >= 3;
    }
    static checkComplement(password:string):boolean{
        return password.length >= 3;
    }
    static checkCity(address:string):boolean{
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address)
    }
    static checkState(address:string):boolean{
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address)
    }
    static checkCountry(address:string):boolean{
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(address)
    }
}