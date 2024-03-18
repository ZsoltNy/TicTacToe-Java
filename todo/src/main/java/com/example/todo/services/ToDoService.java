package com.example.todo.services;

import java.util.List;

import com.example.todo.modells.ToDoModel;

public interface ToDoService {

    public ToDoModel create();

    public List<ToDoModel> findAll();

    public ToDoModel findbyId();

    public void update();

    public void delete();
}
