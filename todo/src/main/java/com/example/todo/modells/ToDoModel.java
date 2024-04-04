package com.example.todo.modells;

import java.util.UUID;

public class ToDoModel {

    private String id;
    private String task;
    private boolean completed;
    private String description;

    public ToDoModel() {
        this.id = UUID.randomUUID().toString();
    }

    public ToDoModel(String task) {
        this.id = UUID.randomUUID().toString();
        this.task = task;
        this.completed = false;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
