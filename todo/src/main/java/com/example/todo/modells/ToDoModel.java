package com.example.todo.modells;

public class ToDoModel {

    private Long id;
    private String task;
    private boolean completed;

    public ToDoModel(Long id, String task, boolean completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

}
