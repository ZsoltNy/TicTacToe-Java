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

    @GetMapping("/")
    public ResponseEntity<List<ToDoModel>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ToDoModel> findById(@PathVariable String id) {
        return ResponseEntity.ok(service.findbyId(id));

    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable String id, @RequestBody ToDoModel updatedModel) {
        service.update(id, updatedModel);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/")
    public ResponseEntity<Void> addToDo(@RequestBody ToDoModel toDoModel) {
        service.create(new ToDoModel(toDoModel.getId(), toDoModel.getTask()));
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }

}
