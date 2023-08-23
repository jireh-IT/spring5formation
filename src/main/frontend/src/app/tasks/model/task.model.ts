export class Task{

    public id : number;
    public name: string;
    public dueDate: string;
    public isCompleted: boolean;

    constructor(id : number, name: string, dueDate: string, isCompleted: boolean) {
        this.id = id;
        this.name = name;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }


}
