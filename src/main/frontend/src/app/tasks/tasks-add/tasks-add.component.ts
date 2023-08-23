import { Component } from '@angular/core';
import {TaskService} from "../service/task.service";
import {Task} from "../model/task.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent {

    addTaskValue:string = "";
    constructor(private taskService: TaskService) {
    }

    onTaskAdd($event: any) {
        let task: Task = new Task($event.target.value, this.getTodayAsString(), false);
        this.taskService.addTask(task).subscribe(
            res => {
                //clear input
                this.addTaskValue = "";
                this.taskService.onTaskAdded.emit(res);


            }
        );

    }

    getTodayAsString(){
        let today = new Date();
        let dd: any = today.getDay();
        let mm: any = today.getMonth();
        let yyyy: any = today.getFullYear();

        if(dd < 10){
           dd = '0' + dd;
        }
        if(mm < 10){
            mm = '0' + mm;
        }

        return mm + '/' + dd + '/' + yyyy;
    }
}
