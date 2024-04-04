package com.example.todo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.todo.modells.ToDoModel;

@SpringBootTest
class TodoApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void testToDoModelConstructor() {
		ToDoModel toDo = new ToDoModel();

		assertNotNull(toDo.getId());

		assertNull(toDo.getTask());

		assertFalse(toDo.isCompleted());

		assertNull(toDo.getDescription());
	}

	@Test
	public void testToDoModelConstructorWithTask() {

		ToDoModel toDo = new ToDoModel("Task 1");

		assertNotNull(toDo.getId());

		assertEquals("Task 1", toDo.getTask());

		assertFalse(toDo.isCompleted());

		assertNull(toDo.getDescription());
	}

	@Test
	public void testSetId() {

		ToDoModel toDo = new ToDoModel();

		toDo.setId("custom-id");

		assertEquals("custom-id", toDo.getId());
	}

	@Test
	public void testSetTask() {

		ToDoModel toDo = new ToDoModel();

		toDo.setTask("Task 2");

		assertEquals("Task 2", toDo.getTask());
	}

	@Test
	public void testSetCompleted() {

		ToDoModel toDo = new ToDoModel();

		toDo.setCompleted(true);

		assertTrue(toDo.isCompleted());
	}

	@Test
	public void testSetDescription() {

		ToDoModel toDo = new ToDoModel();

		toDo.setDescription("Description for Task 3");

		assertEquals("Description for Task 3", toDo.getDescription());
	}

}
