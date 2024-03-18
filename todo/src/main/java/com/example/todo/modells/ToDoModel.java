package com.example.todo.modells;

public class ToDoModel {

    private String id;
    private String task;
    private boolean completed;
    private String description;

    public ToDoModel(String id, String task, boolean completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

}
