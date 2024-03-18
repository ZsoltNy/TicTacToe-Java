package com.example.todo.services;

import java.util.Arrays;
import java.util.List;

import com.example.todo.modells.ToDoModel;

public class ToDoServiceImpl implements ToDoService {

    private List<ToDoModel> ToDoList = Arrays.asList(new ToDoModel("first task", "create todo list", false),
            new ToDoModel("second task", "work on todo list", false),
            new ToDoModel("third task", "finish todo list", false));

    @Override
    public ToDoModel create() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'create'");
    }

    @Override
    public List<ToDoModel> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public ToDoModel findbyId(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findbyId'");
    }

    @Override
    public void update(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    @Override
    public void delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}
