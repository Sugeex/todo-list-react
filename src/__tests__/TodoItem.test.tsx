import { render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem/TodoItem";

test("renders todo item with text", () => {
  const todo = { id: 1, text: "Test Todo", isComplite: false };
  render(<TodoItem {...todo} deleteItem={() => {}} change={() => {}} editItem={() => {}} />);
  const todoText = screen.getByText(/test todo/i);
  expect(todoText).toBeInTheDocument();
});