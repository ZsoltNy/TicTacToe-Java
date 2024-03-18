package com.example.todo.services;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo.modells.ToDoModel;

@Service
public class ToDoServiceImpl implements ToDoService {

    private List<ToDoModel> ToDoList = Arrays.asList(new ToDoModel("first task", "create todo list", false),
            new ToDoModel("second task", "work on todo list", false),
            new ToDoModel("third task", "finish todo list", false));

    @Override
    public void create(ToDoModel toDoModel) {
        ToDoList.add(toDoModel);
    }

    @Override
    public List<ToDoModel> findAll() {
        return ToDoList;
    }

    @Override
    public ToDoModel findbyId(String id) {
        return ToDoList
                .stream()
                .filter(todo -> todo.getId().equals(id))
                .findFirst()
                .orElse(null);
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
