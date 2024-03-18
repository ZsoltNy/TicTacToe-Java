package com.example.todo.modells;

public class ToDoModel {

    public ToDoModel() {
    }

    private String id;

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

    private String task;
    private boolean completed;
    private String description;

    public ToDoModel(String id, String task, boolean completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

}
