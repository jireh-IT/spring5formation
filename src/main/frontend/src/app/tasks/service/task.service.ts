import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    onTaskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private http: HttpClient) { }

    getTasks(){
      return this.http.get<Task[]>('/api/tasks');
    }

    saveTask(task: Task, checked: boolean){
      task.completed = checked;
      return this.http.post('/api/tasks/save',task);
    }

    addTask(task: Task){
        return this.http.post<Task>('/api/tasks/save',task);
    }

}
