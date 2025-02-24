import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders TodoTitle and TodoForm", () => {
    render(<App />);
  
    const titleElement = screen.getByText(/to-do list/i);
    expect(titleElement).toBeInTheDocument();
  
    const inputElement = screen.getByPlaceholderText(/type your task/i);
    expect(inputElement).toBeInTheDocument();
  });