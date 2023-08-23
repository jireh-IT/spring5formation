import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

    getTasks(){
      return this.http.get<Task[]>('/api/tasks');
    }

}
