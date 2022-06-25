export abstract class View<T>{
    protected element: HTMLElement;
    constructor(selector:string){
        const element = document.querySelector(selector);

        if(element){
            this.element = element as HTMLElement;
        }else{
            throw Error("selector doesn't exist in the DOM, please verify.")
        }
    }

    public update(model:T):void{
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}