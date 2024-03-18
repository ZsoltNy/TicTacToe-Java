package com.example.todo.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.modells.ToDoModel;

@RestController
public class ToDoController {

    // @Autowired
    // private TodoItemRepository todoItemRepository;

    // private List<ToDoModel> todos = new ArrayList(Arrays.asList(
    // new ToDoModel("1 Title", 1, " Description"),
    // new ToDoModel("2 Title", 2, " Description"),
    // new ToDoModel("3 Title", 3, " Description")));

    @GetMapping("/")
    public ResponseEntity<List<ToDoModel>> getWelcome() {

        List<ToDoModel> todos = new ArrayList(Arrays.asList(
                new ToDoModel("1 Title", 1, " Description"),
                new ToDoModel("2 Title", 2, " Description"),
                new ToDoModel("3 Title", 3, " Description")));

        /*
         * ToDoItem todoItem = new TodoItem();
         * git
         * todoItem.setCompleted(false);
         * todoItem.setDescription("Hello World");
         * 
         * todoItemRepository.save(todoItem);
         * 
         * Iterable<TodoItem> todoItems = todoItemRepository.findAll();
         * 
         * model.addAttribute("todoItems", todoItems);
         */

        return new ResponseEntity<>(todos, HttpStatus.OK);
    }

}
