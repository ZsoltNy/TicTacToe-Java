package com.example.todo.services;

import java.util.List;

import com.example.todo.modells.ToDoModel;

public interface ToDoService {

    public ToDoModel create(ToDoModel toDoModel);

    public List<ToDoModel> findAll();

    public ToDoModel findbyId(String id);

    public void update(String id);

    public void delete(String id);
}
