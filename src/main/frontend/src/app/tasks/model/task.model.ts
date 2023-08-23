export class Task{

    public id : number;
    public name: string;
    public dueDate: string;
    public completed: boolean;

    constructor(id : number, name: string, dueDate: string, isCompleted: boolean) {
        this.id = id;
        this.name = name;
        this.dueDate = dueDate;
        this.completed = isCompleted;
    }


}
