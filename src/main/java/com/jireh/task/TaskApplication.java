package com.jireh.task;

import com.jireh.task.domain.Task;
import com.jireh.task.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class TaskApplication {

    public static void main(String[] args) {

        SpringApplication.run(TaskApplication.class, args);
    }

    @Bean
    CommandLineRunner runner (TaskService taskService){
        return  args -> {
            taskService.save(new Task(1L, "Meet Kin renovation", LocalDate.now(), true));
            taskService.save(new Task(2L, "Meet Fontaine", LocalDate.now(), false));
            taskService.save(new Task(3L, "Lumumba Lab Agile", LocalDate.now(), false));
            taskService.save(new Task(4L, "Meet avec Francis Tshi", LocalDate.now(), false));
        };
    }

}
