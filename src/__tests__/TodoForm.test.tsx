import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

describe("TodoForm", () => {
    test("renders TodoInput and TodoPlaceholder when no tasks", () => {
      render(<TodoForm />);
  
      const inputElement = screen.getByPlaceholderText(/type your task/i);
      expect(inputElement).toBeInTheDocument();
  
      const placeholderElement = screen.getByText(/you don't have any tasks!/i);
      expect(placeholderElement).toBeInTheDocument();
    });
  
    test("adds a task when Enter is pressed", () => {
      render(<TodoForm />);
  
      const inputElement = screen.getByPlaceholderText(/type your task/i);
      const taskText = "New Task";
  
      fireEvent.change(inputElement, { target: { value: taskText } });
      fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });
  
      const taskElements = screen.getAllByText(taskText);
      expect(taskElements.length).toBeGreaterThan(0);
    });
  
    test("adds a task when ADD button is clicked", () => {
      render(<TodoForm />);
  
      const inputElement = screen.getByPlaceholderText(/type your task/i);
      const buttonElement = screen.getByText(/add/i);
      const taskText = "New Task";
  
      fireEvent.change(inputElement, { target: { value: taskText } });
      fireEvent.click(buttonElement);
  
      const taskElements = screen.getAllByText(taskText);
      expect(taskElements.length).toBeGreaterThan(0);
    });
  
    test("toggles task completion status when change is called", () => {
      render(<TodoForm />);
  
      const inputElement = screen.getByPlaceholderText(/type your task/i);
      const buttonElement = screen.getByText(/add/i);
      const taskText = "New Task";
  
      fireEvent.change(inputElement, { target: { value: taskText } });
      fireEvent.click(buttonElement);
  
      const checkboxes = screen.getAllByRole("checkbox");
      const firstCheckbox = checkboxes[0];
      fireEvent.click(firstCheckbox);
  
      expect(firstCheckbox).toBeChecked();
    });

  });