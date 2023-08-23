import {Component, OnInit} from '@angular/core';
import { Task } from '../model/task.model';
import {TaskService} from "../service/task.service";


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit{

    tasks : Task[] = [];

    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
      this.getTaskList();

    }

    getTaskList(){

        this.taskService.getTasks().subscribe(res => {
            this.tasks = res;

        }, error => console.log(error)
        );
        this.taskService.onTaskAdded.subscribe(res =>{
            this.tasks.push(res)
        });

    }

    onTaskChange(event:any, task: Task) {
        this.taskService.saveTask(task, event.target.checked).
        subscribe(res =>{

        })
    }

    getDueDateLabel(task: Task) {
        return task.completed ? 'bg-success' : 'bg-primary';
    }
}
