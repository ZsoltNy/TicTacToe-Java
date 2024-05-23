package com.example.todo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.todo.modells.ToDoModel;
import com.example.todo.services.ToDoService;

@RestController
public class ToDoController {

    @Autowired
    private ToDoService service;

    @GetMapping("/todos")
    public ResponseEntity<List<ToDoModel>> findAll() {
        List<ToDoModel> todos = service.findAll();
        return ResponseEntity.ok(todos);
    }

    @GetMapping("/todos/{id}")
    public ResponseEntity<ToDoModel> findById(@PathVariable String id) {
        ToDoModel todo = service.findbyId(id);
        if (todo != null) {
            return ResponseEntity.ok(todo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/todos")
    public ResponseEntity<Void> addToDo(@RequestBody ToDoModel toDoModel) {
        service.create(toDoModel);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/todos/{id}")
    public ResponseEntity<Void> update(@PathVariable String id, @RequestBody ToDoModel updatedModel) {
        ToDoModel existingTodo = service.findbyId(id);
        if (existingTodo != null) {
            service.update(id, updatedModel);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/todos/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        ToDoModel existingTodo = service.findbyId(id);
        if (existingTodo != null) {
            service.delete(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
