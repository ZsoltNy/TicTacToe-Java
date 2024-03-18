package com.example.todo.repository;

import java.util.ArrayList;
import java.util.List;

import com.example.todo.modells.ToDoModel;

public interface ToDoModelRepository {

    public Integer idCounter = 0;
    public List<ToDoModel> todoItems = new ArrayList<>();

    public List<ToDoModel> fetchAllTodos(){
		if (todoItems.size() == 0) {
			ToDoModel item1 = new ToDoModel();
			item1.setIsDone(false);
			item1.setTask("Click to edit task name");
			item1.setId(idCounter++);
			
			todoItems.add(item1);
			
		}
		return todoItems;
}

public Todo save (ToDoModel todoItem) {
    todoItem.setId(idCounter++);
    todoItems.add(todoItem); 
    return todoItem;


}
}
