package com.example.todo.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todo.modells.ToDoModel;

@Service
public class ToDoServiceImpl implements ToDoService {

    private List<ToDoModel> toDoList = new ArrayList<>(Arrays.asList(new ToDoModel("create todo list"),
            new ToDoModel("work on todo list"),
            new ToDoModel("finish todo list")));

    @Override
    public void create(ToDoModel toDoModel) {
        toDoList.add(toDoModel);
    }

    @Override
    public List<ToDoModel> findAll() {
        return toDoList;
    }

    @Override
    public ToDoModel findbyId(String id) {
        return toDoList
                .stream()
                .filter(todo -> todo.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @Override
    public void update(String id, ToDoModel updatedModel) {
        for (ToDoModel toDoModel : toDoList) {
            if (toDoModel.getId().equals(id)) {
                toDoModel.setTask(updatedModel.getTask());
            }
        }
    }

    @Override
    public void delete(String id) {
        toDoList.removeIf(toDoModel -> toDoModel.getId().equals(id));
    }

}
