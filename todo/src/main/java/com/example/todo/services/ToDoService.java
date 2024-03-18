package com.example.todo.services;

import java.util.List;

import com.example.todo.modells.ToDoModel;

public interface ToDoService {

    ToDoModel create();

    List<ToDoModel> findAll();

    ToDoModel findbyId(String id);

    void update(String id);

    void delete();
}
