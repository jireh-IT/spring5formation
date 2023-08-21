package com.jireh.task.service;

import com.jireh.task.domain.Task;
import org.springframework.stereotype.Service;


public interface TaskService {

    Iterable<Task> list();
    Task save(Task task);
}
